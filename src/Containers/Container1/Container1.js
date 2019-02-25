import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Select from "../Select/Select";
import Email from "@material-ui/icons/Email";
import Sms from "@material-ui/icons/Sms";
import PermIdentity from "@material-ui/icons/PermIdentity";
import SearchBar from "../SearchBar/SearchBar";
import MailBody from "../../Components/MailBody/MailBody";
import Button from "@material-ui/core/Button";
import Attachments from "../../Components/Attachments/Attachments";

const styles = theme => ({
  container1Root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
    width: "100vw",
    color: theme.palette.primary.main
  },
  headerRootStyle: {
    display: "flex",
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
  },
  horizontalLine: {
    height: "2px",
    color: "grey",
    width: "inherit"
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32
  },
  searchContainer: {
    width: "90%",
    display: "flex",
    margin: "16px"
  },
  button: {
    margin: "8px 0",
    border: "1px solid grey",
    padding: "0px 27px",
    borderRadius: "40px"
  },
  input: {
    display: "none"
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
    fontWeight: "bold",
    display: "block"
  },
  uploadButtonStyle: {
    display: "flex",
    width: "90%"
  }
});

class Container1 extends React.Component {
  state = {
    days: 0,
    relativeDay: "",
    timeOption: "",
    searchValue: ""
  };
  handleSearchChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };
  handleSearchClose = () => {
    this.setState({
      searchValue: ""
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container1Root}>
        <header id="header" className={classes.headerRootStyle}>
          <section>
            <span className={classes.textStyleBold}>Send Time</span>
            <span className={classes.textStyle}> Select your send time</span>
          </section>
          <section>
            <Email className={classes.icon} color="secondary" />
            <Sms className={classes.icon} color="secondary" />
            <PermIdentity className={classes.icon} color="secondary" />
          </section>
        </header>
        <section id="selectBox" className={classes.selectBoxStyle}>
          <Select />
          <span className={classes.textStyle}>
            {" "}
            VirtualKey will send a seperate email with a digital key that also
            includes reservation information.
          </span>
        </section>
        <hr className={classes.horizontalLine} />
        <section className={classes.searchContainer}>
          <SearchBar
            searchValue={this.state.searchValue}
            handleSearchChange={this.handleSearchChange}
            handleSearchClose={this.handleSearchClose}
          />
        </section>
        <hr className={classes.horizontalLine} />
        <MailBody />
        <hr className={classes.horizontalLine} />
        <section className={classes.selectBoxStyle}>
          <span className={classes.textStyleBold}>Add attachment</span>
          <span className={classes.textStyle}>
            {" "}
            Upload files(max 5) with maximum 9mb total size
          </span>
        </section>
        <section className={classes.uploadButtonStyle}>
          <input
            accept="*"
            className={classes.input}
            id="outlined-button-file"
            multiple
            type="file"
          />
          <label htmlFor="outlined-button-file">
            <Button
              variant="outlined"
              component="span"
              className={classes.button}
            >
              Choose
            </Button>
          </label>
        </section>
        <Attachments />
        {/* <section>Attachment Panel</section> */}
      </div>
    );
  }
}
export default withStyles(styles)(Container1);