import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts( );
    }

    renderPosts( ) {
        if( this.props.posts !== null ) {
            console.log( this.props.posts );

            /*this.props.posts.map( ( post ) => {
                console.log( post )
            });*/
        }
    }

    render() {
        console.log( this.props.posts );
        return (
            <div>
                This will be the page for '/'
            </div>
        );
    }
}

function mapStateToProps ( state ) {
    return { posts: state.posts };
}

export default connect( mapStateToProps, { fetchPosts } )( PostIndex );