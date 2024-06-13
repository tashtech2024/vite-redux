import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count:0
    },
    reducers: {
        
    }
});


// export main reducer 
export default counterSlice.reducer;