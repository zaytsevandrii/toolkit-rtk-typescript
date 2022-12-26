import { IUser } from "../../models/IUser"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState{
    users:IUser[];
    isLoading:boolean;
    error:string;
    count:number
}

const initialState:UserState ={
    users:[],
    isLoading:false,
    error:'',
    count:0
}

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        increment:(state,action:PayloadAction<number>)=>{
            state.count+=action.payload
        }
    }
})

export default userSlice.reducer