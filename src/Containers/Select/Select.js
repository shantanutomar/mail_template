import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import { grey } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: "0",
    minWidth: 80
  },
  formControlStyle: {
    margin: theme.spacing.unit,
    marginLeft: "0",
    minWidth: 140
  },
  outlineInputStyle: {
    borderRadius: "25px"
  },
  labelStyle: {
    fontSize: "13px",
    top: "-10px",
    left: "-8px"
  },
  shrinkStyle: {
    transform: "translate(21px, 7px) scale(0.75) !important"
  },
  selectStyle: {
    padding: "6.5px 14px",
    fontSize: "14px",
    textAlign: "left"
  },
  selectMenuStyle: {
    border: "1px solid grey",
    boxShadow: "none",
    borderRadius: "19px",
    top: "82.8924px !important",
    transformOrigin: "0px 5px !important"
  },
  listItemStyle: {
    padding: 0,
    justifyContent: "center"
  }
});

class SimpleSelect extends React.Component {
  state = {
    age: "",
    name: "hai",
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            classes={{
              outlined: classes.labelStyle,
              shrink: classes.shrinkStyle
            }}
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Day
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                classes={{ notchedOutline: classes.outlineInputStyle }}
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
            // todo
            MenuProps={{
              classes: {
                paper: classes.selectMenuStyle
              }
            }}
            classes={{
              select: classes.selectStyle
            }}
          >
            <MenuItem value={10} className={classes.listItemStyle}>
              Instantly
            </MenuItem>
            <MenuItem value={20} className={classes.listItemStyle}>
              1 Day
            </MenuItem>
            <MenuItem value={30} className={classes.listItemStyle}>
              2 Day
            </MenuItem>
            <MenuItem value={40} className={classes.listItemStyle}>
              3 Day
            </MenuItem>
            <MenuItem value={50} className={classes.listItemStyle}>
              4 Day
            </MenuItem>
            <MenuItem value={60} className={classes.listItemStyle}>
              5 Day
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            classes={{
              outlined: classes.labelStyle,
              shrink: classes.shrinkStyle
            }}
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Period
          </InputLabel>
          <Select
            classes={{ select: classes.selectStyle }}
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                classes={{ notchedOutline: classes.outlineInputStyle }}
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
            MenuProps={{
              classes: {
                paper: classes.selectMenuStyle
              }
            }}
          >
            <MenuItem value={10} className={classes.listItemStyle}>
              On
            </MenuItem>
            <MenuItem value={20} className={classes.listItemStyle}>
              Before
            </MenuItem>
            <MenuItem value={30} className={classes.listItemStyle}>
              After
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          classes={{ root: classes.formControlStyle }}
        >
          <InputLabel
            classes={{
              outlined: classes.labelStyle,
              shrink: classes.shrinkStyle
            }}
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Time
          </InputLabel>
          <Select
            classes={{ select: classes.selectStyle }}
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                classes={{ notchedOutline: classes.outlineInputStyle }}
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
            MenuProps={{
              classes: {
                paper: classes.selectMenuStyle
              }
            }}
          >
            <MenuItem value={10} className={classes.listItemStyle}>
              Booking Receipt
            </MenuItem>
            <MenuItem value={20} className={classes.listItemStyle}>
              Check-In
            </MenuItem>
            <MenuItem value={30} className={classes.listItemStyle}>
              Check-Out
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
