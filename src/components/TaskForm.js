import React, { Component } from "react";

export default class TaskForm extends Component {
    
    onSubmit = () =>{
        alert("Purta")
    }
    
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Write a task"></input>
                <br></br>
                <br></br>
                <textarea placeholder="Write a description"></textarea>
                <input type="submit"></input>
            </form>
        )
    }
}