const HUMOUR_API = `https://xkcd.now.sh/?comic=latest`;
const imgDiv = document.querySelector('#imageContainer');

const fetchImage = () => {
    fetch(HUMOUR_API)
        .then(response => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw new Error('OOOPS An Error has occurred in your request');
            }
        })
        .then(data => {
            for(const [key, values] of Object.entries(data)) {
                console.log(`${key}: ${values}`);
            }
            let imgTag = document.createElement('img');
            imgDiv.appendChild(imgTag);
            imgTag.src = `${data.img}`;
        })
        .catch(error => console.log(error));
}
fetchImage();