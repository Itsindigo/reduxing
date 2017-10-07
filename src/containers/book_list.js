import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreatords } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className='list-group-item'>{book.title}</li>
            )
        });
    }

    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned from here is returned as props to BookList
    // Callback, pass reference to connect, connect loads state, executes this.
    console.log(state);
    return {
        books: state.books
    };
}


export default connect(mapStateToProps)(BookList);