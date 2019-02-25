import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
            classes={{ select: classes.selectStyle }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>1 Day</MenuItem>
            <MenuItem value={20}>2 Day</MenuItem>
            <MenuItem value={30}>3 Day</MenuItem>
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
            Age
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
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Before</MenuItem>
            <MenuItem value={20}>After</MenuItem>
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
            Age
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
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Check-In</MenuItem>
            <MenuItem value={20}>Check-Out</MenuItem>
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