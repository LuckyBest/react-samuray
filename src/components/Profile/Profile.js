import React from "react";
import MyPostsContainer from "./Posts/MyPostsContainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.profileWrapper}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};
export default Profile;
