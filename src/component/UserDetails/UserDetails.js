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
          <div className="user-details-outer-container">
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
            <div className="user-details-container__user">
              <div className="user-details-container__user-name">
                <span>
                  <strong>{`${this.props.user.name.title} ${
                    this.props.user.name.first
                  } ${this.props.user.name.last}`}</strong>
                </span>{" "}
                <span>
                  {this.props.user.gender === "male" ? (
                    <i className="fas fa-male" />
                  ) : (
                    <i className="fas fa-female" />
                  )}
                </span>
              </div>
              <br />
              <div className="user-details-container__user-contact">
                <span>
                  <strong>Email:</strong>
                  {`  ${this.props.user.email} `}
                  <br />
                  <strong>Phone No:</strong>
                  {`  ${
                    this.props.user.phone
                      ? this.props.user.phone
                      : this.props.user.cell
                  }`}
                </span>
              </div>
              <div className="user-details-container__user-address">
                <span>
                  <strong>Address:</strong>

                  {`  ${this.props.user.location.street}, ${
                    this.props.user.location.city
                  } - ${this.props.user.location.postcode}, ${
                    this.props.user.location.state
                  }`}
                </span>
                <strong />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    return <div className="user-details-container">{userDetails}</div>;
  }
}

export default UserDetails;
