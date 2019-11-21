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
    background: "url(https://source.unsplash.com/random/1600x900)",
    backgroundRepeat: "no-repeat",
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

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: ""
//     };
//   }
//   handleClick(event) {
//     var apiBaseUrl = "http://localhost:4000/api/";
//     var self = this;
//     var payload = {
//       email: this.state.username,
//       password: this.state.password
//     };
//     axios
//       .post(apiBaseUrl + "login", payload)
//       .then(function(response) {
//         console.log(response);
//         if (response.data.code == 200) {
//           console.log("Login successfull");
//         } else if (response.data.code == 204) {
//           console.log("Username password do not match");
//           alert("username password do not match");
//         } else {
//           console.log("Username does not exists");
//           alert("Username does not exist");
//         }
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }
//   render() {
//     return (
//       <div>
//         <MuiThemeProvider>
//           <div>
//             <Toolbar>
//               <Typography>로그인</Typography>
//             </Toolbar>
//             <TextField
//               hintText="Enter your Username"
//               floatingLabelText="Username"
//               onChange={(event, newValue) =>
//                 this.setState({ username: newValue })
//               }
//             />
//             <br />
//             <TextField
//               type="password"
//               hintText="Enter your Password"
//               floatingLabelText="Password"
//               onChange={(event, newValue) =>
//                 this.setState({ password: newValue })
//               }
//             />
//             <br />
//             <RaisedButton
//               label="Submit"
//               primary={true}
//               style={style}
//               onClick={event => this.handleClick(event)}
//             />
//           </div>
//         </MuiThemeProvider>
//       </div>
//     );
//   }
// }
// const style = {
//   margin: 15
// };
// export default Login;
