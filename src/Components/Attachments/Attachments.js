import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Attachment from "../Attachment/Attachment";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  column: {
    flexBasis: "33.33%"
  },
  wrapperInnerStyle: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  expansionPanelSummaryRoot: {
    backgroundColor: "#9b9b9b"
  },
  anchorOriginBottomCenter: {
    "&>div>div>div": {
      width: "95%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    "&>div>div": {
      width: "inherit",
      display: "flex",
      justifyContent: "center"
    }
  }
});

function DetailedExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel
        defaultExpanded
        classes={{ root: classes.anchorOriginBottomCenter }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{
            root: classes.expansionPanelSummaryRoot
          }}
        >
          <div>
            <span style={{ color: "#4a4a4a", fontWeight: "bold" }}>
              ATTACHMENTS
            </span>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails />
        <Attachment />
        <Attachment />
        <Attachment />
        <Attachment />
        <Attachment />
        <Attachment />
        <Attachment />
        <Attachment />
        <Attachment />
        <Attachment />
        <Attachment />
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedExpansionPanel);
