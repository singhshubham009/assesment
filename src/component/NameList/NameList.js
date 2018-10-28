import React from "react";
import NameCard from "./NameCard/NameCard";

class NameList extends React.Component {
  state = {
    scrollPosition: 0
  };
  componentDidMount() {
    this.props.onGetUserDetails({ pageNo: 1 });
  }
  componentDidUpdate() {}
  handleScroll = event => {};
  render() {
    let nameCards = [];
    this.props.users.map(user => {
      nameCards.push(
        <NameCard
          key={user.login.uuid}
          name={`${user.name.first} ${user.name.last}`}
          thumbnail={user.picture.thumbnail}
          email={user.email}
          uuid={user.login.uuid}
          selectedUser={user.selectedUserUUID}
          onSelectUser={this.props.onSelectUser}
        />
      );
    });
    return <div className="name-list-container">{nameCards}</div>;
  }
}

export default NameList;
