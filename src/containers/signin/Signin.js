import React, { Component } from 'react';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'
import globalConst from '../../globalConst';
import Title from '../../components/Title'
import FieldGroup from '../../components/FieldGroup'
import { connect } from 'react-redux';
import { signin } from '../../store/actions/authActions';
import Button from '../../components/Button'
import axios from 'axios'
import firebase from 'firebase'
import { browserHistory } from 'react-router'

var styles = {


};

class Signin extends React.Component {
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
    this.props.signin(credentials)
    this.setState({ sigin: true })
    if (navigator.getUserMedia) {
      //opera
      navigator.getUserMedia({ video: true, audio: true }, this.onSuccess, () => { });
    }
    else if (navigator.webkitGetUserMedia) {
      navigator.webkitGetUserMedia('video, audio', this.onSuccess, () => { });
    }
    else {
    }
  }
  onSuccess = (stream) => {
    var output = this.a('output'); //a <VIDEO> element

    // output.autoplay = true; //you can set this in your markup as well

    output.src = window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL.createObjectURL(stream) : stream;
  }
  takepicture = (videoOutput, width, height) => {
    var canvas = this.a('canvas')

    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(videoOutput, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    return data
  }
  a = (a) => {
    console.log(this.refs)
    return this.refs[a]
  }
  resultStatus = ''
  verify = image => {
    const formData = new FormData()
    formData.append('image', image);
    alert("Attempting to recognize you..please wait.")
    // Post to server
    axios.post('http://localhost:3128/verify', formData)
      .then(res => {
        // Post a status message saying the upload complete
        if (!res.data.Errors) {
          if (res.data.images[0].transaction.status != "success") {
            this.resultStatus = '😕 don\'t know who you are! Try uploading a picture of yourself first in upload section';
            this.fail()
          } else {
            let name = res.data.images[0].transaction.subject_id
            firebase.auth().onAuthStateChanged(user => {
              if (user.displayName === name) {
                firebase.database().ref('users/' + user.uid).once(snap => {
                  console.log(user.snap())
                  if (user.type === 'company') {
                    browserHistory.push('company-dasboard')
                  } else {
                    browserHistory.push('companies')
                  }
                })
              } else {
                this.fail()
              }
            })
            this.resultStatus = 'What\'s good ' + res.data.images[0].transaction.subject_id + '! 🤓';
          }
          this.resultDetails = res.data.images[0].transaction;
        } else {
          this.fail()
          this.resultStatus = '😕 don\'t know who you are! Try uploading a picture first in upload section';
        }
        // alert(this.resultStatus)
      })

    console.log(image)
  }
  fail = () => {
    alert ('fail')
    firebase.auth().signOut()
    this.setState({ sigin: false }) 
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} >
            <Title>Sign IN</Title>
          </Col>
          <div style={{ display: this.state.sigin ? 'block' : 'none' }}>
            <video ref="output" width="640" height="480" autoplay></video>
            <button onClick={() => this.verify(this.takepicture(this.a('output'), 640, 480))}>Snap Photo</button>
            <canvas ref="canvas" width="640" height="480"></canvas>
          </div>
          {!this.state.sigin &&
            <form>
              <Col xs={12} mdOffset={3} md={6}>
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
                  Sign In
              </Button>
              </Col>
            </form>
          }
        </Row>
      </Grid>

    );
  }
}



Signin = Radium(Signin);

// const mapStateToProps = state => {
//   return {
//       user: state.authReducer
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (credentials) => {
      dispatch(signin(credentials));
    }
  }
}
export default connect(null, mapDispatchToProps)(Signin)