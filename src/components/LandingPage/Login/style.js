import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
export const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

export const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  inputlabel: {
    color: "white",
  },
  textField: {
    width: "40ch",
    borderColor: "white",
    color: "white",
  },
}));

export const styles = (theme) => ({
  palette: {
    primary: green,
  },
  multilineColor: {
    color: "white",
  },
});
export const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#FF9966",
    borderColor: "#FF9966",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#FFA500",
      borderColor: "#FFA500",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#FFA500",
      borderColor: "#FFA500",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(255,165,0,.5)",
    },
  },
})(Button);
