import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies", 
    initialState: {
        MostPopularMovies: null,
        TopBoxOfficeMovies: null,
        LowestRatedMovies: null,
    },
    reducers: {
        addMostPopularMovies: (state, action) => {
            state.MostPopularMovies = action.payload;
        },
        addTopBoxOfficeMovies: (state, action) =>{
            state.TopBoxOfficeMovies = action.payload;
        },
        addLowestRatedMovies: (state, action) =>{
            state.LowestRatedMovies = action.payload;
        }
    }
});

export const {addMostPopularMovies} = moviesSlice.actions;
export const {addTopBoxOfficeMovies} = moviesSlice.actions;
export const {addLowestRatedMovies} = moviesSlice.actions;

export default moviesSlice.reducer;