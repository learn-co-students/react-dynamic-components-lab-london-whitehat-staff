import React, { Component } from 'react';

export default class Comment extends React.Component {
    render() {
        return (
          <div className="comment">
            <p>{this.props.commentText}</p>
          </div>
        )
      }
}
