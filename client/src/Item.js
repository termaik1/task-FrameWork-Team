import React from "react";

import PropTypes from "prop-types";

import {
  Checkbox,
  TextField,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

const Item = (props) => {
  const { onChange, onDelete, _id, completed, name } = props;

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={completed}
            name="checkedA"
            onChange={(e) => onChange(_id, e.target.checked, name)}
          />
        }
      />
      <FormControlLabel
        control={
          <TextField
            id="standard-form-text"
            defaultValue={name}
            onChange={(e) => onChange(_id, completed, e.target.value)}
          />
        }
      />
      <FormControlLabel
        control={<DeleteIcon onClick={() => onDelete(_id)} />}
      />
    </FormGroup>
  );
};

Item.propTypes = {
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  _id: PropTypes.number,
  completed: PropTypes.bool,
  name: PropTypes.string,
};

export default Item;
