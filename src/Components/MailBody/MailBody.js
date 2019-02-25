import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  bodyStyleRoot: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  horizontalLine: {
    height: "2px",
    color: "grey",
    width: "inherit"
  },
  textStyle: {
    color: "#6f6f6f",
    fontSize: "16px",
    letterSpacing: "0.3px",
    textAlign: "left"
  },
  textStyleBold: {
    color: "#6f6f6f",
    fontSize: "16px",
    letterSpacing: "0.3px",
    textAlign: "left",
    fontWeight: "bold"
  },
  bodyStyleRoot1: {
    width: "90%",
    display: "flex",
    height: "350px",
    flexDirection: "column",
    alignItems: "flex-start",
    // overflow: "scroll"
    overflowY: "auto",
    overflowX: "hidden"
  }
};

const MailBody = props => {
  const { classes } = props;
  return (
    <>
      <section className={classes.bodyStyleRoot}>
        <span className={classes.textStyleBold}>
          Subject : Thank You for Booking with us
        </span>
      </section>
      <hr className={classes.horizontalLine} />
      <div className={classes.bodyStyleRoot1}>
        <div className={classes.bodyStyleRoot}>
          <p className={classes.textStyle}>
            Hi Robert, <br />
            <br />
            Thank you for choosing to stay with us! Below are some basic details
            that may come in handy for your upcoming stay:
          </p>
          <span className={classes.textStyleBold}>RESERVATION DETAILS:</span>
          <br />
          <span style={{ textAlign: "left" }}>
            <span className={classes.textStyleBold}>CHECK-IN: </span>{" "}
            <span className={classes.textStyle}>8/2/2019 .</span>{" "}
            <span className={classes.textStyleBold}>3:00 PM</span> {""}
            <span className={classes.textStyle}>
              You may arrive then, or later.
            </span>
          </span>
          <span style={{ textAlign: "left" }}>
            <span className={classes.textStyleBold}>CHECK-OUT: </span>{" "}
            <span className={classes.textStyle}>8/2/2019 .</span>{" "}
            <span className={classes.textStyleBold}>3:00 PM</span> {""}
            <span className={classes.textStyle}>
              You may arrive then, or later.
            </span>
          </span>
          <br />
          <span className={classes.textStyleBold}>KEY(s):</span>
          <span className={classes.textStyle}>
            I offer 24/7 Check-In and use a smartlock powered by VirtualKEY.
            Follow the instructions in the email from VirtualKEY. Claim your
            digital key and download the VirtualKEY app.
          </span>{" "}
          <br />
          <span className={classes.textStyleBold}>SUPPLIES:</span>
          <span className={classes.textStyle}>
            We provide the following supplies to ensure you have a comfortable
            stay a) For the Kitchen: a roll of paper towels, a set of napkins, a
            sponge, tablets for running the dish washer and liner for the trash.
            I usually stock the cabinets with basics like sugar and spices. Feel
            free to use what you find in the kitchen cabinets. The kitchen
            appliances are also available for your use. b) For the Bathroom:
            toilet paper, hand soap, soap for the shower, and clean towels c)
            For the Bedroom: clean linens d) For the Closet: a spare set of
            clean towels and clean linens{" "}
          </span>{" "}
          <br />
          <span className={classes.textStyleBold}>ANY QUESTIONS?</span>
          <span className={classes.textStyle}>
            If you have questions, please send a message to me through
            info@gmail.com and I will respond to you as soon as possible.
            Otherwise, I will send you detailed arrival instructions a week
            before check-in. <br />
            <br />I look forward to host your stay!
            <br />
            <br />
            Cheers!
          </span>{" "}
        </div>
        {/* <hr className={classes.horizontalLine} /> */}
      </div>
    </>
  );
};
export default withStyles(styles)(MailBody);
