import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/action";
import UserDetails from "../component/UserDetails/UserDetails";
import NameList from "../component/NameList/NameList";

class MainContainer extends React.Component {
  state = {
    innerWidth: 0
  };
  componentDidMount() {
    this.setState({ innerWidth: window.innerWidth });
    window.addEventListener("resize", this.handleResize);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.selectedUser !== this.props.selectedUser) {
      this.render();
    }
  }

  handleResize = () => {
    this.setState({ innerWidth: window.innerWidth });
  };
  render() {
    let selectedUserDetails = null;
    if (this.props.users.length)
      this.props.users.map(user => {
        if (user.login.uuid === this.props.selectedUser) {
          selectedUserDetails = user;
        }
      });
    return (
      <div className="main-container">
        <NameList
          onGetUserDetails={this.props.onGetUserDetails}
          users={this.props.users}
          selectedUser={this.props.selectedUser}
          onSelectUser={this.props.onSelectUser}
        />
        <UserDetails user={selectedUserDetails} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.results,
    selectedUser: state.users.selectedUserUUID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUserDetails: payload =>
      dispatch(actions.getUserDetailsRequest(payload)),
    onSelectUser: payload => dispatch(actions.selectUser(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
