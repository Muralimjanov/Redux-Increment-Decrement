import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../Redux/Action'

const LikeComponent = () => {
  const dispatch=useDispatch()
  const {likes}=useSelector(state=>state.LikeReducer)
  return (
    <div className='button-controls'>
      <button onClick={()=>dispatch(increment())}>♥ {likes}</button>
      <button onClick={()=>dispatch(decrement())} >👎</button>
    </div>
  )
}

export default LikeComponent