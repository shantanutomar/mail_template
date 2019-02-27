import React from "react";
import SearchBarWithSearch from "../../Components/SearchBarWithSearch/SearchBarWithSearch";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    textTransform: "capitalize",
    boxShadow: "none",
    padding: "0 10px",
    height: 45,
    width: 110
  },
  fabLabel: {
    "&>svg": { marginRight: 0 }
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
    color: "white"
  }
});

class Container3 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: "flex", padding: 10, margin: "20px 0" }}>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left"
          }}
        >
          <span style={{ fontSize: 16, color: "#6f6f6f", fontWeight: "bold" }}>
            Properties
          </span>
          <span style={{ fontSize: 16, color: "lightgrey" }}>
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
            <span style={{ color: "white" }}>Properties</span>
          </Fab>
          <Fab
            variant="extended"
            aria-label="Delete"
            classes={{ root: classes.fab, label: classes.fabLabel }}
            color="secondary"
          >
            <NavigationIcon className={classes.extendedIcon} />
            <span style={{ color: "white" }}>Groups</span>
          </Fab>
          <SearchBarWithSearch />
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(Container3);
