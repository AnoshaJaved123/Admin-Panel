import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createtask = createAsyncThunk(
    "task/createTask",
    async ({ values }) => {
      return fetch(`http://localhost:5002/api/TaskAuth/createtask`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: values.name,
            detail: values.detail,
                 
        }),
      }).then((res) => res.json());
    }
  );

  export const deletetask = createAsyncThunk('Rooms/getRoom',
  async({id})=>{
      return fetch(`http://localhost:5002/api/TaskAuth/deletetask/${id}`,
      {
          method:'DELETE',
      })
      .then(res => res.json())
  });
  
     const taskSlice = createSlice({
        name:'task',
        initialState:{
            loading:false,
            task:[],
            error:null

        },
        extraReducers:{
            [createtask.pending]:(state,action) =>{
                state.loading=true
            },
            [createtask.fulfilled]:(state,action) =>{
                state.loading=false;
                state.task=action.payload;
            },
            [createtask.rejected]:(state,action) =>{
                state.loading=false;
                state.error=action.payload
            },  
            [deletetask.pending]:(state,action) =>{
                state.loading=true
            },
            [deletetask.fulfilled]:(state,action) =>{
                state.loading=false;
                state.task=action.payload;
            },
            [deletetask.rejected]:(state,action) =>{
                state.loading=false;
                state.error=action.payload
            },
        }
     })

     export default taskSlice.reducer
