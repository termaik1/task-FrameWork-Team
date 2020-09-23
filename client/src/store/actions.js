import types from "./constants";

const actions = {
  get: () => ({
    type: types.GET,
  }),
  getSuccess: (data) => ({
    type: types.GET_SUCCESS,
    payload: data,
  }),
  getFailure: () => ({
    type: types.GET_FAILURE,
  }),

  create: (data) => ({
    type: types.CREATE,
    payload: data,
  }),
  createSuccess: (data) => ({
    type: types.CREATE_SUCCESS,
    payload: data,
  }),
  createFailure: () => ({
    type: types.CREATE_FAILURE,
  }),

  edit: (data) => ({
    type: types.EDIT,
    payload: data,
  }),
  editSuccess: (data) => ({
    type: types.EDIT_SUCCESS,
    payload: data,
  }),
  editFailure: () => ({
    type: types.EDIT_FAILURE,
  }),

  delete: (data) => ({
    type: types.DELETE,
    payload: data,
  }),
  deleteSuccess: (data) => ({
    type: types.DELETE_SUCCESS,
    payload: data,
  }),
  deleteFailure: () => ({
    type: types.DELETE_FAILURE,
  }),
};

export default actions;
