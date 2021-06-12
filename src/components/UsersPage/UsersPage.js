import React from "react";
import classes from "./UsersPage.module.css";

const UsersPage = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Dmitriy Hrytsak",
        photoUrl:
          "https://i.pinimg.com/originals/df/e3/28/dfe328a86b498942e62c2daf1986af22.jpg",
        status: "I'm alive...",
        followed: false,
        location: {
          city: "Minsk",
          country: "Belarus",
        },
      },
      {
        id: 2,
        fullName: "Sasha Abramova",
        photoUrl:
          "https://img-cdn.brainberries.co/wp-content/uploads/2018/02/virtual-avatar-taking-over-instagram-4.jpg",
        status: "I appreciate all that I get.)",
        followed: true,
        location: {
          city: "Kiev",
          country: "Ukraine",
        },
      },
      {
        id: 3,
        fullName: "Nick Wasovskiy",
        photoUrl:
          "https://th.bing.com/th/id/R6f6e79d518f406c720c30f9a05681f8b?rik=aOD%2f2sVcG0m4VA&pid=ImgRaw",
        status: "Nice to meet you...",
        followed: false,
        location: {
          city: "Moscow",
          country: "Russia",
        },
      },
      {
        id: 4,
        fullName: "Mike Robertson",
        photoUrl:
          "https://i.pinimg.com/originals/be/01/d8/be01d81f5e5278b439ca9c272151b1c6.jpg",
        status: "Everybody dance now...",
        followed: true,
        location: {
          city: "New-York",
          country: "USA",
        },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img width="60" src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
