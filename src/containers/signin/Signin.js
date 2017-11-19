import React, { Component } from 'react';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'
import globalConst from '../../globalConst';
import Title from '../../components/Title'
import FieldGroup from '../../components/FieldGroup'
import { connect } from 'react-redux';
import { signin } from '../../store/actions/authActions';
import Button from '../../components/Button'


var styles = {


};

class Signin extends React.Component {
  constructor() {
    super();
    this.signup = this.signup.bind(this)
    this.state = {
      investment: "",
      perShare: "",
    }
  }

  signup(e) {
    e.preventDefault();
    var credentials = {
      email: this.email.value,
      pass: this.password.value
    }

    let { investment, perShare } = this.state
    let totalShare = investment / perShare;
    // var payload = { investment, perShare, totalShare: investment / perShare }

    var com_data = {
      com_name: this.com_name.value,
      com_details: this.com_detail.value
    }
    console.log(com_data)
    this.props.signin(credentials)
  }

  onChange = (a) => (b) => this.setState({ [a]: b.target.value })
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} >
            <Title>Sign Up</Title>
          </Col>
          <form>
            <Col xs={12} mdOffset={3} md={6}>
              {/* <FieldGroup
          id="full_name"
          type="text"
          label="Full Name"
          placeholder="Full Name"
          inputRef = {(input) => this.name = input }
        />
        <FieldGroup
          id="address_line1"
          type="text"
          label="Address Line 1"
          placeholder="Address Line 1"
        />
        <FieldGroup
          id="address_line2"
          type="text"
          label="Address Line 2"
          placeholder="Address Line 2"
        />
        <FieldGroup
          id="nic"
          type="text"
          label="NIC Number"
          placeholder="NIC Number"
        /> */}

              <FieldGroup
                id="com_name"
                type="text"
                label="Company Name"
                placeholder="Company Name"
                inputRef={(input) => this.com_name = input}

              />
              {/* <FieldGroup
                id="investmet"
                type="number"
                label="investment"
                placeholder="investment"
                inputRef={(input) => this.investment = input}

              />

              <FieldGroup
                id="per_share"
                type="number"
                label="per_share"
                placeholder="per_share"
                inputRef={(input) => this.per_share = input}
              /> */}

              {/* <FieldGroup
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
              /> */}

              <FieldGroup
                id="email"
                type="email"
                label="Email Address"
                placeholder="Email"
                inputRef={(input) => this.email = input}
              />
              <FieldGroup
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                inputRef={(input) => this.password = input}
              />
            </Col>
            <Col xs={12} style={{ textAlign: 'center', marginBottom: 50 }}>
              <Button filled clickHandler={this.signup}>
                Sign Up
          </Button>
            </Col>
          </form>
        </Row>
      </Grid>

    );
  }
}



// Signin = Radium(Signin);

// const mapStateToProps = state => {
//   return {
//       user: state.authReducer
//   }
// }



// let addShare = (dispatch, payload) => {
//   auth().onAuthStateChanged(user => {
//     database().ref('Shares/' + user.uid).push(payload).then(() => {
//       // alert('hogaya')
//       console.log("add share successfull")
//     })
//   })
//   // dispatch({ type: '', payload })
// }



const mapDispatchToProps = (dispatch) => {
  return {
    signin: (credentials) => {
      dispatch(signin(credentials));
    }
  }
}
export default connect(null, mapDispatchToProps)(Signin)