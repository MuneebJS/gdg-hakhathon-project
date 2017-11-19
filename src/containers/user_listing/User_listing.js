import React, { Component } from 'react';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'
import globalConst from '../../globalConst';
import Title from '../../components/Title'
import FieldGroup from '../../components/FieldGroup'
import { connect } from 'react-redux';
import { requestService } from '../../store/actions/requestAction';
import Button from '../../components/Button'
import Card from "../../components/home/renovation/Renovation"
import { FormControl, FormGroup, ControlLabel, ListGroup, ListGroupItem } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './style.css'
import moment from 'moment';
import * as firebase from 'firebase'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';



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
            // startDate: ''
            companies: [{
                com_name: "ABC Company",
                comp_detail: "kjaslkdfjlasdjflkasjd j askdjf kasjdf kajsdfjaklsj",
                shares_details: {
                    investment: 1000000,
                    perShare: 10,
                    totalShares: 10000
                }

            }]
        }
        this.comp_click_hand = this.comp_click_hand.bind(this)
        this.getCompanies = this.getCompanies.bind(this)
    }

    componentDidMount() {

    }

    comp_click_hand(e) {
        browserHistory.push('/company');
    }
    getCompanies(date) {
        var arrayToPushedData = [];
        // db reference
        let dbRef = firebase.database().ref('Companies');
        dbRef.on('child_added', snap => {
            arrayToPushedData = this.state.data;
            arrayToPushedData.push(snap.val());
            this.setState({
                companies: arrayToPushedData,
            })
        })
    }
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} >
                        <Title>Companies</Title>
                        {this.state.companies.map((u, i) => {
                            return (
                                <a hred="#" onClick={this.comp_click_hand(u.uid)}>
                                    <h2>{u.com_name}</h2>
                                    <p>{u.comp_detail}</p>
                                </a>
                            )
                        })}

                    </Col>
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