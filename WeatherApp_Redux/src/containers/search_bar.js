import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <input type="submit" />
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {  };
}

export default connect( mapStateToProps )( SearchBar );