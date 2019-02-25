import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Attachment from "../Attachment/Attachment";

const styles = theme => ({
  root: {
    width: "100%"
  },
  expansionPanelSummaryRoot: {
    backgroundColor: "#9b9b9b"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  wrapperInnerStyle: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  expansionPanelDetailsRootStyle: {
    padding: 0
  }
});

function DetailedExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel
        defaultExpanded
        classes={{ wrapperInner: classes.wrapperInnerStyle }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{ expanded: classes.expansionPanelSummaryRoot }}
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>ATTACHMENTS</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          classes={{
            container: classes.details,
            // wrapperInner: classes.wrapperInnerStyle,
            root: classes.expansionPanelDetailsRootStyle
          }}
        />
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
