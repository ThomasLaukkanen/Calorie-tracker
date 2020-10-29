//Load body background color from localStorage
addEventListener('load', () => {
  document.querySelector('body').style.backgroundColor = localStorage.getItem('bgcolor')
})

//HAMBURGER MENU
let hamburger = document.querySelector(".hamburger");
let hamburgerContainer = document.querySelector('#hamburgerContainer')
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");

  if (document.getElementById("myNav").style.width === "100%") {
    hamburgerContainer.setAttribute('onclick', 'closeNav()')
  } else {
    hamburgerContainer.setAttribute('onclick', 'openNav()')
  }
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";

}

/* Close when someone clicks on the "x" symbol insi
de the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



//Variables
let searchResult = document.querySelector('#searchResult')
let searchBar = document.querySelector('#searchBar')
let searchButton = document.querySelector('#searchButton')
let searchForm = document.querySelector('#searchForm')
let chartContainer = document.querySelector('#chartContainer')

let searchLink
let element
let link
let protein
let carbs
let fat
let nutrients = [{
    attr_id: 203,
    name: "Protein",
    unit: "g"
  },
  {
    attr_id: 204,
    name: "Total lipid (fat)",
    unit: "g"
  },
  {
    attr_id: 205,
    name: "Carbohydrate, by difference",
    unit: "g"
  },
  {
    attr_id: 207,
    name: "Ash",
    unit: "g"
  },
  {
    attr_id: 208,
    name: "Energy",
    unit: "kcal"
  },
  {
    attr_id: 209,
    name: "Starch",
    unit: "g"
  },
  {
    attr_id: 210,
    name: "Sucrose",
    unit: "g"
  },
  {
    attr_id: 211,
    name: "Glucose (dextrose)",
    unit: "g"
  },
  {
    attr_id: 212,
    name: "Fructose",
    unit: "g"
  },
  {
    attr_id: 213,
    name: "Lactose",
    unit: "g"
  },
  {
    attr_id: 214,
    name: "Maltose",
    unit: "g"
  },
  {
    attr_id: 221,
    name: "Alcohol, ethyl",
    unit: "g"
  },
  {
    attr_id: 255,
    name: "Water",
    unit: "g"
  },
  {
    attr_id: 257,
    name: "Adjusted Protein",
    unit: "g"
  },
  {
    attr_id: 262,
    name: "Caffeine",
    unit: "mg"
  },
  {
    attr_id: 263,
    name: "Theobromine",
    unit: "mg"
  },
  {
    attr_id: 268,
    name: "Energy",
    unit: "kJ"
  },
  {
    attr_id: 269,
    name: "Sugars, total",
    unit: "g"
  },
  {
    attr_id: 287,
    name: "Galactose",
    unit: "g"
  },
  {
    attr_id: 291,
    name: "Fiber, total dietary",
    unit: "g"
  },
  {
    attr_id: 301,
    name: "Calcium, Ca",
    unit: "mg"
  },
  {
    attr_id: 303,
    name: "Iron, Fe",
    unit: "mg"
  },
  {
    attr_id: 304,
    name: "Magnesium, Mg",
    unit: "mg"
  },
  {
    attr_id: 305,
    name: "Phosphorus, P",
    unit: "mg"
  },
  {
    attr_id: 306,
    name: "Potassium, K",
    unit: "mg"
  },
  {
    attr_id: 307,
    name: "Sodium, Na",
    unit: "mg"
  },
  {
    attr_id: 309,
    name: "Zinc, Zn",
    unit: "mg"
  },
  {
    attr_id: 312,
    name: "Copper, Cu",
    unit: "mg"
  },
  {
    attr_id: 313,
    name: "Fluoride, F",
    unit: "Âµg"
  },
  {
    attr_id: 315,
    name: "Manganese, Mn",
    unit: "mg"
  },
  {
    attr_id: 317,
    name: "Selenium, Se",
    unit: "Âµg"
  },
  {
    attr_id: 318,
    name: "Vitamin A, IU",
    unit: "IU"
  },
  {
    attr_id: 319,
    name: "Retinol",
    unit: "Âµg"
  },
  {
    attr_id: 320,
    name: "Vitamin A, RAE",
    unit: "Âµg"
  },
  {
    attr_id: 321,
    name: "Carotene, beta",
    unit: "Âµg"
  },
  {
    attr_id: 322,
    name: "Carotene, alpha",
    unit: "Âµg"
  },
  {
    attr_id: 323,
    name: "Vitamin E (alpha-tocopherol)",
    unit: "mg"
  },
  {
    attr_id: 324,
    name: "Vitamin D",
    unit: "IU"
  },
  {
    attr_id: 325,
    name: "Vitamin D2 (ergocalciferol)",
    unit: "Âµg"
  },
  {
    attr_id: 326,
    name: "Vitamin D3 (cholecalciferol)",
    unit: "Âµg"
  },
  {
    attr_id: 328,
    name: "Vitamin D (D2 + D3)",
    unit: "Âµg"
  },
  {
    attr_id: 334,
    name: "Cryptoxanthin, beta",
    unit: "Âµg"
  },
  {
    attr_id: 337,
    name: "Lycopene",
    unit: "Âµg"
  },
  {
    attr_id: 338,
    name: "Lutein + zeaxanthin",
    unit: "Âµg"
  },
  {
    attr_id: 341,
    name: "Tocopherol, beta",
    unit: "mg"
  },
  {
    attr_id: 342,
    name: "Tocopherol, gamma",
    unit: "mg"
  },
  {
    attr_id: 343,
    name: "Tocopherol, delta",
    unit: "mg"
  },
  {
    attr_id: 344,
    name: "Tocotrienol, alpha",
    unit: "mg"
  },
  {
    attr_id: 345,
    name: "Tocotrienol, beta",
    unit: "mg"
  },
  {
    attr_id: 346,
    name: "Tocotrienol, gamma",
    unit: "mg"
  },
  {
    attr_id: 347,
    name: "Tocotrienol,delta",
    unit: "mg"
  },
  {
    attr_id: 401,
    name: "Vitamin C, total ascorbic acid",
    unit: "mg"
  },
  {
    attr_id: 404,
    name: "Thiamin",
    unit: "mg"
  },
  {
    attr_id: 405,
    name: "Riboflavin",
    unit: "mg"
  },
  {
    attr_id: 406,
    name: "Niacin",
    unit: "mg"
  },
  {
    attr_id: 410,
    name: "Pantothenic acid",
    unit: "mg"
  },
  {
    attr_id: 415,
    name: "Vitamin B-6",
    unit: "mg"
  },
  {
    attr_id: 417,
    name: "Folate, total",
    unit: "Âµg"
  },
  {
    attr_id: 418,
    name: "Vitamin B-12",
    unit: "Âµg"
  },
  {
    attr_id: 421,
    name: "Choline, total",
    unit: "mg"
  },
  {
    attr_id: 428,
    name: "Menaquinone-4",
    unit: "Âµg"
  },
  {
    attr_id: 429,
    name: "Dihydrophylloquinone",
    unit: "Âµg"
  },
  {
    attr_id: 430,
    name: "Vitamin K (phylloquinone)",
    unit: "Âµg"
  },
  {
    attr_id: 431,
    name: "Folic acid",
    unit: "Âµg"
  },
  {
    attr_id: 432,
    name: "Folate, food",
    unit: "Âµg"
  },
  {
    attr_id: 435,
    name: "Folate, DFE",
    unit: "Âµg"
  },
  {
    attr_id: 454,
    name: "Betaine",
    unit: "mg"
  },
  {
    attr_id: 501,
    name: "Tryptophan",
    unit: "g"
  },
  {
    attr_id: 502,
    name: "Threonine",
    unit: "g"
  },
  {
    attr_id: 503,
    name: "Isoleucine",
    unit: "g"
  },
  {
    attr_id: 504,
    name: "Leucine",
    unit: "g"
  },
  {
    attr_id: 505,
    name: "Lysine",
    unit: "g"
  },
  {
    attr_id: 506,
    name: "Methionine",
    unit: "g"
  },
  {
    attr_id: 507,
    name: "Cystine",
    unit: "g"
  },
  {
    attr_id: 508,
    name: "Phenylalanine",
    unit: "g"
  },
  {
    attr_id: 509,
    name: "Tyrosine",
    unit: "g"
  },
  {
    attr_id: 510,
    name: "Valine",
    unit: "g"
  },
  {
    attr_id: 511,
    name: "Arginine",
    unit: "g"
  },
  {
    attr_id: 512,
    name: "Histidine",
    unit: "g"
  },
  {
    attr_id: 513,
    name: "Alanine",
    unit: "g"
  },
  {
    attr_id: 514,
    name: "Aspartic acid",
    unit: "g"
  },
  {
    attr_id: 515,
    name: "Glutamic acid",
    unit: "g"
  },
  {
    attr_id: 516,
    name: "Glycine",
    unit: "g"
  },
  {
    attr_id: 517,
    name: "Proline",
    unit: "g"
  },
  {
    attr_id: 518,
    name: "Serine",
    unit: "g"
  },
  {
    attr_id: 521,
    name: "Hydroxyproline",
    unit: "g"
  },
  {
    attr_id: 539,
    name: "Sugars, added",
    unit: "g"
  },
  {
    attr_id: 573,
    name: "Vitamin E, added",
    unit: "mg"
  },
  {
    attr_id: 578,
    name: "Vitamin B-12, added",
    unit: "Âµg"
  },
  {
    attr_id: 601,
    name: "Cholesterol",
    unit: "mg"
  },
  {
    attr_id: 605,
    name: "Fatty acids, total trans",
    unit: "g"
  },
  {
    attr_id: 606,
    name: "Fatty acids, total saturated",
    unit: "g"
  },
  {
    attr_id: 607,
    name: "4:00",
    unit: "g"
  },
  {
    attr_id: 608,
    name: "6:00",
    unit: "g"
  },
  {
    attr_id: 609,
    name: "8:00",
    unit: "g"
  },
  {
    attr_id: 610,
    name: "10:00",
    unit: "g"
  },
  {
    attr_id: 611,
    name: "12:00",
    unit: "g"
  },
  {
    attr_id: 612,
    name: "14:00",
    unit: "g"
  },
  {
    attr_id: 613,
    name: "16:00",
    unit: "g"
  },
  {
    attr_id: 614,
    name: "18:00",
    unit: "g"
  },
  {
    attr_id: 615,
    name: "20:00",
    unit: "g"
  },
  {
    attr_id: 617,
    name: "18:1 undifferentiated",
    unit: "g"
  },
  {
    attr_id: 618,
    name: "18:2 undifferentiated",
    unit: "g"
  },
  {
    attr_id: 619,
    name: "18:3 undifferentiated",
    unit: "g"
  },
  {
    attr_id: 620,
    name: "20:4 undifferentiated",
    unit: "g"
  },
  {
    attr_id: 621,
    name: "22:6 n-3 (DHA)",
    unit: "g"
  },
  {
    attr_id: 624,
    name: "22:00",
    unit: "g"
  },
  {
    attr_id: 625,
    name: "14:01",
    unit: "g"
  },
  {
    attr_id: 626,
    name: "16:1 undifferentiated",
    unit: "g"
  },
  {
    attr_id: 627,
    name: "18:04",
    unit: "g"
  },
  {
    attr_id: 628,
    name: "20:01",
    unit: "g"
  },
  {
    attr_id: 629,
    name: "20:5 n-3 (EPA)",
    unit: "g"
  },
  {
    attr_id: 630,
    name: "22:1 undifferentiated",
    unit: "g"
  },
  {
    attr_id: 631,
    name: "22:5 n-3 (DPA)",
    unit: "g"
  },
  {
    attr_id: 636,
    name: "Phytosterols",
    unit: "mg"
  },
  {
    attr_id: 638,
    name: "Stigmasterol",
    unit: "mg"
  },
  {
    attr_id: 639,
    name: "Campesterol",
    unit: "mg"
  },
  {
    attr_id: 641,
    name: "Beta-sitosterol",
    unit: "mg"
  },
  {
    attr_id: 645,
    name: "Fatty acids, totl monounsaturated	",
    unit: "g"
  },
  {
    attr_id: 646,
    name: "Fatty acids, totl polyunsaturated	",
    unit: "g"
  },
  {
    attr_id: 652,
    name: "15:00",
    unit: "g"
  },
  {
    attr_id: 653,
    name: "17:00",
    unit: "g"
  },
  {
    attr_id: 654,
    name: "24:00:00",
    unit: "g"
  },
  {
    attr_id: 662,
    name: "16:1 t",
    unit: "g"
  },
  {
    attr_id: 663,
    name: "18:1 t",
    unit: "g"
  },
  {
    attr_id: 664,
    name: "22:1 t",
    unit: "g"
  },
  {
    attr_id: 665,
    name: "18:2 t not further defined",
    unit: "g"
  },
  {
    attr_id: 666,
    name: "18:2 i",
    unit: "g"
  },
  {
    attr_id: 669,
    name: "18:2 t,t",
    unit: "g"
  },
  {
    attr_id: 670,
    name: "18:2 CLAs",
    unit: "g"
  },
  {
    attr_id: 671,
    name: "24:1 c",
    unit: "g"
  },
  {
    attr_id: 672,
    name: "20:2 n-6 c,c",
    unit: "g"
  },
  {
    attr_id: 673,
    name: "16:1 c",
    unit: "g"
  },
  {
    attr_id: 674,
    name: "18:1 c",
    unit: "g"
  },
  {
    attr_id: 675,
    name: "18:2 n-6 c,c",
    unit: "g"
  },
  {
    attr_id: 676,
    name: "22:1 c",
    unit: "g"
  },
  {
    attr_id: 685,
    name: "18:3 n-6 c,c,c",
    unit: "g"
  },
  {
    attr_id: 687,
    name: "17:01",
    unit: "g"
  },
  {
    attr_id: 689,
    name: "20:3 undifferentiated",
    unit: "g"
  },
  {
    attr_id: 693,
    name: "Fatty acids, total trans-monoenoic",
    unit: "g"
  },
  {
    attr_id: 695,
    name: "Fatty acids, total trans-polyenoic",
    unit: "g"
  },
  {
    attr_id: 696,
    name: "13:00",
    unit: "g"
  },
  {
    attr_id: 697,
    name: "15:01",
    unit: "g"
  },
  {
    attr_id: 851,
    name: "18:3 n-3 c,c,c (ALA)",
    unit: "g"
  },
  {
    attr_id: 852,
    name: "20:3 n-3	",
    unit: "g"
  },
  {
    attr_id: 853,
    name: "20:3 n-6",
    unit: "g"
  },
  {
    attr_id: 855,
    name: "20:4 n-6",
    unit: "g"
  },
  {
    attr_id: 856,
    name: "18:3i",
    unit: "g"
  },
  {
    attr_id: 857,
    name: "21:05",
    unit: "g"
  },
  {
    attr_id: 858,
    name: "22:04",
    unit: "g"
  },
  {
    attr_id: 859,
    name: "18:1-11t (18:1t n-7)",
    unit: "g"
  }
]
let nutrient

// EVENTLISTENER FOR BUTTON
searchForm.addEventListener('submit', () => {

  //Check if searchbar is empty
  if (searchBar.value === "") {
    //Show warning
    document.querySelector('#warning').classList.remove('hide')
  } else {
    // document.getElementsByClassName('.la-ball-triangle-path').classList.remove('hide')

    document.querySelector('#searchFood').classList.remove('bigger')
    searchLink = "https://trackapi.nutritionix.com/v2/search/instant?query=" + searchBar.value
    //hide warning
    document.querySelector('#warning').classList.add('hide')
    //remove icecream
    document.querySelector('#mainPage').style.backgroundImage = 'none'
    //Show searchResult section
    searchResult.classList.remove('hide')
    //Show paragraph
    document.querySelector('#searchResultInfo').classList.remove('hide')
    searchResult.textContent = ''
    let chart = document.querySelector('#myChart')
    //remove chart Pie everytime button is pressed
    if (chartContainer.childElementCount > 2) {
      chartContainer.removeChild(document.querySelector('#myChart'))
    }
    let tableOther = document.querySelector("#tableOther")
    //remove Other nutrients
    if (tableOther.contains(document.querySelector('#tableOther tr'))) {

      while (tableOther.children.length > 1) {
        tableOther.removeChild(tableOther.lastElementChild)
      }

    }


    //NUTRIONIX Search for objects
    fetch(searchLink, {
        headers: {
          'Content-Type': 'application/json',
          'x-app-id': 'b7350e28',
          'x-app-key': 'a9872f0652059dabb8e8588e1258f45b',
          'x-remote-user-id': '0'
        },
        method: 'get'
      })
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        // CREATE THE SEARCH RESULT in as a list
        for (let i = 0; i < result.common.length; i++) {
          element = document.createElement('li')
          link = document.createElement('a')
          link.setAttribute('href', '#tableMacros')
          link.setAttribute('class', 'searchLinks')
          searchResult.appendChild(element)
          element.appendChild(link)
          link.innerHTML = result.common[i].food_name + " " + "<span id=\"grey\">" +
            result.common[i].serving_qty + " " + result.common[i].serving_unit + "</span>" + "<img src=\"" + result.common[i].photo.thumb + "\">"
        }

        //EVENT LISTENER FOR LI
        let searchResultChilds = searchResult.children
        for (let i = 0; i < searchResultChilds.length; i++) {
          searchResultChilds[i].addEventListener('click', (event) => {

            if (event.originalTarget
              .classList.contains("searchLinks")) {

              document.querySelector('#tableMacros').classList.remove('hide')
              document.querySelector('#tableNut').classList.remove('hide')
              document.querySelector('#tableOther').classList.remove('hide')
              document.querySelector('#searchResultInfo').classList.add('hide')
              searchResult.textContent = ''
              searchResult.classList.add('hide')
              document.querySelector('#searchFood > p').classList.add('hide')

              let searchObjekt = event.originalTarget.childNodes[0].textContent
              // SEARCH MOORE MACROS
              fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
                  body: `{"query":"${searchObjekt}"}`,
                  headers: {
                    'Content-Type': 'application/json',
                    'x-app-id': 'b7350e28',
                    'x-app-key': 'a9872f0652059dabb8e8588e1258f45b',
                    'x-remote-user-id': '0'
                  },
                  method: 'post'
                })
                .then(response => response.json())
                .then(result => {

                  console.log(result)
                  // CHANGE INFO ON TABLES
                  document.querySelector('#infoWeigthName').textContent = result.foods[0].food_name

                  document.querySelector('#infoWeigthQ').textContent = result.foods[0].serving_qty + " " + result.foods[0].serving_unit

                  protein = result.foods[0].nf_protein
                  document.querySelector('#infoWeigthP').textContent = protein + 'g'

                  carbs = result.foods[0].nf_total_carbohydrate
                  document.querySelector('#infoWeigthC').textContent = carbs + 'g'

                  fat = result.foods[0].nf_total_fat
                  document.querySelector('#infoWeigthF').textContent = fat + 'g'

                  document.querySelector('#infoWeigthK').textContent = result.foods[0].nf_calories + 'kcal'
                  console.log(result.foods[0])

                  document.querySelector('#cholesterolAmount').textContent = result.foods[0].nf_cholesterol + 'mg'

                  document.querySelector('#saturatedFatAmount').textContent = result.foods[0].nf_saturated_fat + 'g'

                  document.querySelector('#sodiumAmount').textContent = result.foods[0].nf_sodium + 'mg'

                  document.querySelector('#sugarsAmount').textContent = result.foods[0].nf_sugars + 'g'

                  document.querySelector('#potassiumAmount').textContent = result.foods[0].nf_potassium + 'mg'

                  document.querySelector('#fiberAmount').textContent = result.foods[0].nf_dietary_fiber + 'g'

                  // LOOP FOR ALL THE OTHER NUTRIENTS
                  for (let n = 0; n < result.foods[0].full_nutrients.length; n++) {
                    for (let s = 0; s < nutrients.length; s++) {

                      if (result.foods[0].full_nutrients[n].attr_id === nutrients[s].attr_id) {

                        nutrient = nutrients.find(nutrient => nutrient.attr_id === result.foods[0].full_nutrients[n].attr_id)
                        // console.log(nutrient.name, result.foods[0].full_nutrients[n].value, nutrient.unit)

                      }
                    }
                    //New rows for other nutrients 
                    let tableRow = document.createElement('tr')
                    document.querySelector('#tableOther').appendChild(tableRow)
                    tableRow.setAttribute('class', 'OtherNutrients')
                    let tableData1 = document.createElement('td')
                    let tableData2 = document.createElement('td')
                    tableData1.setAttribute('class', 'focus-in-expand')
                    tableData2.setAttribute('class', 'focus-in-expand')
                    tableData1.textContent = nutrient.name
                    tableData2.textContent = result.foods[0].full_nutrients[n].value + " " + nutrient.unit
                    tableRow.appendChild(tableData1)
                    tableRow.appendChild(tableData2)
                  }

                  //CREATE CANVAS AFTER LINK IS CLICKED
                  let chartCanvas = document.createElement('canvas')
                  chartCanvas.setAttribute('id', 'myChart')
                  //create table for macros
                  let table = document.querySelector('#tableMacros')


                  // document.querySelector('main').insertBefore(chartCanvas, table)
                  document.querySelector('#chartContainer').appendChild(chartCanvas)

                  // Chart
                  var ctx = document.getElementById('myChart').getContext('2d');
                  var chart = new Chart(ctx, {
                    // The type of chart we want to create
                    type: 'pie',

                    // The data for our dataset
                    data: {
                      labels: ['Protein', 'Carbrohydrates', 'Fat', ],
                      datasets: [{
                        label: 'Macros',
                        backgroundColor: ['#EF3054', '#256EFF', '#FFC857'],
                        borderColor: 'rgba(0,0,0,0)',
                        data: [protein, carbs, fat]
                      }]
                    },
                    // Configuration options go here
                    options: {}
                  });
                })
            }

          })
        }
        //SLUTAR

      })
  }
})



window.setInterval(function () {
  document.querySelector('#random').style.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
}, 2000);