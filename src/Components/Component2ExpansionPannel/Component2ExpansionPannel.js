import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import Radio from "@material-ui/core/Radio";
import Sms from "@material-ui/icons/Sms";
import Email from "@material-ui/icons/Email";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "inherit"
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32
  }
});

const Component2ExpansionPannel = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <section
        style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}
      >
        <section style={{ display: "flex" }}>
          <span
            style={{
              margin: "0px 5px 0px 0px",
              color: "#6f6f6f",
              letterSpacing: "0.35px"
            }}
          >
            1 Day
          </span>
          <span
            style={{
              margin: "0px 5px",
              color: "#6f6f6f",
              letterSpacing: "0.35px"
            }}
          >
            Before
          </span>
          <span
            style={{
              margin: "0px 5px",
              color: "#6f6f6f",
              letterSpacing: "0.35px"
            }}
          >
            Check-In
          </span>
        </section>
        <span
          style={{
            alignSelf: "flex-start",
            color: "#6f6f6f",
            fontWeight: "bold",
            letterSpacing: "0.3px"
          }}
        >
          My New Template
        </span>
        <span
          style={{
            textAlign: "left",
            color: "#6f6f6f",
            letterSpacing: "0.45px"
          }}
        >
          Subject: Here is your Booking Confirmation #
        </span>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "20px"
        }}
      >
        <section style={{ display: "flex", justifyContent: "flex-end" }}>
          <Email className={classes.icon} color="secondary" />
          <Sms className={classes.icon} color="secondary" />
        </section>
        <span style={{ color: "#6f6f6f", textAlign: "right" }}>
          Number of attachments: 5
        </span>
      </section>
    </div>
  );
};
export default withStyles(styles)(Component2ExpansionPannel);
