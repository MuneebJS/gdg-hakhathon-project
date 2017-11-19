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
    this.state = {}
  }
  componentDidMount() {
    if (!this.props.shares) {
      this.props.fetchShares()
    }
  }
  render() {
    return (
      <Grid>
        <Row>
          {this.props.shares ? this.props.shares.length ? this.props.shares.map(a =>
            <Col xs={12} sm={6} md={4}>
              <Card subTitle={'investment: ' + a.investment} desc={'Total Shares: ' + a.totalShare + ' Per Share: ' + a.perShare} />
            </Col>  
          ) : <h1>You Have No Share for Sale </h1> : <h1>Loading</h1> }
        </Row>
      </Grid>
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
      dispatch({ type: 'SET_SHARES', payload: Object.values(snap.val() || {}) })
    })
  })
}

let fetchAllShares = (dispatch, payload) => {
  auth().onAuthStateChanged(user => {
    database().ref('Shares').off()
    database().ref('Shares').on('value', snap => {
      database().ref()
      dispatch({ type: 'SET_ALL_SHARES', payload: Object.values(snap.val() || {}).map(a => Object.values(a)) })
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