import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCk1rqrWIu2JTEAZl9cu98eKcJ02Kir4PA",
  authDomain: "catch-of-the-day-reactjs-jr.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-reactjs-jr.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebase }

export default base;