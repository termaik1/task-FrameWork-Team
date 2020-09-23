import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import todoActions from './store/actions';

import { TextField, Button } from '@material-ui/core/';

import List from './List';

const App = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const { origin } = useSelector((state) => state.Todo);
  useEffect(() => {
    dispatch(todoActions.get());
  }, []);

  const onCreate = useCallback(() => {
    dispatch(todoActions.create({ name }));
    setName("");
  }, [name]);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__container-panel">
          <TextField
            id="outlined-required"
            label="Task"
            value={name}
            variant="outlined"
            size="small"
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            id="button-material"
            size="large"
            variant="outlined"
            onClick={onCreate}
          >
            ADD
          </Button>
        </div>
        <div className="app__container-content">
          <List origin={origin} />
        </div>
      </div>
    </div>
  );
};

export default App;
