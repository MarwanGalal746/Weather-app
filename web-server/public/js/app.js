
console.log('Client side javascript fileis loaded ..');

const weatherForm = document.querySelector('form');

const search = document.querySelector('input');

const message = document.querySelector('#message')


weatherForm.addEventListener('submit', (e) => { 
    e.preventDefault();
    const location = search.value;
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error)
                message.textContent=data.error;
            else {
                message.textContent=data.response;
            }

        })
    })
})

