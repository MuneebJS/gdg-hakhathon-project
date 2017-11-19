import React, { Component } from 'react';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'
import globalConst from '../../globalConst';
import Title from '../../components/Title'
import FieldGroup from '../../components/FieldGroup'
import { connect } from 'react-redux';
import { requestService } from '../../store/actions/requestAction';
import Button from '../../components/Button'
import { FormControl, FormGroup, ControlLabel, ListGroup, ListGroupItem } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css'
import moment from 'moment';


var styles = {
    dateInput: {
        borderRadius: 2,
        width: '100%'
    }
};

class RequestService extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: ''
        }
        this.requestHandler = this.requestHandler.bind(this)
        this.dateHandler = this.dateHandler.bind(this)
    }
    componentDidMount() {
        // let date = new Date();
        // let today = date.toUTCString();
        let today = moment.utc();
        // console.log(today);
        this.setState({
            startDate: today
        })
    }

    requestHandler(e) {
        e.preventDefault();
        let today = moment.utc().toLocaleString();
        let refId = Math.floor(Math.random() * 90000) + 10000;
        // console.log(today);
        var requestData = {
            form_submission_date: today,
            service: this.service.value,
            address: this.address.value,
            email: this.email.value,
            phone: this.phone.value,
            service_date: this.state.startDate.toLocaleString(),
            timeSlot: this.timeSlot.value,
            refId: refId
        }
        // console.log(requestData)
        this.props.requestService(requestData,refId)
    }
    dateHandler(date) {
        var selectedDate = date.utc();
        // console.log(selectedDate)
        this.setState({
            startDate: selectedDate
        })
        // console.log(this.state.startDate.toString())
    }
    render() {
        
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} >
                        <Title>Request  Your Service</Title>
                    </Col>
                    <Col xs={12}>
                      {this.props.isReqSubmitted &&
                      <ListGroup>
                            <ListGroupItem bsStyle="success">
                                Thank you for requesting! your tracking Id is "{this.props.refId}"
                            </ListGroupItem>
                        </ListGroup> }
                    </Col>
                    <form>
                        <Col xs={12} md={6} mdOffset={3}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Select Service</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"
                                    inputRef={(input) => this.service = input} >
                                    <option value="plumbing">Plumbing</option>
                                    <option value="electrician">Electrician</option>
                                    <option value="bike_tuneup">Bike Tune-up</option>
                                    <option value="lock">Lock Crack</option>
                                </FormControl>
                            </FormGroup>
                            <FieldGroup
                                id="address"
                                type="text"
                                placeholder="Address"
                                inputRef={(input) => this.address = input}
                            />
                            <FieldGroup
                                id="email"
                                type="email"
                                placeholder="Email"
                                inputRef={(input) => this.email = input}
                            />
                            <FieldGroup
                                id="phone"
                                type="text"
                                placeholder="Phone Number"
                                inputRef={(input) => this.phone = input}
                            />
                        </Col>
                        <Col md={3} mdOffset={3}>
                            <FormGroup>
                                <DatePicker
                                    dateFormat="DD/MM/YYYY"
                                    selected={this.state.startDate}
                                    onChange={(date) => this.dateHandler(date)}
                                    placeholderText="Click to select a date"
                                    className="date-picker"
                                    style={
                                        { border: 'red' }
                                    }
                                />

                            </FormGroup>
                        </Col>
                        <Col md={3}>

                            <FormGroup controlId="formControlsSelect">
                                {/* <ControlLabel>Select Time Between</ControlLabel> */}
                                <FormControl componentClass="select" placeholder="select"
                                    inputRef={(input) => this.timeSlot = input} >
                                    <option value="10 to 1">Any Time</option>
                                    <option value="10 to 1">10 to 1</option>
                                    <option value="1 to 4">1 to 4</option>
                                    <option value="4 to 7">4 to 7</option>
                                    {/* <option value="lock">Lock Crack</option> */}
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={3} xsOffset={8} style={{ marginBottom: 50, paddingLeft: 0 }}>
                            <Button filled clickHandler={this.requestHandler}>
                                Submit
                             </Button>
                        </Col>
                    </form>
                </Row>
            </Grid>

        );
    }
}



RequestService = Radium(RequestService);
// export default RequestService;

const mapStateToProps = state => {
  return {
    isReqSubmitted: state.requestReducer.isReqSubmitted,
    refId: state.requestReducer.refId
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestService: (requestData, refId) => {
            dispatch(requestService(requestData, refId));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RequestService)
// export default Signup;