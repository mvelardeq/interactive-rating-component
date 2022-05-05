const ratingNumbers = document.querySelectorAll('.star')
const removeActiveRatings = ()=>{
    ratingNumbers.forEach(ratingNumber=>{
        ratingNumber.classList.remove('active')
    })
}

ratingNumbers.forEach(ratingNumber=>{
    ratingNumber.addEventListener('click',e=>{
        removeActiveRatings()
        e.target.classList.add('active')
    })
})
const submit =document.querySelector('button.btn')
const ratingCard = document.querySelector('.rating-card')
const thankCard = document.querySelector('.thank-card')
const thankComment =document.querySelector('.thank-comment')
const form =document.querySelector('form')

form.addEventListener('submit',e=>{
    e.preventDefault()
    let data = new FormData(form)
    let stars=data.get('rating')
    ratingCard.classList.toggle('none')
    thankComment.innerHTML=`
        <h3>You selected ${stars} out of 5 </h3>
    `
    thankCard.classList.toggle('active-card')
})
