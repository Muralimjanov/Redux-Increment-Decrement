import {
  INCREMENT,
  DECREMENT,
  ADD_COMMENTS,
  DELETE_COMMENTS,
  GET_POST_COMMENT,
  SHOW_LOADING,
  HIDE_LODING,
  CLEAR_ERROR,
  SHOW_ERROR
} from "./Types";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

//? Commments action
export const addComents = (title, id) => {
  return {
    type: ADD_COMMENTS,
    payload: { title, id },
  };
};

export const deleteComments = (id) => {
  return {
    type: DELETE_COMMENTS,
    payload: { id },
  };
};

export const getPostComment = (data) => {
  return {
    type: GET_POST_COMMENT,
    payload:{data}
  };
};

export const showLoading = () => {
  return {
    type: SHOW_LOADING
  }
}
export const hideLoading = ()=>{
  return {
    type: HIDE_LODING
  }
}
export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}
export const showError = (error)=>{
  return{
    type: SHOW_ERROR,
    error
  }
}