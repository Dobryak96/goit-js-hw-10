'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/timer.css';
import imageUrl from '../img/izitoast/bi_x-octagon.png'

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

let initTime = 0;

refs.startBtn.addEventListener('click', (e) => {
  const intervalId = setInterval(() => {
    // const currentTime = Date.now();
    const diff = initTime - Date.now(); 
    const time = convertMs(diff);
    // const timeObj = getTime(time);
    renderTime(initTime)
    // refs.days.textContent = timeObj.days;
    // refs.hours.textContent = timeObj.hours;
    // refs.minutes.textContent = timeObj.minutes;
    // refs.seconds.textContent = timeObj.seconds;
    
  }, 1000)

  refs. startBtn.classList.remove('button-normal');
  refs. startBtn.setAttribute('disabled', 'true');
  refs.input.setAttribute('disabled', 'true');
  setTimeout(() => {
    clearInterval(intervalId);
    refs.input.removeAttribute('disabled',);
  }, initTime - Date.now());
  
  
})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function renderTime(time) {
  const diff = initTime - Date.now();
  const obj = convertMs(diff);
  console.log(obj);
  refs.daysEl.innerText = String(obj.days).padStart(2, '0');
  refs.hoursEl.innerText = String(obj.hours).padStart(2, '0');
  refs.minutesEl.innerText = String(obj.minutes).padStart(2, '0');
  refs.secondsEl.innerText = String(obj.seconds).padStart(2, '0');
}
      
      const flatpickrOptions = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          const userDate = selectedDates[0];
          initTime = userDate.getTime();
          if (initTime > Date.now()) {
            refs.startBtn.removeAttribute('disabled', '');
            refs.startBtn.classList.add('button-normal');
          } else {
            iziToast.show(iziToastOptions);
            refs.startBtn.classList.remove('button-normal');
            refs.startBtn.setAttribute('disabled', 'true');
          }
        },
      };
      const iziToastOptions = {
            position: 'topRight',
            title: 'Error',
            titleColor: '#fff',
            titleSize: '16',
            titleLineHeight: '24',
            message: "Please choose a date in the future",
            messageColor: '#fff',
            messageSize: '16',
            messageLineHeight: '24',
            progressBarColor: '#B51B1B',                   
            backgroundColor: '#EF4040',
            iconUrl: imageUrl,
            imageWidth: 24,
            
    };

flatpickr('#datetime-picker', flatpickrOptions);