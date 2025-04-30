import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies", 
    initialState: {
        MostPopularMovies: null,
    },
    reducers: {
        addMostPopularMovies: (state, action) => {
            state.MostPopularMovies = action.payload;
        }
    }
});

export const {addMostPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;