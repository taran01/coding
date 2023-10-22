const dayjs = require('dayjs');
const timezone = require('dayjs/plugin/timezone');
const utc = require('dayjs/plugin/utc');
const MicroModal = require('micromodal');

MicroModal.init();
dayjs.extend(timezone);
dayjs.extend(utc);


function changeTimezone(event) {
    event.preventDefault();
    const timezoneName = document.querySelector('#select-timezone').value;
    if (timezoneName == '') {
        console.log('invalid timezone name');
        return;
    }

    const newTime = dayjs().tz(timezoneName);

    const tzName = timezoneName;
    const time = newTime.format('hh:mm');
    const tt = newTime.format('a');
    const date = newTime.format('dddd, MMM D, YYYY');

    document.querySelector('#timezone').innerHTML = `${tzName} <a data-micromodal-trigger="modal-1" onclick="MicroModal.show('modal-1');"><img src="edit.png" id="change-timezone"></a>`;
    document.querySelector('#time').innerHTML = `${time}<span id="tt">${tt}</span>`;
    document.querySelector('#date').innerText = date;
    MicroModal.close('modal-1');
}


document.addEventListener('DOMContentLoaded', () => {
    const timezone = dayjs.tz.guess();
    const time = dayjs().format('hh:mm');
    const tt = dayjs().format('a');
    const date = dayjs().format('dddd, MMM D, YYYY');

    document.querySelector('#timezone').innerHTML = `${timezone} <a data-micromodal-trigger="modal-1" onclick="MicroModal.show('modal-1');"><img src="edit.png" id="change-timezone"></a>`;
    document.querySelector('#time').innerHTML = `${time}<span id="tt">${tt}</span>`;
    document.querySelector('#date').innerText = date;
    document.querySelector('form').addEventListener('submit', changeTimezone);

    let timezones = Intl.supportedValuesOf('timeZone');

    const select = document.querySelector('#select-timezone');
    
    for (let i = 0; i < timezones.length; i++) {
        let opt = timezones[i];
        let element = document.createElement('option');
        element.value = opt;
        element.textContent = opt;
        select.appendChild(element);
    }
})
