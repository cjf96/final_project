import React, { Component } from 'react';
import { Task } from './MusicItem';

export class TaskList extends Component {
    render() {
        return (
            <div className="tastList">
                {this.props.requests.map((d, i) => {
                    return <Task key={'request' + i} info={d} />
                })

                }
            </div>

        )
    }
}