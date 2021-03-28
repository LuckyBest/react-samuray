import React from "react";
import MyPosts from "./Posts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <img
        src="https://th.bing.com/th/id/OIP.W8apTKARTqVhmLzMCisNmAHaEs?w=284&h=181&c=7&o=5&dpr=1.25&pid=1.7"
        alt="bgc"
        className={classes.bgc}
      />
      <div>
        <img
          src="https://www.nme.com/wp-content/uploads/2020/10/Boris_Spitting_Image.jpg"
          alt="avatar"
          className={classes.avatar}
        />
      </div>
      <MyPosts />
    </div>
  );
};
export default Profile;
