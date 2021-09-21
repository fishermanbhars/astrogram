import React, { Component } from 'react';
import Header from "./astroHeader"
import Posts from "./astroPosts"

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apods: [],
      count: 5
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.infiniteScroll);
    this.fetchData(this.state.count);

  }

  infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {

      let newCount = this.state.count;

      this.setState({
        count: newCount
      });

      this.fetchData(newCount);
    }
  }

  fetchData = (count) => {

    let apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=t7HjeHDP3h5gzmO8yxLiGhgFy8LNeKGl3fBhWDKc&count='+count;

    fetch(apodUrl)
      .then(res=>res.json())
      .then(data => {
        this.setState({
          apods: [...this.state.apods,...data]
        })
      })
  }

  render () {
    return (
      <div className="container">
        <Header />
        <div className="inner">
          {this.state.apods.map((apoddata, idx) =>
            (<Posts key={idx} apod={apoddata} />)
          )}
        </div>
      </div>
    );
  }
}

export default Container;
