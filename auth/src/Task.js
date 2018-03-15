import React, { Component } from 'react';
import firebase from 'firebase';

class Task extends Component {

    render() {
        return (
            <div className="taskItem">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                        Task {/*task name*/}
                    </label>
                </div>
                <div>
                    <p>Project: {/*project name*/}</p>
                    <p>Priority: {/* high, medium, low */} </p>
                    <p>Due: {/*due date*/} </p>
                    <p>{/*descrpition*/} </p>
                </div>
            </div>
        )
    }
}

export { Task };