import Actions from './Const';
import * as firebase from 'firebase'
import { browserHistory } from 'react-router'
import axios from 'axios'

const signin_successful = () => {
    return {
        type: Actions.SIGNUP_SUCCESSFUL
    }
}

export const signup = (credentials, dispatch) => {
    return dispatch => {
        const formData = new FormData()
        let { file, name } = credentials
        formData.append('image', file);
        formData.append('name', name);
        axios.post('http://localhost:3128/upload', formData)
        .then(res => {
            // Post a status message
            if( res.status == true){
            alert('Image has been uploaded successfully 🤓')
            }else{
            alert('Image has been uploaded successfully 🤓')
            }
        })
        delete credentials.file
        firebase.auth()
            .createUserWithEmailAndPassword(credentials.email, credentials.pass)
            .then(user => { firebase.auth().currentUser.updateProfile({ displayName: credentials.name }); return user })
            .then(user => firebase.database().ref(credentials.type + '/' + user.uid).set(credentials).then(a => user))
            .then(user => firebase.database().ref('users/' + user.uid).set(credentials))
            .then(() => browserHistory.push(credentials.type + '-dahboard'))
            .then(() => {dispatch(signin_successful()); console.log('signup successfull')})
            .then((user) => {console.log("signup successful");console.log(user)})
            .catch((error) => {
                console.log("signup rejected")
                console.log(error)
            })
    }
}

export const signin = (credentials) => {
    return dispatch => {
        firebase.auth()
            .signInWithEmailAndPassword(credentials.email, credentials.pass)
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}