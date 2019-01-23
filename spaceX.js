
let url;

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e){
    e.preventDefault();
    
    let baseURL = 'https://api.spacexdata.com/v3/rockets'
    
    let search = document.querySelector('input').value;
    
    if(search !== '') {
        if(search === 'falcon 1'){
            baseURL += "/falcon1";
        } else if(search === 'falcon 9'){
            baseURL += '/falcon9'
        } else if(search === 'falcon heavy'){
            baseURL += '/falconheavy'
        } else if(search === 'bfr'){
            baseURL += '/bfr'
        } else {
            console.log('empty')
        }
    }  
    fetch(baseURL).then(result => {
        return result.json()
    })
    .then(json => {
        console.log(json);
        displayRockets(json)
    })
}

function displayRockets(json){
    while (spaceShips.firstChild) {
        spaceShips.removeChild(spaceShips.firstChild);
    } 



if(Array.isArray(json) === true){
    json.forEach(search => {
        console.log(search);
        returnInfo(search);
    });
} else {
    returnInfo(json)
}

    function returnInfo(json){
        let i = document.createElement("ul")
        let r = document.createElement('p')
        let e = document.createElement('img')
        i.innerText = json.rocket_name
        r.innerText = json.description
        e.innerText = json.flickr_images
        searchForm.appendChild(i)
        searchForm.appendChild(r)
        searchForm.appendChild(e)
    }


}
