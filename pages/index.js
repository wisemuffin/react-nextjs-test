/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
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

class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
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
          <Link href="/sign-in-side">
            <a>Go to the sign-in-side page</a>
          </Link>
        </Typography>
        <Typography gutterBottom>
          <Link href="/sign-up">
            <a>Go to the sign-up page</a>
          </Link>
        </Typography>
        <Typography gutterBottom>
          <Link href="/sticky-footer">
            <a>Go to the sticky-footer page</a>
          </Link>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
        >
          Super Secret Password
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
