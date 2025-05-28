// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.tooltipped');
//     var instances = M.Tooltip.init(elems, {});
//   });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems,);
});


const togglemenu = document.getElementById('toggle-menu')
togglemenu.addEventListener('click',()=>{
document.querySelector('.menu-mobile').classList.add('plin')
document.querySelector('.add-user-back').classList.remove('dis-none')
})
document.querySelector('.add-user-back').addEventListener('click',()=>{
  document.querySelector('.menu-mobile').classList.remove('plin')
  document.querySelector('.add-user-back').classList.add('dis-none')
})
document.querySelector('.account-btn').addEventListener('click',()=>{
  document.querySelector('.menu-mobile').classList.remove('plin')
  document.querySelector('.add-user-back').classList.add('dis-none')
})


const skil = document.getElementById('skil')
skil.addEventListener('click',function(){
  document.querySelector('.tool').classList.remove('dis-none')
  document.querySelector('.skill').classList.add('dis-none')
  })
  const tooll = document.getElementById('tooll')
  tooll.addEventListener('click',function(){
    document.querySelector('.rounded_pill').classList.remove('white')
    // document.querySelector('.rounded_pill').classList.add('blue')
  document.querySelector('.tool').classList.add('dis-none')
  document.querySelector('.skill').classList.remove('dis-none')
  })
  


const EN = document.getElementById('En')
EN.addEventListener('click',function(){
  document.querySelector('.show').classList.add('dis-none')
  document.querySelector('.shab').classList.add('dis-none')
  document.querySelector('.day').classList.remove('dis-none')
  document.querySelector('.shab1').classList.add('dis-none')
  document.querySelector('.day1').classList.remove('dis-none')
  document.querySelector('.show1').classList.remove('dis-none')
  document.querySelector('.Eng').classList.add('dis-none')
  document.querySelector('.Far').classList.remove('dis-none')
  })
  const FA = document.getElementById('Fa')
FA.addEventListener('click',function(){

  document.querySelector('.show').classList.remove('dis-none')
  document.querySelector('.show1').classList.add('dis-none')
  document.querySelector('.shab').classList.remove('dis-none')
  document.querySelector('.day').classList.add('dis-none')
  document.querySelector('.shab1').classList.remove('dis-none')
  document.querySelector('.day1').classList.add('dis-none')
  document.querySelector('.Eng').classList.remove('dis-none')
  document.querySelector('.Far').classList.add('dis-none')
  })

  const night = document.getElementById('night')
  night.addEventListener('click',function(){
document.querySelector('.add-user').classList.add('wide')
document.querySelector('.bg').classList.add('bggray')
document.querySelector('.bgwhite').classList.remove('white')
// document.querySelector('.bgwhite').classList.remove('white-text')
document.querySelector('.ligh').classList.remove('dis-none')
document.querySelector('.nigh').classList.add('dis-none')
document.querySelector('.txtlight').classList.add('dis-none')
document.querySelector('.txtdark').classList.remove('dis-none')
})

const light = document.getElementById('light')
light.addEventListener('click',function(){
  document.querySelector('.bgwhite').classList.add('white')
  // document.querySelector('.bgwhite').classList.add('black-text')
document.querySelector('.add-user').classList.remove('wide')
document.querySelector('.ligh').classList.add('dis-none')
document.querySelector('.nigh').classList.remove('dis-none')
document.querySelector('.txtlight').classList.remove('dis-none')
document.querySelector('.txtdark').classList.add('dis-none')
})

// const open = document.getElementById('open')
// open.addEventListener('click',function(){
// document.querySelector('.add-user').classList.add('wide')
// })



