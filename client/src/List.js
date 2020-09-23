import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";

import _ from "lodash";

import todoActions from "./store/actions";

import Item from "./Item";

const List = (props) => {
  const dispatch = useDispatch();

  const { origin } = props;

  const onDelete = useCallback((_id) => dispatch(todoActions.delete(_id)), []);

  const onChange = useCallback(
    (_id, completed, name) =>
      dispatch(todoActions.edit({ _id, completed, name })),
    []
  );

  const renderItem = useMemo(
    () =>
      !!_.size(origin) &&
      _.map(origin, (item) => (
        <Item
          key={item._id}
          {...item}
          onChange={onChange}
          onDelete={onDelete}
        />
      )),
    [origin]
  );

  return renderItem;
};

export default List;
