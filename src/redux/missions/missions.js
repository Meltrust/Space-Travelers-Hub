// import axios from 'axios';

// const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
// const apiId = '7bITS9pnop0z4L5ssJm1';
// const ADD_BOOK = 'bookStore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
// const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';

// const initialState = { books: [] };

// export const loadBooks = () => async (dispatch) => {
//   const response = await axios.get(`${baseUrl}/apps/${apiId}/books`);
//   const array = [];
//   const keys = Object.keys(response.data);
//   const values = Object.values(response.data);
//   values.forEach((value, index) => {
//     const obj = value[0];
//     const splitArray = obj.title.split('&&&');
//     const book = {
//       title: splitArray[0],
//       author: splitArray[1],
//       id: keys[index],
//       category: obj.category,
//     };

//     array.push(book);
//   });

//   dispatch({
//     type: LOAD_BOOKS,
//     payload: array,
//   });
// };

// export const addBook = (payload) => async (dispatch) => {
//   const newBook = {
//     item_id: `${payload.id}`,
//     title: `${payload.title}&&&${payload.author}`,
//     category: `${payload.category}`,
//   };
//   await axios.post(`${baseUrl}/apps/${apiId}/books`, newBook);
//   dispatch({
//     type: ADD_BOOK,
//     payload,
//   });
// };

// export const removeBook = (payload) => async (dispatch) => {
//   const body = {
//     item_id: payload,
//   };
//   await axios.delete(`${baseUrl}/apps/${apiId}/books/${payload}`, body);
//   dispatch({
//     type: REMOVE_BOOK,
//     payload,
//   });
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:

//       return { books: [...state.books, action.payload] };

//     case REMOVE_BOOK:
//       return { books: state.books.filter((book) => book.id !== action.payload) };

//     case LOAD_BOOKS:
//       return { books: action.payload };

//     default:
//       return state;
//   }
// };

// export default reducer;
