import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={ () => {this.props.selectBook(book)} }
                    key={book.title}
                    className='list-group-item'
                >{book.title}</li>
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
    return {
        books: state.books
    };
}

// Anything returned from this function will be made available as props on the BookList container.
function mapDispatchToProps(dispatch) {
    // Whenever select book is called, the result should be passed to all of our reducers.
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Promote BookList from component to container. Container needs to know about dispatch function and mapState to bind to 
// Reducers and Actions, and then make available as props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);