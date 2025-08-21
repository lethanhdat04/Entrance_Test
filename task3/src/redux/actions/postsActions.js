// Action Types
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const ADD_POST = 'ADD_POST';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';

// Action Creators
export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = (posts) => ({ type: FETCH_POSTS_SUCCESS, payload: posts });
export const fetchPostsError = (error) => ({ type: FETCH_POSTS_ERROR, payload: error });
export const addPost = (post) => ({ type: ADD_POST, payload: post });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
export const setCurrentView = (view) => ({ type: SET_CURRENT_VIEW, payload: view });

// Thunk Actions
export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsError(error.message));
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    });
    const newPost = await response.json();
    const postWithId = { ...newPost, id: Date.now() };
    dispatch(addPost(postWithId));
    return postWithId;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};