import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  ADD_POST,
  SET_CURRENT_PAGE,
  SET_CURRENT_VIEW
} from '../actions/postsActions';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  currentPage: 1,
  postsPerPage: 10,
  currentView: 'posts'
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_CURRENT_VIEW:
      return { ...state, currentView: action.payload };
    default:
      return state;
  }
};

export default postsReducer;