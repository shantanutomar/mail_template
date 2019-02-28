import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SmsIcon from "@material-ui/icons/Sms";

const styles = theme => ({
  formControl: {
    margin: 12,
    marginLeft: -40,
    minWidth: 95,
    height: 29
  },
  outlineInputStyle: {
    borderRadius: "25px",
    borderColor: `${theme.palette.secondary.main} !important`,
    height: 38,
    "& legend": {
      display: "none"
    }
  },
  selectRoot: {
    display: "none"
  },
  selectStyle: {
    padding: "6.5px 14px",
    fontSize: "14px",
    textAlign: "left",
    backgroundColor: `${theme.palette.secondary.main} !important`,
    width: "65px !important",
    height: "25px !important",
    borderRadius: "20px !important",
    border: `1px solid ${theme.palette.secondary.main}`,
    "& svg": {
      width: 15,
      height: 15
    },
    textOverflow: "inherit"
  },
  selectMenuStyle: {
    border: "1px solid grey",
    boxShadow: "none",
    borderRadius: "15px !important",
    top: "27.8924px !important",
    transformOrigin: "0px 5px !important",
    width: 95,
    "& ul": {
      padding: 0
    }
  },
  listItemStyle: {
    padding: 0,
    display: "flex",
    justifyContent: "center",
    width: 95,
    height: 40,
    borderRadius: 15,
    backgroundColor: `${theme.palette.secondary.main} !important`
  },
  extendedIcon: {
    marginRight: 5,
    color: "white",
    marginLeft: -5,
    width: 15,
    height: 15
  },
  noOutline: {
    "&:focus": {
      outline: "none !important"
    }
  },
  selectTextStyle: {
    color: "white",
    fontSize: 12,
    letterSpacing: 0.3,
    textTransform: "capitalize"
  },
  selectContentStyle: {
    display: "flex",
    alignItems: "center",
    marginTop: 4
  }
});

class SimpleSelect extends React.Component {
  state = {
    age: "",
    name: "hai"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                classes={{
                  notchedOutline: classes.outlineInputStyle,
                  input: classes.noOutline
                }}
                name="age"
                id="outlined-age-simple"
              />
            }
            MenuProps={{
              classes: {
                paper: classes.selectMenuStyle
              }
            }}
            classes={{
              select: classes.selectStyle,
              icon: classes.selectRoot
            }}
          >
            <MenuItem value={10} className={classes.listItemStyle}>
              <div className={classes.selectContentStyle}>
                <SmsIcon className={classes.extendedIcon} />
                <span className={classes.selectTextStyle}>Properties</span>
              </div>
            </MenuItem>
            <MenuItem value={20} className={classes.listItemStyle}>
              <div className={classes.selectContentStyle}>
                <SmsIcon className={classes.extendedIcon} />
                <span className={classes.selectTextStyle}>Groups</span>
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
