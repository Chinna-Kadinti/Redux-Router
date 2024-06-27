import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, login, logout } from '../store';

function Home() {

    const [username, setUsername] = useState('');

    const dispatch = useDispatch();

    const loginUser = useSelector((state) => state.rtk.value.loginUser);
    const count = useSelector((state) => state.rtk.count)
    const handleChange = (e) => {
        // e.preventDefault();
        setUsername(e.target.value);
    }

  return (
    <div>
        <h4 style ={{color: 'green'}}>Redux is pattern and library for managing and updating
        application state using events called 'actions' <br/> </h4>
        <input onChange={handleChange}/>
        <button
         style={{background: 'blue', color: 'pink'}}
         onClick={() => dispatch(login({loginUser: username}))}
        >Login</button>
        <button 
        style={{background: 'blue', color: 'pink'}}
        onClick={() => dispatch(logout())}
        >Logout</button>

        <button onClick={() => dispatch(increment())}>Inc</button>
        <button onClick={() => dispatch(decrement())}>Dec</button>

        <div>
            <h2>UserName: {loginUser} </h2>
            <h2>Counter: {count} </h2>
        </div>
    </div>
  )
}

export default Home