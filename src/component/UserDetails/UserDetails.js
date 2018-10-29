import React from "react";

import "./UserDetails.css";

class UserDetails extends React.Component {
  // componentDidUpdate(prevProps) {
  //     if(prevProps.selectedUser !== this.props.selectedUser)

  // }
  render() {
    console.log(this.props.user);
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
            <span>{`${this.props.user.name.title} ${
              this.props.user.name.first
            } ${this.props.user.name.last}`}</span>{" "}
            <span>
              {this.props.user.gender === "male" ? (
                <i className="fas fa-mars" />
              ) : (
                <i className="fas fa-venus" />
              )}
            </span>
          </div>
          <div className="user-details-container__user-contact">
            <span>{`${this.props.user.email} | ${
              this.props.user.phone
                ? this.props.user.phone
                : this.props.user.cell
            }`}</span>
          </div>
          <div className="user-details-container__user-address">
            <label>Address</label>
            <p>{`${this.props.user.location.street}, ${
              this.props.user.location.city
            } - ${this.props.user.location.postcode}`}</p>
            <strong>{this.props.user.location.state}</strong>
          </div>
        </React.Fragment>
      );
    return <div className="user-details-container">{userDetails}</div>;
  }
}

export default UserDetails;
