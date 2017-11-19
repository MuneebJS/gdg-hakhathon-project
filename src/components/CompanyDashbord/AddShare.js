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
    this.state = { investment: '', perShare: '' }
    this.signup = this.signup.bind(this)
  }

  signup(e) {
    e.preventDefault();
    let { investment, perShare } = this.state
    var payload = { investment, perShare, totalShare: investment / perShare }
    console.log(payload)
    // auth().signInWithEmailAndPassword('a@a.com', '123456').then(a => {
    this.props.AddShare(payload)
    // })
  }
  onChange = (a) => (b) => this.setState({ [a]: b.target.value })
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} >
            <Title>Add Share</Title>
          </Col>
          <form>
            <Col xs={12} mdOffset={3} md={6}>
              <FieldGroup
                type="number"
                label="Investment"
                placeholder="Investment"
                value={this.state.investment}
                onChange={this.onChange('investment')}
              />
              <FieldGroup
                type="number"
                label="PerShare"
                placeholder="PerShare"
                value={this.state.perShare}
                onChange={this.onChange('perShare')}
              />
            </Col>
            <Col xs={12} style={{ textAlign: 'center', marginBottom: 50 }}>
              <Button filled clickHandler={this.signup}>
                Add Share
              </Button>
            </Col>
          </form>
        </Row>
      </Grid>

    );
  }
}



Signup = Radium(Signup);

const mapStateToProps = state => {
  return {
    user: state.authReducer
  }
}
let addShare = (dispatch, payload) => {
  auth().onAuthStateChanged(user => {
    database().ref('Shares/' + user.uid).push(payload).then(() => {
      console.log('hogaya')
    })
  })
  // dispatch({ type: '', payload })
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddShare: (payload) => {
      addShare(dispatch, payload)
    }
  }
}
export default connect(mapDispatchToProps, mapDispatchToProps)(Signup)