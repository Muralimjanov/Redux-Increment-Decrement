import React, { useState, useEffect, useCallback } from "react";
import SingleCommentComponent from "./Single-comment-component";
import uniqid from "uniqid";
import { addComents, getPostComment } from "../Redux/Action";
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from "../Services/Services";
import { showError, hideLoading, showLoading, clearError } from "../Redux/Action";
import Loading from "./Loading";

const CommentsComponent = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector(state => state.CommentsReducer);

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uniqid();
    dispatch(addComents(input, id))
    setInput('')
  }
  const loadPost = useCallback(async () => {
    dispatch(showLoading())
    dispatch(clearError())
    try {
      const data = await getPost()
      console.log("data>>>", data)
      dispatch(getPostComment(data.data))
    } catch (error) {
      console.log(error)
      dispatch(showError("error loading post"))
    } finally {
      dispatch(hideLoading())
    }
  }, [])
  useEffect(() => {
    loadPost()
  }, [])
  if (loading) {
    return <Loading />
  }
  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={loadPost}>повторить</button>
      </div>
    )
  }

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <input type="submit" hidden />
      </form>
      {
        comments.map((elem) => {
          return <SingleCommentComponent key={elem.id} {...elem} />
        })
      }
    </div>
  );
};

export default CommentsComponent;
