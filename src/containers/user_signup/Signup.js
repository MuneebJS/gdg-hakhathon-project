
import React ,{Component} from 'react';
import Radium from 'radium';
import {Grid, Row, Col} from 'react-bootstrap'
import  globalConst from '../../globalConst';
import Title from '../../components/Title'
import FieldGroup from '../../components/FieldGroup'
import {connect} from 'react-redux';
import {signup} from '../../store/actions/authActions';
import Button from '../../components/Button'


var styles = {
 

  };

class Signup extends React.Component {
  constructor() {
    super();
    this.signup = this.signup.bind(this)
  }

  signup(e) {
    e.preventDefault();
    var credentials = {
        email: this.email.value,
        pass: this.password.value
    }
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
        />
         <FieldGroup
          id="email"
          type="email"
          label="Email Address"
          placeholder="Email"
          inputRef = {(input) => this.email = input }
          
        />
        <FieldGroup
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          inputRef = {(input) => this.password = input }
          
        />
          </Col>
          <Col xs={12} style={{textAlign: 'center', marginBottom: 50}}>
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