const dogAPI = 'https://dog.ceo/api/breeds/image/random';
let imageDiv = document.querySelector('#showImage');
let showBtn = document.querySelector('#show');
let list = document.querySelector('#list');

showBtn.addEventListener('click', fetchDog);

function fetchDog() {
    fetch(dogAPI)
        .then(response => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw new Error('There was an error in the request');
            }
        })
        .then(data => {
            let listItems = document.createElement('li');
            list.appendChild(listItems);
            let images = document.createElement('img');
            listItems.appendChild(images);
            images.src = `${data.message}`;
        })
        .catch(error => console.log(error));
}