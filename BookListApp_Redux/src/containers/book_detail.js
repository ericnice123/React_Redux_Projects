import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        if( this.props.activeBook ) {
            return (
                <div>
                    <h3>Detail for:</h3>
                    <div>
                        Title: { this.props.activeBook.title }
                    </div>
                    <div>
                        Page: { this.props.activeBook.page }
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    Please select a book to begin.
                </div>
            );
        }
    }
}

function mapStateToProps( state ) {
    return { activeBook: state.activeBook };
}

export default connect( mapStateToProps )( BookDetail );