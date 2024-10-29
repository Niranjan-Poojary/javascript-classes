projects
```javascript
project 01 color changer

const buttons =document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(button){
 button.addEventListener('click',function(e){
   if(e.target.id==='grey'){
     body.style.backgroundColor=e.target.id;
   }
   if(e.target.id==='white'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='blue'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='yellow'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='purple'){
    body.style.backgroundColor=e.target.id;
  }
 })
})

##project 2  solution

const form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results')

  if(height===' ' || height<0 || isNaN(height)){
    results.innerHTML = 'please give the height';
  }
  else if(weight===' ' || weight<0 || isNaN(weight)){
    results.innerHTML = 'please give the weight';
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
  //show the result
  results.innerHTML = `<span>${bmi}</span>`;
  }
})

## project 3 
## digital clock

const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  clock.innerHTML=date.toLocaleTimeString();
})