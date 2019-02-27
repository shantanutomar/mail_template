import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px"
  },
  flexDaysText: {
    display: "flex"
  },
  daysTextStyle: {
    margin: "0px 5px 0px 0px",
    color: "#6f6f6f",
    letterSpacing: "0.35px"
  },
  newTemplateTextStyle: {
    alignSelf: "flex-start",
    color: "#6f6f6f",
    fontWeight: "bold",
    letterSpacing: "0.3px"
  },
  subjectTextStyle: {
    textAlign: "left",
    color: "#6f6f6f",
    letterSpacing: "0.45px"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  attachmentTextStyle: {
    color: "#6f6f6f",
    textAlign: "right"
  }
});

const Component2ExpansionPannel = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <section className={classes.flexContainer}>
        <section className={classes.flexDaysText}>
          <span className={classes.daysTextStyle}>1 Day</span>
          <span className={classes.daysTextStyle}>Before</span>
          <span className={classes.daysTextStyle}>Check-In</span>
        </section>
        <span className={classes.newTemplateTextStyle}>My New Template</span>
        <span className={classes.subjectTextStyle}>
          Subject: Here is your Booking Confirmation #
        </span>
      </section>
      <section className={classes.flexContainer}>
        <section className={classes.iconContainer}>
          <Email className={classes.icon} color="secondary" />
          <Sms className={classes.icon} color="secondary" />
        </section>
        <span className={classes.attachmentTextStyle}>
          Number of attachments: 5
        </span>
      </section>
    </div>
  );
};
export default withStyles(styles)(Component2ExpansionPannel);
