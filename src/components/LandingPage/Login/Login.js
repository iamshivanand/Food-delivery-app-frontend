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
//famer motion
import { motion } from "framer-motion";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 1 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const formVariants = {
  hidden: {
    y: "-100vw",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0, duration: 1 },
  },
};

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
    <motion.div
      className="form"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="wrapper">
        <motion.div
          className="closeButton"
          onClick={closeLoginOrSignUp}
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <HighlightOffIcon />
        </motion.div>
        <form onSubmit={handleSubmit}>
          {isSignIn && (
            <Container component="main" maxWidth="xs">
              <motion.div
                className="signIn"
                variants={formVariants}
                initial="hidden"
                animate="visible"
              >
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
                    type="password"
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
              </motion.div>
            </Container>
          )}
          {isSignUp && (
            <Container component="main" maxWidth="xs">
              <motion.div
                className="signUp"
                variants={formVariants}
                initial="hidden"
                animate="visible"
              >
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
                    type="password"
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
                    type="password"
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
              </motion.div>
            </Container>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default Login;
