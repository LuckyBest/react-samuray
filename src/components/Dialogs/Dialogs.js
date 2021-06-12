import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";

//Header items
import dialogBackArrow from "./Dialogsimg/arrow-left.svg";
import videoChatButton from "./Dialogsimg/camera-video.svg";
import infoButton from "./Dialogsimg/info-circle.svg";

//Input items
import cameraForInput from "./Dialogsimg/camera.svg";
import microForInput from "./Dialogsimg/mic.svg";
import pictureForInput from "./Dialogsimg/picture.svg";
import sendMessage from "./Dialogsimg/arrow-right-short.svg";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let addMessage = () => props.addMessage();

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem
      photo={dialog.photo}
      name={dialog.name}
      key={dialog.id}
      id={dialog.id}
    />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog_items}>{dialogsElements}</div>
      <div className={classes.message}>
        <div className={classes.messageContainer}>
          <div className={classes.headerContainer}>
            <div className={classes.messageHeader}>
              <div className={classes.headerArrow}>
                <img src={dialogBackArrow} alt="left-back-arrow" />
              </div>
              <div className={classes.headerUserItems}>
                <div className={classes.userPhoto}>
                  <img src={state.dialogs[0].photo} />
                </div>
                <div className={classes.headerUserName}>
                  {state.dialogs[0].name}
                </div>
              </div>
              <div className={classes.headerItems}>
                <div>
                  <img
                    src={videoChatButton}
                    className={classes.videoChatButton}
                    alt="video-chat icon"
                  />
                </div>
                <div>
                  <img
                    src={infoButton}
                    className={classes.infoButton}
                    alt="info button"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.Chat}>
            <div className={classes.chatContainer}>{messagesElements}</div>
          </div>
          <div className={classes.messageInputContainer}>
            <div className={classes.messagesInputText}>
              <div className={classes.cameraForInput}>
                <div>
                  <img src={cameraForInput} alt="camera-by-input" />
                </div>
              </div>
              <textarea
                onChange={onMessageChange}
                value={state.newMessageText}
                placeholder="Enter message..."
              />
              <div className={classes.inputItems}>
                <div>
                  <img src={microForInput} alt="micro" />
                </div>
                <div>
                  <img src={pictureForInput} alt="gallery" />
                </div>
                <div onClick={addMessage}>
                  <img src={sendMessage} alt="send message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
