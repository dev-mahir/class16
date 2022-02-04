// Modal with custom alert 

const edit = document.querySelector('.edit');
const modal_open = document.querySelector('.modal-container');
const modal = document.querySelector('.mk-modal');
const modal_close = document.querySelector('.modal-close');
const save = document.querySelector('.save');
const alert_open = document.querySelector('.alert-container');
const alert = document.querySelector('.mk-alert');
const discart = document.querySelector('.discart');
const editing = document.querySelector('.editing');
const alert_close = document.querySelector('.alert-close');



edit.addEventListener('click',function(){
    modal_open.classList.add('active');
    modal.style.transform = 'scale(1)'
    
});
modal_open.addEventListener('click',function(e){
    if( e.target == this){
        modal_open.classList.remove('active');
        modal.style.transform = 'scale(1)'
    }
});

modal_close.addEventListener('click',function(){
    alert_open.classList.add('active');
    alert.style.transform = 'scale(1)'
});
save.addEventListener('click',function(){
    modal_open.classList.remove('active');
});
editing.addEventListener('click',function(){
    alert_open.classList.remove('active');
    alert.style.transform = 'scale(1)'
});

alert_close.addEventListener('click',function(){
    alert_open.classList.remove('active');
});
discart.addEventListener('click',function(){
    alert_open.classList.remove('active');
    modal_open.classList.remove('active');
});






 

const acc_btns = document.querySelectorAll('.accordion-head');
const acc_contents = document.querySelectorAll('.accordion-body');


acc_btns.forEach( btn =>{
  btn.addEventListener('click', function(){
    if( btn.classList.contains('active')){
      btn.classList.remove('active');
    }else{
      acc_btns.forEach( btn =>{
        if( btn.classList.contains('active')){
          btn.classList.remove('active');
        }
      });

      btn.classList.add('active');
    }
  });
});