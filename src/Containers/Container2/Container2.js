import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Component2ExpansionPannel from "../../Components/Component2ExpansionPannel/Component2ExpansionPannel";

const styles = theme => ({
  root: {
    width: "100%"
  },
  expansionPanelSummaryRoot: {
    backgroundColor: theme.palette.primary.main
  }
});

class Container2 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: classes.expansionPanelSummaryRoot
            }}
          />
          <ExpansionPanelDetails style={{ width: "100%", padding: "8px 0px" }}>
            <Component2ExpansionPannel />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(Container2);
