import React from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Carousels from "./Carousels.jsx";
import Overview from "./Overview.jsx";
import Locations from "./Location.jsx";
import Reviews from "./Reviews.jsx";

const API_URL =
  process.env.REACT_APP_API_URL || "https://foodbook-api.herokuapp.com";

export default class DetailTab extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.food_id;
    this.state = {
      overviewTab: true,
      menuTab: false,
      locationTab: false,
      reviewTab: false,
      reviewContent: false,
      detailfood: [],
      allreview: []
    };
    this.match = this.props.match;
    // console.log(this.match);
    this.toggleOverview = this.toggleOverview.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
    this.toggleReview = this.toggleReview.bind(this);
    this.getData = this.getData.bind(this);
  }

  async getData() {
    await axios.get(`${API_URL}/foods/${this.id}`).then(res => {
      // console.log(res);
      let responseData = res.data.data;
      let data = {
        ...responseData,
        city: responseData.address.city,
        street: responseData.address.street
        // photos: responseData.photos[0]
        // photos: responseData.photos[0],
        // latitude: responseData.coordinate.latitude,
        // longitude: responseData.coordinate.longitude,
        // // comment: responseData.reviews[0].comment,
        // rating: responseData.reviews[0].rating,
        // _userid: responseData.reviews[0]._id
      };

      this.setState({ detailfood: data });
    });
  }

  async componentWillMount() {
    await this.getData();
    console.log(this.state.detailfood);
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
      <div id="detail-tab" className="detail-tab">
        <div className="carousels">
          <Carousels photos={this.state.detailfood.photos} />
        </div>
        <br />
        <div id="detail-tabs" className="detail-tabs">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <Link onClick={this.toggleOverview} to={`${this.match}/overview`}>
                {this.state.overviewTab === true ? (
                  <a className="nav-link active">Overview</a>
                ) : (
                  <a className="nav-link">Overview</a>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={this.toggleLocation} to={`${this.match}/location`}>
                {this.state.locationTab === true ? (
                  <a className="nav-link active">Location</a>
                ) : (
                  <a className="nav-link">Location</a>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={this.toggleReview} to={`${this.match}/reviews`}>
                {this.state.reviewTab === true ? (
                  <a className="nav-link active">Reviews</a>
                ) : (
                  <a className="nav-link">Reviews</a>
                )}
              </Link>
            </li>
          </ul>
          <Route
            exact
            path={`${this.match}/`}
            render={() => (
              <Overview
                id={this.id}
                name={this.state.detailfood.name}
                overview={this.state.detailfood.overview}
                price={this.state.detailfood.price}
              />
            )}
          />
          <Route
            path={`${this.match}/overview`}
            render={() => (
              <Overview
                id={this.id}
                name={this.state.detailfood.name}
                overview={this.state.detailfood.overview}
                price={this.state.detailfood.price}
              />
            )}
          />
          <Route
            path={`${this.match}/location`}
            render={() => (
              <Locations
                city={this.state.detailfood.city}
                street={this.state.detailfood.street}
                latitude={this.state.detailfood.latitude}
                longitude={this.state.detailfood.longitude}
              />
            )}
          />
          <Route
            path={`${this.match}/reviews`}
            component={() => (
              <Reviews
                userid={this.state.detailfood._userid}
                rating={this.state.detailfood.rating}
              />
            )}
          />
        </div>
      </div>
    );
  }
}
