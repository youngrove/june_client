import React, { useState } from "react";
import { Button, Card, TextField } from "@material-ui/core";

import axios from "axios";

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundImage: `url(${require("../img/adminImg.jpg")})`,
    backgroundSize: "cover"
  },
  card: {
    minWidth: 300,
    marginTop: "6em"
  },
  avatar: {
    margin: "1em",
    display: "flex",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "skyblue"
  },
  hint: {
    marginTop: "1em",
    display: "flex",
    justifyContent: "center",
    color: "grey"
  },
  form: {
    padding: "0 1em 1em 1em"
  },
  input: {
    marginTop: "1em"
  },
  actions: {
    padding: "0 1em 1em 1em"
  }
};

const Login = props => {
  const [id, setId] = useState("");
  const [password, setPw] = useState("");

  const onSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_URL}/user/signin`, {
        id: id,
        password: password
      })
      .then(res => {
        if (res.status === 200) {
          console.log("@@@success");
          localStorage.setItem("isLogin", true);
          props.history.push("/admin");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div style={styles.main}>
      <div style={styles.card}>
        <form style={styles.form}>
          <Card>
            <div style={styles.input}>
              <TextField
                required
                label="id"
                onChange={e => setId(e.target.value)}
              />
              <br />
              <TextField
                required
                label="password"
                type="password"
                onChange={e => setPw(e.target.value)}
              />
            </div>
            <div>
              <Button color="primary" onClick={onSubmit}>
                로그인
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Login;
