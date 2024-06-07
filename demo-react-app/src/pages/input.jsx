import React, { Component } from 'react'

export default class input extends Component {
  render() {
    return (
      <div className='container'>
        <input type="text" name='ChannelName' placeholder='Channel Name' className='form-control' />
      </div>
    )
  }
}
