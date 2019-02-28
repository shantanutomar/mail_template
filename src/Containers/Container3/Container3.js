import React from "react";
import SearchBarWithSearch from "../../Components/SearchBarWithSearch/SearchBarWithSearch";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { withStyles } from "@material-ui/core/styles";
import PropGroupSelect from "../PropGroupSelect/PropGroupSelect";

const styles = theme => ({
  root: {
    display: "flex",
    padding: 10,
    margin: "10px 0",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  proprtiesTextStyle: {
    fontSize: 16,
    color: "#6f6f6f",
    fontWeight: "bold"
  },
  countTextStyle: {
    fontSize: 16,
    color: "lightgrey"
  },
  fab: {
    margin: theme.spacing.unit,
    textTransform: "capitalize",
    boxShadow: "none",
    padding: "0 10px",
    height: 38,
    width: 95
  },
  fabLabel: {
    "&>svg": { marginRight: 0 }
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
    color: "white"
  },
  loadingIcon: {
    margin: "auto",
    color: theme.palette.secondary.main,
    width: 16,
    height: 16
  },
  countHeaderStyle: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left"
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 12,
    letterSpacing: 0.3
  },
  loaderStyle: {
    color: "#ff9e61",
    fontSize: 12,
    letterSpacing: 0.3,
    margin: "auto"
  },
  "@media (min-width: 320px) and (max-width: 480px)": {
    fab: {
      display: "none"
    },
    countHeaderStyle: {
      display: "none"
    },
    loaderStyle: { display: "none" },
    root: {
      justifyContent: "center"
    }
  },
  "@media (min-width: 480px)": {
    togglePropGroupSelect: {
      display: "none"
    }
  }
});

class Container3 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <section className={classes.countHeaderStyle}>
          <span className={classes.proprtiesTextStyle}>Properties</span>
          <span className={classes.countTextStyle}>
            About 100, Results (0.24 Seconds)
          </span>
        </section>
        <section style={{ display: "flex" }}>
          <Fab
            variant="extended"
            aria-label="Delete"
            classes={{ root: classes.fab, label: classes.fabLabel }}
            color="secondary"
          >
            <NavigationIcon className={classes.extendedIcon} />
            <span className={classes.buttonTextStyle}>Properties</span>
          </Fab>
          <Fab
            variant="extended"
            aria-label="Delete"
            classes={{ root: classes.fab, label: classes.fabLabel }}
            color="secondary"
          >
            <NavigationIcon className={classes.extendedIcon} />
            <span className={classes.buttonTextStyle}>Groups</span>
          </Fab>
          <SearchBarWithSearch />
          <section className={classes.togglePropGroupSelect}>
            <PropGroupSelect />
          </section>
          <NavigationIcon className={classes.loadingIcon} />
          <span className={classes.loaderStyle}>
            <em> Processing...</em>
          </span>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(Container3);
