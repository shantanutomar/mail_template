import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Attachment from "../Attachment/Attachment";
import AttachmentIcon from "../../Assets/Icons/AttachmentIcon.png";

const styles = theme => ({
  root: {
    width: "100%"
  },
  expansionPanelSummaryRoot: {
    backgroundColor: "lightgray",
    minHeight: "0px !important"
  },
  expansionPanelSummaryContent: {
    margin: "10px !important"
  },
  anchorOriginBottomCenter: {
    "&>div>div>div": {
      width: "95%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    "&>div>div": {
      width: "inherit",
      display: "flex",
      justifyContent: "center"
    }
  },
  attachmentExpansionText: {
    color: "#4a4a4a",
    fontWeight: "bold",
    marginLeft: 10
  },
  expansionPanelDetailsRoot: {
    display: "flex",
    padding: "8px 24px 24px",
    flexDirection: "column",
    width: "inherit"
  },
  imageStyle: {
    height: 25
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
            root: classes.expansionPanelSummaryRoot,
            content: classes.expansionPanelSummaryContent
          }}
        >
          <div>
            <img
              src={AttachmentIcon}
              alt="hello"
              className={classes.imageStyle}
            />
            <span className={classes.attachmentExpansionText}>ATTACHMENTS</span>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetailsRoot}>
          {/* Can be mapped to a list and dynamically created */}
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(DetailedExpansionPanel);
