/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import { auth } from "../store";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Link from "next/link";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

const index = props => {
  const [openState, setOpenState] = useState(false);

  const handleClose = () => {
    setOpenState(false);
  };

  const handleClick = () => {
    setOpenState(true);
  };

  return (
    <div className={props.classes.root}>
      <Dialog open={openState} onClose={handleClose}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant="h4" gutterBottom>
        Material-UI
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        example project
      </Typography>
      <Typography gutterBottom>
        <Link href="/about">
          <a>Go to the about page</a>
        </Link>
      </Typography>
      <Typography gutterBottom>
        <Link href="/dashboard">
          <a>Go to the dashboard page</a>
        </Link>
      </Typography>
      <Typography gutterBottom>
        <Link href="/album">
          <a>Go to the album page</a>
        </Link>
      </Typography>
      <Typography gutterBottom>
        <Link href="/checkout">
          <a>Go to the checkout page</a>
        </Link>
      </Typography>
      <Typography gutterBottom>
        <Link href="/pricing">
          <a>Go to the pricing page</a>
        </Link>
      </Typography>
      <Typography gutterBottom>
        <Link href="/sign-in">
          <a>Go to the sign-in page</a>
        </Link>
      </Typography>
      <Typography gutterBottom>
        <Link href="/sign-up">
          <a>Go to the sign-up page</a>
        </Link>
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Super Secret Password
      </Button>
    </div>
  );
};

index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(index);
