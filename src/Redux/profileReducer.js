const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 20 },
    { id: 2, message: "It's my first post.", likesCount: 15 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 10,
      };
      let stateCopy = { ...state, posts: [...state.posts, newPost] };
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export default profileReducer;
