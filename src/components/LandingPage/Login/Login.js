import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

//import of material ui
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Container } from "@material-ui/core";
import { BootstrapButton } from "./style";
import { CssTextField, useStyles } from "./style";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../../../actions/auth";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };
toast.configure();

function Login({
  closeLoginOrSignUp,
  isSignIn,
  isSignUp,
  setIsSignUp,
  setIsSignIn,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [formData, setFormData] = useState(initialState);

  const goToSignUp = () => {
    setIsSignUp(!isSignUp);
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("FormData", formData);
    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <div className="wrapper">
        <div className="closeButton" onClick={closeLoginOrSignUp}>
          <HighlightOffIcon />
        </div>
        <form onSubmit={handleSubmit}>
          {isSignIn && (
            <Container component="main" maxWidth="xs">
              <div className="signIn">
                <h2>Sign In</h2>
                <div>
                  <CssTextField
                    label="Email"
                    name="email"
                    required
                    fullWidth
                    variant="outlined"
                    className={`${classes.textField} ${classes.margin}`}
                    InputLabelProps={{ className: classes.inputlabel }}
                    InputProps={{ className: classes.textField }}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <CssTextField
                    label="Password"
                    name="password"
                    // type="password"
                    required
                    fullWidth
                    variant="outlined"
                    className={`${classes.textField} ${classes.margin}`}
                    InputLabelProps={{ className: classes.inputlabel }}
                    InputProps={{ className: classes.textField }}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <BootstrapButton
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Sign In
                  </BootstrapButton>
                </div>
                <div className="signInOption">
                  <p>
                    <span style={{ color: "burlywood" }}>Don't</span> have an
                    account? &nbsp; &nbsp;
                    <span
                      style={{ color: "cornsilk", cursor: "pointer" }}
                      onClick={goToSignUp}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </div>
            </Container>
          )}
          {isSignUp && (
            <Container component="main" maxWidth="xs">
              <div className="signUp">
                <h2>Sign Up</h2>
                <div>
                  <CssTextField
                    label="Name"
                    name="name"
                    required
                    fullWidth
                    variant="outlined"
                    className={`${classes.textField} ${classes.margin}`}
                    InputLabelProps={{ className: classes.inputlabel }}
                    InputProps={{ className: classes.textField }}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <CssTextField
                    label="Email"
                    name="email"
                    required
                    fullWidth
                    variant="outlined"
                    className={`${classes.textField} ${classes.margin}`}
                    InputLabelProps={{ className: classes.inputlabel }}
                    InputProps={{ className: classes.textField }}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <CssTextField
                    label="Password"
                    name="password"
                    // type="password"
                    required
                    fullWidth
                    variant="outlined"
                    className={`${classes.textField} ${classes.margin}`}
                    InputLabelProps={{ className: classes.inputlabel }}
                    InputProps={{ className: classes.textField }}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <CssTextField
                    label="Confirm Password"
                    name="confirmPassword"
                    // type="password"
                    required
                    fullWidth
                    variant="outlined"
                    className={`${classes.textField} ${classes.margin}`}
                    InputLabelProps={{ className: classes.inputlabel }}
                    InputProps={{ className: classes.textField }}
                    onChange={handleChange}
                  />
                </div>
                <div className="button">
                  <BootstrapButton
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Sign Up
                  </BootstrapButton>
                </div>
                <div className="signInOption">
                  <p>
                    <span style={{ color: "burlywood" }}>Already</span> have an
                    account? &nbsp; &nbsp;
                    <span
                      style={{ color: "cornsilk", cursor: "pointer" }}
                      onClick={goToSignUp}
                    >
                      Sign In
                    </span>
                  </p>
                </div>
              </div>
            </Container>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
