import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Select from "../Select/Select";

const styles = theme => ({
  container1Root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    color: theme.palette.primary.main
  },
  headerRootStyle: {
    display: "flex",
    // flexDirection: "c",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    padding: "10px"
  },
  alignContentLeft: {
    textAlign: "left"
  },
  selectBoxStyle: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    padding: "10px"
    // flexWrap: "wrap"
  },
  horizontalLine: {
    height: "2px",
    color: "grey",
    width: "inherit"
  }
});

class Container1 extends React.Component {
  state = {
    days: 0,
    relativeDay: "",
    timeOption: ""
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container1Root}>
        <header id="header" className={classes.headerRootStyle}>
          <section>
            <Typography
              component="subtitle1"
              variant="subtitle1"
              className={classes.alignContentLeft}
            >
              Send Time
            </Typography>
            <Typography
              component="body1"
              variant="body1"
              className={classes.alignContentLeft}
            >
              Select your send time
            </Typography>
          </section>
          <section>
            <span>Icon1</span>
            <span>Icon2</span>
            <span>Icon3</span>
          </section>
        </header>
        <section id="selectBox" className={classes.selectBoxStyle}>
          <Select />
          <Typography
            component="body1"
            variant="body1"
            className={classes.alignContentLeft}
          >
            VirtualKey will send a seperate email with a digital key that also
            includes reservation information.
          </Typography>
        </section>
        <hr className={classes.horizontalLine} />
      </div>
    );
  }
}
export default withStyles(styles)(Container1);
