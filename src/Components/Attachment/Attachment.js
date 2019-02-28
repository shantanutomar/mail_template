import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const styles = theme => ({
  root: {
    width: "inherit"
  },
  listItemRoot: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  },
  padding0: {
    padding: "0 !important"
  },
  gridItem: {
    maxWidth: "inherit"
  },
  attachmentStyle: {
    fontSize: "16px",
    color: "#5d5d5d",
    letterSpacing: "0.4px"
  },
  iconContainerStyle: {
    display: "flex",
    width: "200px",
    justifyContent: "space-between"
  },
  iconTextStyle: {
    fontSize: "16px",
    color: "#5d5d5d",
    letterSpacing: "0.4px",
    marginLeft: "5px"
  },
  "@media (min-width: 320px) and (max-width: 480px)": {
    listItemRoot: {
      flexWrap: "nowrap"
    },
    iconTextStyle: {
      marginLeft: "2px",
      fontSize: "12px",
      letterSpacing: "0.3px"
    },
    iconContainerStyle: {
      width: 145
    },
    attachmentStyle: {
      fontSize: "12px",
      letterSpacing: "0.3px"
    }
  }
  // "@media (min-width: 480px)": {
  //   togglePropGroupSelect: {
  //     display: "none"
  //   }
  // }
});

const Attachment = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6} className={classes.gridItem}>
        <div className={classes.demo}>
          <List dense={true}>
            <ListItem className={classes.listItemRoot}>
              <section style={{ margin: "5px 0" }}>
                <span
                  className={classes.attachmentStyle}
                >{`Attachment <No>`}</span>
              </section>
              <div className={classes.iconContainerStyle}>
                <section>
                  <IconButton aria-label="View" className={classes.padding0}>
                    <SearchIcon />
                  </IconButton>
                  <span className={classes.iconTextStyle}>View</span>
                </section>
                <section>
                  <IconButton
                    aria-label="Download"
                    className={classes.padding0}
                  >
                    <CloudDownloadIcon />
                  </IconButton>
                  <span className={classes.iconTextStyle}>Download</span>
                </section>
              </div>
            </ListItem>
          </List>
        </div>
      </Grid>
    </div>
  );
};
export default withStyles(styles)(Attachment);
