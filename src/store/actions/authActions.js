import Actions from './Const';
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'


// const signin_successful = () => {
//     return {
//         type: Actions.SIGNUP_SUCCESSFUL
//     }
// }

export const signup = (credentials, dispatch) => {
    return dispatch => {
        firebase.auth()
            .createUserWithEmailAndPassword(credentials.email, credentials.pass)
            .then(
                // () => {
                //     browserHistory.push('signin')
                // },
                // () => {
                //     // dispatch(signin_successful())
                //     console.log('signup successfull')
                // },
            (user) => {
                console.log("signup successful")
                console.log(user)
            }
            )
            .catch(
            (error) => {
                console.log("signup rejected")
                console.log(error)
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