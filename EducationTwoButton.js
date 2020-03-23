import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class ToggleSwitch extends Component {
  state = {
    checked: this.props.defaultChecked
  };
  onChange = e => {
    this.setState({
      checked: e.target.checked
    });
    if (typeof this.props.onChange === "function") this.props.onChange();
  };
  render() {
    return (
          <input
          type="checkbox"
          name={this.props.Name}
          className="toggle-switch-checkbox"
          id={this.props.id}
          checked={this.props.currentValue}
          defaultChecked={this.props.defaultChecked}
          onChange={this.onChange}
          disabled={this.props.disabled}
        />
        {this.props.id ? (
          <label className="toggle-switch-label" htmlFor={this.props.id}>
            <span
              className={
                this.props.disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
              }
              data-factmode={this.props.Text[0]}
              data-quizmode={this.props.Text[1]}
            />
            <span
              className={
                this.props.disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
              }
            />
          </label>
        ) : null}
      </div>
    );
  }
  // Set text for rendering.
  static defaultProps = {
    Text: ["Fact Mode", "Quiz Mode"]
  };
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  Name: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  currentValue: PropTypes.bool,
  disabled: PropTypes.bool
};

export default ToggleSwitch;