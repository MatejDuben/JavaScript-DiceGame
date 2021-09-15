let lb = document.querySelector('.lb')
let rules = document.querySelector('.rules__wrapper')
document.querySelector('.open-info__wrapper').addEventListener('click',()=>{

  lb.classList.add('active')
  rules.classList.add('active')
  setTimeout(()=>{
    rules.classList.add('visual')
  }, 100)

})

lb.addEventListener('click',()=>{
  if(lb.classList.contains('active')){
    lb.classList.remove('active')

    rules.classList.remove('visual')
    setTimeout(()=>{
      rules.classList.remove('active')
    },100)
  }
})