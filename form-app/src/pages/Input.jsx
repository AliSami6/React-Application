import React, { Component } from 'react'

export default class Input extends Component {
  FormChange =(event)=> {
    console.log(event.target.name);
  }
  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-12 mt-3">
            <input
              type="text"
              name="ChannelName"
              placeholder="Channel Name"
              className="form-control"
              onChange={this.FormChange}
            />
            <input
              type="text"
              name="Subscriber"
              placeholder="Subscriber Name"
              className="form-control"
              onChange={this.FormChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
