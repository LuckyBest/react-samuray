import React from "react";
import classes from "./ProfileInfo.module.css";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={classes.profileInfoWrapper}>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.W8apTKARTqVhmLzMCisNmAHaEs?w=284&h=181&c=7&o=5&dpr=1.25&pid=1.7"
          alt="bgc"
          className={s.bgc}
        />
      </div>
      <div className={s.profileItems}>
        <img
          src="https://www.nme.com/wp-content/uploads/2020/10/Boris_Spitting_Image.jpg"
          alt="avatar"
          className={s.avatar}
        />
        <div className={s.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
