import React, {Component} from 'react';
import { connect } from 'react-redux';

class ActiveBook extends Component {
    render() {
        const book = this.props.book;
        if (!book) {
            return <div>Select a book..</div>
        }
        return (
            <div>Details For:
                <div>
                    <p>Title:{book.title}</p>
                    <p>Pages:{book.pages}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned from here is returned as props to BookList
    // Callback, pass reference to connect, connect loads state, executes this.
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(ActiveBook);