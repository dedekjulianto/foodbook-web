import React from "react";

export default class DetailTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewTab: true,
      menuTab: false,
      locationTab: false,
      reviewTab: false,
      reviewContent: false
    };
    this.toggleOverview = this.toggleOverview.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
    this.toggleReview = this.toggleReview.bind(this);
  }

  toggleOverview() {
    this.setState(() => {
      return {
        overviewTab: true,
        menuTab: false,
        locationTab: false,
        reviewTab: false
      };
    });
  }

  toggleMenu() {
    this.setState(() => {
      return {
        menuTab: true,
        overviewTab: false,
        locationTab: false,
        reviewTab: false
      };
    });
  }

  toggleLocation() {
    this.setState(() => {
      return {
        locationTab: true,
        menuTab: false,
        overviewTab: false,
        reviewTab: false
      };
    });
  }

  toggleReview() {
    this.setState(() => {
      return {
        reviewTab: true,
        reviewContent: true,
        menuTab: false,
        locationTab: false,
        overviewTab: false
      };
    });
  }

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <a onClick={this.toggleOverview}>
                {this.state.overviewTab === true ? (
                  <a className="nav-link active" href="#">
                    Overview
                  </a>
                ) : (
                  <a className="nav-link" href="#">
                    Overview
                  </a>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.toggleMenu}>
                {this.state.menuTab === true ? (
                  <a className="nav-link active" href="#">
                    Menu
                  </a>
                ) : (
                  <a className="nav-link" href="#">
                    Menu
                  </a>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.toggleLocation}>
                {this.state.locationTab === true ? (
                  <a className="nav-link active" href="#">
                    Location
                  </a>
                ) : (
                  <a className="nav-link" href="#">
                    Location
                  </a>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.toggleReview}>
                {this.state.reviewTab === true ? (
                  <a className="nav-link active" href="#">
                    Reviews
                  </a>
                ) : (
                  <a className="nav-link" href="#">
                    Reviews
                  </a>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}