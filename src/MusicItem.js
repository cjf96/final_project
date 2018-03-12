import React, { Component } from 'react';
import firebase from 'firebase';

export class MusicItem extends Component {
    likeItem() {
        let songRef = firebase.database().ref('requests/' + this.props.info.key + '/likes');
        songRef.transaction((likes) => likes + 1);
    }

    render() {
        return (
            <div>
                <iframe src={"https://open.spotify.com/embed?uri=" + this.props.info.songLink} width="300" height="380" frameBorder="0" allowtransparency="true"></iframe>
                <p onClick={() => this.likeItem()}> {this.props.info.user} Press HERE to vote: {this.props.info.likes} </p>
            </div>
        )
    }
}