import React, { Component } from 'react';
import { MusicItem } from "./MusicItem";

export class RequestList extends Component {

    render() {
        return (
            <div>
                {this.props.requests.map((d, i) => {
                    return <MusicItem key={'item-' + i} info={d} />
                })
                }
            </div>
        )
    }
}