# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hpla priya")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```
## project 2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //upto 2 decimals
    //show the result
    if(bmi<18.6)
    {
      results.innerHTML = `<span>${bmi}</span> <br> 'Under weight'`;
    }
    else if(bmi<=24.9)
    {
      results.innerHTML = `<span>${bmi}</span> <br> 'Normal weight'`;
    }
    else
    {
      results.innerHTML = `<span>${bmi}</span> <br> 'Over weight'`;
    }
  }
});
```
## project 3

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

Javascript is a sequential running program. Event propogation in events runs the event in a bubble up fashion suppose if you have ul list inside and a owl image inside it. You provide  same click events for ul and owl images the owl event will exceute first then ul event.
If you pass the third parameter of the addEventListener as true then capturing mode will be activated where the ul event executes first and then the owl event, by default the third paramater of addEventLIstener is false. alse the eventname.stopPropogation() also helps to stop the process of bubbling up. 