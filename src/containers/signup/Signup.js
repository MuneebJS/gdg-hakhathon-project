import React, { Component } from 'react';
import Radium from 'radium';
import { Grid, Row, Col, MenuItem, Dropdown } from 'react-bootstrap'
import globalConst from '../../globalConst';
import Title from '../../components/Title'
import FieldGroup from '../../components/FieldGroup'
import { connect } from 'react-redux';
import { signup } from '../../store/actions/authActions';
import Button from '../../components/Button'


var styles = {


};

class Signup extends React.Component {
  constructor() {
    super();
    this.signup = this.signup.bind(this)
    this.state = {
      type: 'company',
      email: '', pass: '', address1: '', address2: '', name:'', file: ''
    }
  }
  onChange = a => b => this.setState({ [a]: b.target.value })
  signup(e) {
    e.preventDefault();
    let { email, pass, type, address1, address2, name, file } = this.state
    var credentials = { email, pass, type, address1, address2, name, file }
    console.log(credentials)
    this.props.signup(credentials)
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} >
            <Title>Sign Up</Title>
          </Col>
          <form>
            <Col xs={12} mdOffset={3} md={6}>
              <FieldGroup
                id="full_name"
                type="text"
                label="Full Name"
                placeholder="Full Name"
                onChange={this.onChange('name')}
                inputRef={(input) => this.name = input}
              />

              <FieldGroup
                id="address_line1"
                type="text"
                label="Address Line 1"
                placeholder="Address Line 1"
                onChange={this.onChange('adress1')}
              />
              <FieldGroup
                id="address_line2"
                type="text"
                label="Address Line 2"
                placeholder="Address Line 2"
                onChange={this.onChange('adress2')}
              />
              <FieldGroup
                id="nic"
                type="text"
                label="NIC Number"
                placeholder="NIC Number"
                onChange={this.onChange('nic')}
              />
              <FieldGroup
                id="email"
                type="email"
                label="Email Address"
                placeholder="Email"
                inputRef={(input) => this.email = input}
                onChange={this.onChange('email')}
              />
              <select className="form-control" onChange={(a) => this.setState({ type: a })} style={{ marginBottom: 10 }}>
                <option value="company">Company</option>
                <option value="buyer">Buyer</option>
              </select>
              <FieldGroup
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                inputRef={(input) => this.password = input}
                onChange={this.onChange('email')}
              />
              <input type="file" accept="images/*" onChange={event => this.setState({ file: event.target.files[0] })}/>
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



Signup = Radium(Signup);

// const mapStateToProps = state => {
//   return {
//       user: state.authReducer
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (credentials) => {
      dispatch(signup(credentials));
    }
  }
}
export default connect(null, mapDispatchToProps)(Signup)
// export default Signup;