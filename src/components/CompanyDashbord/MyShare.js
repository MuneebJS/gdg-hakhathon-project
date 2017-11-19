import React, { Component } from 'react';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'
import globalConst from '../../globalConst';
import Title from '../../components/Title'
import FieldGroup from '../../components/FieldGroup'
import { connect } from 'react-redux';
import { signup } from '../../store/actions/authActions';
import Button from '../../components/Button'
import { database, auth } from 'firebase'

var styles = {
};

class Signup extends React.Component {
  constructor() {
    super();
    this.state = { shares: [] }
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

Signup = Radium(Signup);

const mapStateToProps = state => {
  return {
    shares: state.shareReducer
  }
}

let fetchShares = (dispatch, payload) => {
  auth().onAuthStateChanged(user => {
    database().ref('Shares/' + user.uid).off()
    database().ref('Shares/' + user.uid).on('value', snap => {
      dispatch({ type: 'SET_SHARE', payload: Object.values(snap.val()) })
    })
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShares: (payload) => {
      fetchShares(dispatch, payload)
    }
  }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(Signup)