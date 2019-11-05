import React, { useState, useEffect } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/typography";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";

const Login = props => {
  const [id, setId] = useState("");
  const [password, setPw] = useState("");

  const onSubmit = () => {
    axios
      .post("http://localhost:3002/user/signin", {
        id: id,
        password: password
      })
      .then(res => {
        if (res.status === 200) {
          console.log("@@@success");
          localStorage.setItem("isLogin", true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <AppBar>
        <Typography>로그인</Typography>
      </AppBar>
      <TextField
        required
        label="id"
        onChange={e => setId(e.target.value)}
      ></TextField>
      <br />
      <TextField
        required
        label="password"
        onChange={e => setPw(e.target.value)}
      ></TextField>
      <div>
        <Button color="primary" onClick={onSubmit}>
          로그인
        </Button>
      </div>
      <div>
        <Button color="primary" onClick={onSubmit}>
          회원가입
        </Button>
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
