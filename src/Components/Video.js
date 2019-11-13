import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    // backgroundColor: theme.palette.background.paper,
    border: "2px solid #000"
    // boxShadow: theme.shadows[5]
    // padding: theme.spacing(2, 4, 3)
  }
}));

const Video = props => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal open={props.open} onClose={props.handleModal}>
      <div style={modalStyle} className={classes.paper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=zTitoHKsyJg"
          playing
          controls
          width="100%"
          height="100%"
        ></ReactPlayer>
      </div>
    </Modal>
  );
};

export default Video;
