import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

function App() {
 /*  const {count} = useAppSelector(state=>state.userReducer)
  const dispatch=useAppDispatch()
  const {users,isLoading,error} = useAppSelector(state=>state.userReducer)
console.log(users)
  useEffect(()=>{
    dispatch(fetchUsers())
  },[]) */
  return (
    <div className="App">
     {/*  {isLoading&&<h1>Loading...</h1>}
      {error&&<h1>{error}</h1>}
     {JSON.stringify(users,null,2)} */}
    </div>
  );
}

export default App;
