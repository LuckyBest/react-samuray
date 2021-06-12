import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/usersPageReducer";
import UsersPage from "./UsersPage";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

let UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);

export default UsersPageContainer;
