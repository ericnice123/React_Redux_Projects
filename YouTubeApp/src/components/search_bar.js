import React, { Component } from 'react';

// this is a functional component
/*const SearchBar = () => {
    return <input />; // need import React to transcode to vanallia JS
};*/

// This is a class component
class SearchBar extends Component {

    constructor( props ) {
        super( props );

        this.state = { term: '' };
    }

    onInputChange( event ) {
        this.setState( { term: event.target.value } );
    }

    // must have render method if extends React.Component
    render() {
        return <input onChange={ event => this.setState( { term: event.target.value } ) } />;
    }
}

export default SearchBar;