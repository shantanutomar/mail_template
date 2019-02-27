import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = {
  root: {
    padding: "0px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    borderRadius: "70px",
    border: "1px solid grey",
    boxShadow: "none"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
};

function SearchBarWithClose(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={props.searchValue}
        onChange={props.handleSearchChange}
        autoComplete="true"
      />
      <IconButton
        className={classes.iconButton}
        aria-label="Search"
        color="secondary"
        onClick={props.handleSearchClose}
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
}

SearchBarWithClose.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBarWithClose);
