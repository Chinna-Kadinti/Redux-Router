import React from 'react'
import { useSelector } from 'react-redux';

function Sample() {
    const loginUser = useSelector((state) => state.rtk.value.loginUser);
    const count = useSelector((state) => state.rtk.count)
  return (
    <div>
        <h4>See the same state here..</h4>
        <div>
            <h2>UserName:{loginUser} </h2>
            <h2>Counter: {count}</h2>
        </div>
    </div>
  )
}

export default Sample