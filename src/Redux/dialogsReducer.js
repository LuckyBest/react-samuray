const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Dimych",
      photo:
        "https://th.bing.com/th/id/Rf6486d9a8a0abf2daf4c9c281b88d150?rik=hMxY%2bX2axJAGnA&riu=http%3a%2f%2favatars.design%2fwp-content%2fuploads%2f2016%2f09%2favatar1b.jpg&ehk=hlRNQAmwJuZYUj2eOVJUH5tAQGfM4UicGXxuG8wlyEc%3d&risl=&pid=ImgRaw",
    },
    {
      id: 2,
      name: "Andrew",
      photo:
        "https://i.pinimg.com/originals/16/55/3e/16553e3c3210b033ff9b90e33260617d.jpg",
    },
    {
      id: 3,
      name: "Valera",
      photo:
        "https://th.bing.com/th/id/OIP.2bkyz3h6VNemexz9ivukdAHaIS?pid=ImgDet&w=713&h=798&rs=1",
    },
    {
      id: 4,
      name: "Sasha",
      photo:
        "https://i.pinimg.com/originals/ff/37/10/ff3710e9deb5a374ac46ec6d441e9f41.jpg",
    },
    {
      id: 5,
      name: "Viktor",
      photo:
        "https://th.bing.com/th/id/OIP.8pD3E_O7VWLcS-mSUG5iYQHaHa?pid=ImgDet&rs=1",
    },
    {
      id: 6,
      name: "Sveta",
      photo:
        "https://th.bing.com/th/id/R2ad3e841900695d3f5710c70696ee49c?rik=AgL3d5piuPJPvw&riu=http%3a%2f%2favatars.design%2fwp-content%2fuploads%2f2016%2f09%2favatar1a.jpg&ehk=d6RDgkAFPhOrw2%2fjzlWz6DOp%2bxAxXzvjk38bd46jYdc%3d&risl=&pid=ImgRaw",
    },
  ],
  messages: [
    { id: 1, message: "Hi," },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I'm pretty well)" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      let stateCopy = { ...state, messages: [...state.messages, newMessage] };
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};
export default dialogsReducer;
