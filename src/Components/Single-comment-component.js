import React, { useEffect, useState } from "react";
import {deleteComments} from "../Redux/Action"
import { useDispatch } from "react-redux";

const SingleCommentComponent = (props) => {
  const { title,id } = props;
  const dispatch=useDispatch()
  const [comment, setComment] = useState("");
  useEffect(() => {
    if (title) {
      setComment(title);
    }
  }, [title]);
  const deleteItem=()=>{
    dispatch(deleteComments(id))
  }
  return (
    <div className="comments-item">
      <div onClick={deleteItem} className="comments-item-delete">X</div>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
      />
      <input type="submit" hidden />
    </div>
  );
};

export default SingleCommentComponent;
