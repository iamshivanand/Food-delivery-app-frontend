import React, { useState } from "react";

//import of material ui

import { Container } from "@material-ui/core";
import { BootstrapButton } from "./style";
import { CssTextField, useStyles } from "./style";

//react spring import

import "./style.css";
function Login() {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(true);
  const [fadeit, setFadeit] = useState(true);

  const goToSignUp = () => {
    setTimeout(function () {
      setSignIn(!signIn);
    }, 700);
    // setSignIn(!signIn);
    setFadeit(!fadeit);
  };

  return (
    <div className="form">
      {signIn ? (
        <Container component="main" maxWidth="xs">
          <div className="signIn">
            <h2>Sign In</h2>
            <div>
              <CssTextField
                label="Email"
                required
                fullWidth
                variant="outlined"
                className={`${classes.textField} ${classes.margin}`}
                InputLabelProps={{ className: classes.inputlabel }}
                InputProps={{ className: classes.textField }}
              />
            </div>
            <div>
              <CssTextField
                label="Password"
                required
                fullWidth
                variant="outlined"
                className={`${classes.textField} ${classes.margin}`}
                InputLabelProps={{ className: classes.inputlabel }}
                InputProps={{ className: classes.textField }}
              />
            </div>
            <div>
              <BootstrapButton variant="contained" color="primary">
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
      ) : (
        <Container component="main" maxWidth="xs">
          <div className="signUp">
            <h2>Sign Up</h2>
            <div>
              <CssTextField
                label="Name"
                required
                fullWidth
                variant="outlined"
                className={`${classes.textField} ${classes.margin}`}
                InputLabelProps={{ className: classes.inputlabel }}
                InputProps={{ className: classes.textField }}
              />
            </div>
            <div>
              <CssTextField
                label="Email"
                required
                fullWidth
                variant="outlined"
                className={`${classes.textField} ${classes.margin}`}
                InputLabelProps={{ className: classes.inputlabel }}
                InputProps={{ className: classes.textField }}
              />
            </div>
            <div>
              <CssTextField
                label="Password"
                required
                fullWidth
                variant="outlined"
                className={`${classes.textField} ${classes.margin}`}
                InputLabelProps={{ className: classes.inputlabel }}
                InputProps={{ className: classes.textField }}
              />
            </div>
            <div>
              <CssTextField
                label="Confirm Password"
                required
                fullWidth
                variant="outlined"
                className={`${classes.textField} ${classes.margin}`}
                InputLabelProps={{ className: classes.inputlabel }}
                InputProps={{ className: classes.textField }}
              />
            </div>
            <div className="button">
              <BootstrapButton variant="contained" color="primary">
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
    </div>
  );
}

export default Login;
