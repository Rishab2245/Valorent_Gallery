import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import {
  Github_API_User,
  Github_UserName,
  options,
} from "../Common/constants";

// Profileclass is class component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
    // console.log("Profile-Parent constructor");
  }

  async componentDidMount() {
    try {
      const response = await fetch(Github_API_User + Github_UserName, options);

      const resData = await response.json();
      console.log(resData);

      this.setState({
        userInfo: resData
      });
    } catch (error) {
      console.error(error); // show error in console
    }

    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }
  render() {
    const { userInfo} = this.state; // object destructuring for state data
    // console.log("Profile-Parent - render");

    return (
      <>
        {userInfo? (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <ProfileUserClass userInfo={userInfo} />
              {/* Passing props data (full json data) from parent to child */}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;
