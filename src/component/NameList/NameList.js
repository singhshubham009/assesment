import React from "react";
import NameCard from "./NameCard/NameCard";

import "./NameList.css";

class NameList extends React.Component {
  state = {
    scrollPosition: 0
  };
  componentDidMount() {
    this.props.onGetUserDetails({ pageNo: this.props.pageNo });
  }
  componentDidUpdate() {}
  handleScroll = () => {
    if (
      parseInt(this.nameListDiv.clientHeight) +
        parseInt(this.nameListDiv.scrollTop) ===
      parseInt(this.nameListDiv.scrollHeight)
    ) {
      this.props.onGetUserDetails({ pageNo: this.props.pageNo });
    }
  };
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
          selectedUser={this.props.selectedUser}
          onSelectUser={this.props.onSelectUser}
        />
      );
    });
    return (
      <div
        className="name-list-container"
        ref={elem => (this.nameListDiv = elem)}
        onScroll={() => this.handleScroll()}
      >
        {nameCards}
      </div>
    );
  }
}

export default NameList;
