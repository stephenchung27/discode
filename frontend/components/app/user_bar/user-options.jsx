import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserOptions extends Component {
  render() {
    return (
      <form className='user-options'>
        <div className='general-options'>
          <div className='user-avatar-upload'>
            <p></p>
          </div>
          <div className='user-account-options'>

          </div>
        </div>
        <div className='options-divider'></div>
        <div className='options-buttons'>
          <button>Delete Account</button>
          <button>Save</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default UserOptions;