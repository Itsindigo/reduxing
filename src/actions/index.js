export function selectBook(book) {
    // Select book is an Action Creator, needs to return an action - an object with a type property, and a state payload.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}