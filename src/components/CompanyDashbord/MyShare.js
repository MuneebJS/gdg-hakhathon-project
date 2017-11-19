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
import Card from './Card'

var styles = {};

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {  }
  }
  componentDidMount() {
    if (!this.props.shares) {
      this.props.fetchShares()
    }
  }
  render() {
    return (
      <div>
        {/* { JSON.stringify(this.props) } */}
        {this.props.shares ? this.props.shares.map(a => <Card subTitle={'investment: ' + a.investment} desc={'Total Shares: ' + a.totalShare + ' Per Share: ' + a.perShare } />) : <h1>Loading</h1>}
      </div>
    );
  }
}

Signup = Radium(Signup);

const mapStateToProps = state => {
  console.log(state)
  return {
    shares: state.shares.shares
  }
}

let fetchShares = (dispatch, payload) => {
  auth().onAuthStateChanged(user => {
    database().ref('Shares/' + user.uid).off()
    database().ref('Shares/' + user.uid).on('value', snap => {
      dispatch({ type: 'SET_SHARES', payload: Object.values(snap.val()) })
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)