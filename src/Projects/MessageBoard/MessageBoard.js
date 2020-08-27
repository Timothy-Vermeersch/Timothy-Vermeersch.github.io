import React from 'react';
import firebase from 'firebase';
import "./MessageBoard.css";

class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            loginStatus: "Not Logged In",
            username: "Anonymous",
        }
        try{
        firebase.initializeApp({
            apiKey: "AIzaSyDV1uhNGonvIQGstvJuLa2Y0Xj6w_uK5Qg",
            authDomain: "github-pages-af198.firebaseapp.com",
            databaseURL: "https://github-pages-af198.firebaseio.com",
            projectId: "github-pages-af198",
            storageBucket: "github-pages-af198.appspot.com",
            messagingSenderId: "964568217030",
            appId: "1:964568217030:web:1cd3cce56dc97ccfc36ec7",
            measurementId: "G-2NZPL4MBZ8"
          });
        }catch{

        }
        this.database = firebase.database().ref("/Message-Board");
        this.database.update({
            1: "World"
        });
        console.log(firebase.database().ref("/Message-Board").snapshot);
        setInterval(this.getMessages, 100);
    }

    getMessages = () =>{
        var messages = null;
        this.database.on('value', function (snapshot){
            messages = snapshot.val();
        });
        if(messages != null){
            this.setState({messages: messages});
        }
    }

    post = () =>{
        console.log("Posting");
        //var newIndex = this.state.messages.slice().length;
        this.database.push({user: this.state.username, text: document.getElementById("newPost").value});
    }

    login = () =>{
        var userBase = firebase.database().ref("/Users");
        var self = this;
        if(this.state.username != "Anonymous"){
            this.setState({username:"Anonymous", loginStatus: "Not Logged In"})
            return null;
        }
        userBase.once('value').then(function (snapshot) {
            var users = snapshot.val();
            var usernames = Object.keys(users);
            var enteredUsername = document.getElementById("username").value;
            var enteredPassword = document.getElementById("password").value;
            if(usernames.includes(enteredUsername)){
                if(users[enteredUsername]==enteredPassword){
                    self.setState({username:enteredUsername, loginStatus: "Logged In"});
                    return null
                }
            }
            self.setState({loginStatus: "Username or Password doesn't match."})
        })
    }
    
    render() {
        var messages = Object.values(this.state.messages);
        var formattedMessages = [];
        for(var i = messages.length-1; i>0; i--){
            formattedMessages.push(
            <div id = "post">
            <h2>{messages[i].user} :</h2>
            <p id = "post">{messages[i].text}</p>
            </div>
            , <hr/>
            );
        }
        return (
            <div id = "Message-Board">
                <h1 id = "Message-Board-Title">Message Board</h1>
                <button className = "Login-Button" onClick = {this.login}>{this.state.username == "Anonymous" ? "Login": "Logout"}</button>
                {this.state.username == "Anonymous" ? [<input type = "text" id = "password" placeholder = "Password"/>, <input type = "text" id = "username" placeholder = "Username"/>]: null}
                <h4 id = "Login-Status">{this.state.loginStatus}</h4>
                <h2>Make A New Post</h2>
                <button onClick = {this.post}>Post</button>
                <br/>
                <textarea type = "text" id = "newPost"/>
                <br/>
                {formattedMessages}
            </div>
        );
    }
}

export default MessageBoard;