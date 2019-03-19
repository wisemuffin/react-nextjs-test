import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { updateObject, checkValidity } from "../../shared/utility";
import * as actions from "../../store/actions/index";

import Layout from "../../components/UI/Layout";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const auth = props => {
  const { classes } = props;

  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Mail Address"
      },
      value: "",
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password"
      },
      value: "",
      validation: {
        required: true,
        minLength: 6
      },
      valid: false,
      touched: false
    }
  });
  const [isSignup, setIsSignup] = useState(false);

  // useEffect(() => {
  //   if (!props.buildingBurger && props.authRedirectPath !== '/') {
  //     props.onSetAuthRedirectPath();
  //   }
  // }, []);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true
      })
    });
    setAuthForm(updatedControls);
  };

  const submitHandler = event => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key]
    });
  }

  let form = formElementsArray.map(formElement => (
    <FormControl margin="normal" required fullWidth key={formElement.id}>
      <InputLabel htmlFor={formElement.id}>
        {formElement.config.elementConfig.placeholder}
      </InputLabel>
      <Input
        id={formElement.id}
        name={formElement.id}
        type={formElement.id}
        autoComplete={formElement.config.elementConfig.type}
        autoFocus
        onChange={event => inputChangedHandler(event, formElement.id)}
      />
    </FormControl>
  ));

  // if (props.loading) {
  //   form = <Spinner />;
  // }

  // let errorMessage = null;

  // if (props.error) {
  //   errorMessage = <p>{props.error.message}</p>;
  // }

  // let authRedirect = null;
  // if (props.isAuthenticated) {
  //   authRedirect = <Redirect to={props.authRedirectPath} />;
  // }

  return (
    <Layout>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignup ? "Sign Up" : "Sign In"}
          </Typography>
          <form className={classes.form}>
            {/* <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl> */}
            {form}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitHandler}
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <Button
              onClick={switchAuthModeHandler}
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              SWITCH TO {isSignup ? "SIGN IN" : "SIGN UP"}
            </Button>
          </form>
        </Paper>
      </main>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
    // authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(auth)
);
