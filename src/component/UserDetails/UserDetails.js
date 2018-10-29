import React from "react";

import "./UserDetails.css";

class UserDetails extends React.Component {
  render() {
    let userDetails = <h1>Select an User!</h1>;
    if (this.props.user && this.props.user.name.first)
      userDetails = (
        <React.Fragment>
          <div className="user-details-container__user-image">
            <img
              alt="user-pic"
              src={
                this.props.innerWidth > 992
                  ? this.props.user.picture.large
                  : this.props.user.picture.medium
              }
            />
          </div>
          <div className="user-details-container__user-name">
            <strong>{`${this.props.user.name.title.charAt(0).toUpperCase() +
              this.props.user.name.title.slice(
                1
              )} ${this.props.user.name.first.charAt(0).toUpperCase() +
              this.props.user.name.first.slice(
                1
              )} ${this.props.user.name.last.charAt(0).toUpperCase() +
              this.props.user.name.last.slice(1)}`}</strong>{" "}
            <span>
              {this.props.user.gender === "male" ? (
                <i className="fas fa-mars" />
              ) : (
                <i className="fas fa-venus" />
              )}
            </span>
          </div>
          <div className="user-details-container__user-contact">
            <span>{`${this.props.user.email}  |  ${
              this.props.user.phone
                ? this.props.user.phone
                : this.props.user.cell
            }`}</span>
          </div>
          <div className="user-details-container__user-address">
            <label>Address:</label>
            <p>{`${this.props.user.location.street}, ${
              this.props.user.location.city
            } - ${this.props.user.location.postcode}`}</p>
            <strong>
              {this.props.user.location.state.charAt(0).toUpperCase() +
                this.props.user.location.state.slice(1)}
            </strong>
          </div>
        </React.Fragment>
      );
    return <div className="user-details-container">{userDetails}</div>;
  }
}

export default UserDetails;
