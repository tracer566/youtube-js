if(document.documentElement.clientWidth < 440){
  const searchBtn = document.querySelector('#mobile-search')
const mobileSearch = document.querySelector('.input-group')
const btn = document.querySelector('.button-search')
const logo = document.querySelector('.logo')
searchBtn.addEventListener('click',() => {
  mobileSearch.classList.add('is-open')
  searchBtn.style.display = 'none'
  logo.style.display = 'none'
})

btn.addEventListener('click',function(){
  mobileSearch.classList.remove('is-open')
  searchBtn.style.display = 'inline-block'
  logo.style.display = 'block'
})
}


