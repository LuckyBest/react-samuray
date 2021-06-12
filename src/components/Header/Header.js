import React from "react";
import NavBar from "../Nav/Nav";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://www.logolynx.com/images/logolynx/dc/dc8b0c6b762c4cd2fccdf7f5efc10d1d.jpeg"
        alt="img"
      />
      <div className={classes.friends}>
        <div className={classes.friendsContainer}>
          <h1>Friends: </h1>
        </div>
        <div className={classes.friendsAvatars}>
          <div className={classes.friendsItems}>
            <img
              src="https://th.bing.com/th/id/Rf6486d9a8a0abf2daf4c9c281b88d150?rik=hMxY%2bX2axJAGnA&riu=http%3a%2f%2favatars.design%2fwp-content%2fuploads%2f2016%2f09%2favatar1b.jpg&ehk=hlRNQAmwJuZYUj2eOVJUH5tAQGfM4UicGXxuG8wlyEc%3d&risl=&pid=ImgRaw"
              alt="Dimych"
            />
            <p>Dimych</p>
          </div>
          <div className={classes.friendsItems}>
            <img
              src="https://i.pinimg.com/originals/16/55/3e/16553e3c3210b033ff9b90e33260617d.jpg"
              alt="Andrew"
            />
            <p>Andrew</p>
          </div>
          <div className={classes.friendsItems}>
            <img
              src="https://th.bing.com/th/id/R2ad3e841900695d3f5710c70696ee49c?rik=AgL3d5piuPJPvw&riu=http%3a%2f%2favatars.design%2fwp-content%2fuploads%2f2016%2f09%2favatar1a.jpg&ehk=d6RDgkAFPhOrw2%2fjzlWz6DOp%2bxAxXzvjk38bd46jYdc%3d&risl=&pid=ImgRaw"
              alt="Sveta"
            />
            <p>Sveta</p>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};
export default Header;
