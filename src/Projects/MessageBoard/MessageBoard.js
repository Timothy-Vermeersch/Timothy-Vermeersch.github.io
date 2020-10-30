import React from 'react';
import firebase from 'firebase';
import "./MessageBoard.css";
import API from '../../api.js';
import { document } from 'firebase-functions/lib/providers/firestore';

class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newPostText: "",
            user: "Anonymous",
            numberOfMessages: 20,
        }
        this.getMessages();
    }

    getMessages = () =>{
        API.get('/api/read/message-board-posts/MainBoard/10',).then(res => {
            console.log(res.data)
            this.setState({messages: res.data,});
            //setTimeout(this.check(),1000);
        })
    }

    check = () =>{
        API.get('/api/listen/messageBoard/MainBoard').then(res =>{
            console.log("New message");
            setTimeout(this.getMessages(),1000);
        })
    }

    newPost = () =>{
        var currentDate = new Date;
        var newMessages = this.state.messages.slice();
        var newMessage = {text: this.state.newPostText, user: this.state.user, date: String(currentDate.getTime())};
        newMessages.splice(0,0,newMessage);
        API.post(`/api/create/message-board-post`, { boardName: "MainBoard", text: this.state.newPostText, user: this.state.user })
        .then(res => {

        })
        console.log(newMessage)
        this.setState({newPostText: "", messages: newMessages});
    }

    updateNewPost = (event) =>{
        this.setState({newPostText: event.target.value});
    }

    render() {
        var messages = [...this.state.messages];
        var formattedMessages = [];
        for(var message of messages){
            let currentDate = new Date(Number(message.date));
            let formattedDate = (currentDate.getMonth() + 1) + "-" + currentDate.getDate() + "-" + currentDate.getFullYear();
            formattedDate += "  " + ((currentDate.getHours() - 1)  % 12 + 1) + ":" + (currentDate.getMinutes());
            formattedMessages.push(
            <div id = "post">
            <h2 id = "post-username">{message.user} ({formattedDate}):</h2>
            <p id = "post">{message.text}</p>
            </div>
            , <hr/>
            );
        }
        return (
            <div id = "Message-Board">
                <h1 id = "Message-Board-Title">Message Board</h1>
                {this.state.username == "Anonymous" ? [<input type = "text" id = "username" placeholder = "Username"/>,<br/>,<input type = "text" id = "password" placeholder = "Password"/>]: null}
                <button className = "Login-Button" onClick = {this.check}>{this.state.username == "Anonymous" ? "Login": "Logout"}</button>
                <h4 id = "Login-Status">{this.state.loginStatus}</h4>
                <h2>Make A New Post</h2>
                <button onClick = {this.newPost}>Post</button>
                <br/>
                <textarea type = "text" id = "newPost" value ={this.state.newPostText} onChange = {this.updateNewPost}/>
                <br/>
                {formattedMessages}
            </div>
        );
    }
}

export default MessageBoard;