import { createSlice } from "@reduxjs/toolkit";


const initialState = 
    {
        loading : false,
        hasErrors : false,
        posts : [],
    }

const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        getPosts : (state )=>{
            state.loading = true;
        },

        getPostSuccess : (state, { payload}) => {
            state.loading = false;
            state.posts = payload;
        },
        getPostFailure : (state) =>{
            state.loading = false;
            state.hasErrors = true;
        }

    }

})

const {getPosts, getPostSuccess, getPostFailure} = postSlice.actions;

export const fetchPosts = () => {

    return async (dispatch) => {
        dispatch(getPosts());

        try {
            const response = await fetch("http://127.0.0.1:4000/posts");
            const posts = await response.json();
            dispatch(getPostSuccess(posts));
        }

        catch (err) {
            dispatch(getPostFailure());
        }
    }

}

export default postSlice.reducer;