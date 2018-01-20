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

    onInputChange( term ) {
        this.setState( { term } );
        this.props.onSearch( term );
    }

    // must have render method if extends React.Component
    render( ) {
        return (
            <div className="search-bar">
                <input onChange={ event => this.onInputChange( event.target.value ) }/>
            </div>
        ); 
        
    }
}

export default SearchBar;