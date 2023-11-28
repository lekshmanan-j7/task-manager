import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   tasks:[]
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAdded: {
            reducer(state, action) {
               state.tasks.push(action.payload)
            },
            prepare(title, description) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        
                       }
                }
            }
        },
        deletetask(state,action){
          const  findtaskindex = state.tasks.findIndex((task) => task.id === action.payload)
          state.tasks.splice(findtaskindex, 1);
          }
            
        }
        
    }
)
export const { taskAdded,deletetask } = taskSlice.actions
export default taskSlice.reducer