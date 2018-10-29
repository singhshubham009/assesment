import React from "react";

import "./NameCard.css";

class NameCard extends React.Component {
  //   onClickUser = () => {
  //     this.props.onSelectUser(this.props.uuid);
  //   };
  render() {
    return (
      <div
        className={
          "namecard-container" +
          (this.props.selectedUser === this.props.uuid
            ? " namecard-container--selected"
            : "")
        }
        onClick={() => this.props.onSelectUser(this.props.uuid)}
      >
        <div className="namecard-container__user-thumb">
          <img alt="user-thumb" src={this.props.thumbnail} />
        </div>
        <div className="namecard-container__user-details">
          <strong>{this.props.name}</strong>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default NameCard;
