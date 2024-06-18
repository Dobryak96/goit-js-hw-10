'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/snackbar.css';
import imageUrl from '../img/izitoast/bi_check2-circle.png';
import imageErrUrl from '../img/izitoast/bi_x-octagon.png';

const inputEl = document
  .querySelector('.form')
  .addEventListener('submit', promiseFoo);
function promiseFoo(e) {
  e.preventDefault(); // Зупиняємо стандартну поведінку форми

  const delay = e.target.delay.value;
  const state = document.querySelector('input[name="state"]:checked').value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(delay => {
      iziToast.success({
        message: `Fulfilled promise in ${delay} ms`,
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '24',
        title: 'OK',
        titleColor: '#fff',
        titleSize: '16',
        titleLineHeight: '24',
        backgroundColor: '#59A10D',
        position: 'topRight',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        progressBarColor: '#326101',
        iconUrl: imageUrl,
        imageWidth: 24,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        messageSize: '16',
        messageColor: '#fff',
        messageLineHeight: '24',
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16',
        titleLineHeight: '24',
        backgroundColor: '#EF4040',
        position: 'topRight',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        progressBarColor: '#B51B1B',
        iconUrl: imageErrUrl,
        imageWidth: 24,
      });
    });
}