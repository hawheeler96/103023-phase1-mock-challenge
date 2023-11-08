// your code here
//global consts, etc
const API = 'http://localhost:3000/cakes'
const cakeList = document.getElementById('cake-list')
document.getElementById('review-form').addEventListener('submit', addReview)

fetch(API)
.then(res => res.json())
.then(cakes => {
    renderCakes(cakes)
    addCakeInfo(cakes[0])
})

function renderCakes(cakes) {
    cakes.forEach(renderSideBar)
    cakes.forEach(addCakeInfo)
}

function renderSideBar(cakes) {
    const newCake = document.createElement('li')
    newCake.innerHTML = `
    <li>${cakes.name}<li>
    `
    cakeList.append(newCake)
    //newCake.addEventListener('click', handleClick)
}

function addCakeInfo(cakes) {
    let cakeName = document.getElementById('cake-name');
        cakeName.innerHTML = `<h2>${cakes.name}</h2>`
    let cakeImage = document.getElementById('cake-image');
        cakeImage.src = cakes.image_url
    let cakeDescription = document.getElementById('cake-description')
        cakeDescription.innerHTML = `<em>${cakes.description}</em>`
    let reviewlist = document.getElementById('review-list')
    let customerReviews = document.createElement('li')
        customerReviews.innerHTML = `<li>${cakes.reviews}</li>`
    reviewlist.appendChild(customerReviews);
}

function addReview(e){
    e.preventDefault()
    const newReview = e.target.review.value;
    let reviewlist = document.getElementById('review-list')
    let addNewReview = document.createElement('li')
        addNewReview.innerHTML = `<li>${newReview}</li>`
    fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({newReview})
    })
    .then(res => res.json())
    .then(reviewlist.append(addNewReview))
}



// function handleClick(e) {
//     e.preventDefault

// }