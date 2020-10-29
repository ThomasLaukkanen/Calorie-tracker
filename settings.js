addEventListener('load', () => {
  document.querySelector('#bgcolor').setAttribute('placeholder', localStorage.getItem('bgcolor'))
  document.querySelector('body').style.backgroundColor = localStorage.getItem('bgcolor')
})

document.querySelector("#bgcolor").addEventListener('input', event => {
  console.log(event.target.value)
  localStorage.setItem('bgcolor', event.target.value)

  document.querySelector('body').style.backgroundColor = localStorage.getItem('bgcolor')
  document.querySelector('#bgcolor').setAttribute('value', localStorage.getItem('bgcolor'))
  document.querySelector('#bgcolor').setAttribute('placeholder', localStorage.getItem('bgcolor'))

})

var colorPicker = new iro.ColorPicker("#picker", {
  // Set the size of the color picker
  width: 220,
  // Set the initial color to color from localstorage
  color: localStorage.getItem('bgcolor')
});

// listen to a color picker's color:change event
// color:change callbacks receive the current color
colorPicker.on('color:change', function (color) {
  document.querySelector('body').style.backgroundColor = color.hexString
  localStorage.setItem('bgcolor', color.hexString)
  document.querySelector('#bgcolor').setAttribute('value', localStorage.getItem('bgcolor'))
  document.querySelector('#bgcolor').setAttribute('placeholder', localStorage.getItem('bgcolor'))
});

document.querySelector('#reset').addEventListener('click', () => {

  document.querySelector('body').style.backgroundColor = '#fff'
  localStorage.setItem('bgcolor', '#fff')
  document.querySelector('#bgcolor').setAttribute('value', localStorage.getItem('bgcolor'))
  document.querySelector('#bgcolor').setAttribute('placeholder', localStorage.getItem('bgcolor'))
})