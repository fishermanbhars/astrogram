import React, { Component } from 'react';
import Button from './astroButton'

class Posts extends Component {

  render() {
    return (
      <div>
        <h2 className="postheader">{this.props.apod.title}</h2>
        {this.props.apod.media_type === 'image' &&
          <img
            className="media"
            alt={''}
            src={this.props.apod.url}
            />
          }
        {this.props.apod.media_type === 'video' &&
          <iframe
            className="media"
            src={this.props.apod.url}
          ></iframe>
        }
        <Button />
        <h3 className="date">{this.props.apod.date}</h3>
        <p className="explanation">{this.props.apod.explanation}</p>
      </div>
    )
  }
}

export default Posts;
