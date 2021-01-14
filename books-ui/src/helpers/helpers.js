import axios from 'axios';
import Vue from 'vue';
import FlashMessage from '@smartweb/vue-flash-message';
//import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(FlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const baseURL = 'http://localhost:3000/books/';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
      console.log(error)
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getBook: handleError(async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  getBooks: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deleteBook: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createBook: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updateBook: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  })
};
