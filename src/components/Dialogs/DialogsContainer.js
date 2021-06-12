import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
    addMessage: () => {
      let action = addMessageActionCreator();
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
