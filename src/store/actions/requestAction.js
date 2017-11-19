import Actions from './Const';
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'



const request_service_success = () => {
    return {
        type: Actions.REQUEST_SERVICE_SUCCESS,
    }
}

const request_service_error = () => {
    return {
        type: Actions.REQUEST_SERVICE_ERROR,
    }
}

export const requestService = (requestData, dispatch) => {
    return dispatch => {
        var db = firebase.database();
        let dbRef = db.ref().child('Requests');
        dbRef.push(requestData)
        // firebase.auth()
            // .createUserWithEmailAndPassword(credentials.email, credentials.pass)
            .then(
                // () => {
                //     // browserHistory.push('signin')
                // },
                () => {
                    console.log('success')
                    dispatch(request_service_success())
                },
            // (user) => {
            //     console.log("signup successful")
            //     console.log(user)
            // }
            )
            .catch(
            (error) => {
                console.log("signup rejected", error)
                dispatch(request_service_error())
                
            })
    }
}

export const signin = (credentials) => {
    return dispatch => {
        firebase.auth()
        .signInWithEmailAndPassword(credentials.email, credentials.pass)
        .then(
            (user) => {
                console.log(user)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
}