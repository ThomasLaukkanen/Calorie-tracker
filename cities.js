let tableData = function () {
  fetch('https://avancera.app/cities/')
    .then(response => response.json())
    .then(result => {
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        // Row 1
        let elementRow1 = document.createElement('tr')
        let element1 = document.createElement('td')
        element1.textContent = result[i].name
        document.querySelector('#citiesTable').appendChild(elementRow1)
        elementRow1.appendChild(element1)
        // Row 2
        let element2 = document.createElement('td')
        element2.textContent = result[i].population
        document.querySelector(`#citiesTable > tr:nth-child(${(i + 2)})`).appendChild(element2)
        // Row 3
        let element3 = document.createElement('td')
        element3.textContent = result[i].id
        document.querySelector(`#citiesTable > tr:nth-child(${(i + 2)})`).appendChild(element3)
      }
    })
}
//RUN IT
tableData()




// Variables


let msg
let input = document.querySelectorAll('#controls')
let linken = 'https://avancera.app/cities/'
let inputCity = document.querySelector('#inputCity').value
let inputPop = document.querySelector('#inputPop').value
let inputId = document.querySelector('#inputId').value

/*
//BUTTON EVENTS
input.addEventListener('submit', event => {

  inputCity = document.querySelector('#inputCity').value
  inputPop = document.querySelector('#inputPop').value
  inputId = document.querySelector('#inputId').value
  console.log(event.target.id)

  if (event.target.id === 'buttonPut') {
    msg = 'PUT'
    linken += inputId
  } else if (event.target.id === 'buttonDel') {
    msg = 'DELETE'
    linken += inputId
  } else if (event.target.id === 'buttonPost') {
    msg = 'POST'
    linken = 'https://avancera.app/cities/'
  }

  fetch(linken, {
      body: JSON.stringify({
        name: inputCity,
        population: inputPop
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: msg
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      document.querySelector('#inputCity').value = ""
      document.querySelector('#inputPop').value = ""
      document.querySelector('#inputId').value = ""
      linken = 'https://avancera.app/cities/'
      location.reload()
    })
})

*/

//POST

document.querySelector('#buttonPost').addEventListener('click', event => {

  inputCity = document.querySelector('#inputCity').value
  inputPop = document.querySelector('#inputPop').value
  inputId = document.querySelector('#inputId').value
  console.log(event.target.id)



  fetch('https://avancera.app/cities/', {
      body: JSON.stringify({
        name: inputCity,
        population: inputPop
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      document.querySelector('#inputCity').value = ""
      document.querySelector('#inputPop').value = ""
      document.querySelector('#inputId').value = ""
      linken = 'https://avancera.app/cities/'
      location.reload()
    })
})



//PUT
document.querySelector('#buttonPut').addEventListener('click', event => {
  inputCity = document.querySelector('#inputCity').value
  inputPop = document.querySelector('#inputPop').value
  inputId = document.querySelector('#inputId').value
  console.log(event.target.id)

  if (event.target.id === 'buttonPut') {
    msg = 'PUT'
    linken += inputId
  }


  fetch(linken, {
      body: JSON.stringify({
        name: inputCity,
        population: inputPop
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: msg
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      document.querySelector('#inputCity').value = ""
      document.querySelector('#inputPop').value = ""
      document.querySelector('#inputId').value = ""
      linken = 'https://avancera.app/cities/'
      location.reload()
    })
})



//DELETE
document.querySelector('#buttonDel').addEventListener('click', event => {
  inputId = document.querySelector('#inputId').value

  console.log(event.target.id)
  linken = linken + inputId
  fetch(linken, {
      method: 'DELETE'
    })
    .then(response => {
      console.log(response)
      console.log('deleted', linken)
      document.querySelector('#inputCity').value = ""
      document.querySelector('#inputPop').value = ""
      document.querySelector('#inputId').value = ""
      linken = 'https://avancera.app/cities/'
      location.reload()
    })
})