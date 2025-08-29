let key ="13d30eed4dee42db84a95611250907"
city = "london"
async function getdata(){
  let elem = document.getElementById("rel")
  let city = elem.value

  let api =  `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7`
   let  res = await axios.get(api);
  let data = res.data;
         console.log(data);
         current_details(data)
         forecast(data.forecast.forecastday[0].hour)
         sevenforecast(data.forecast.forecastday)   
         mor_aft_evn(data.forecast.forecastday[0].hour)
         Air_conditions_fun(data)
        elem.value="";
}
getdata()

function current_details(data){

  let emem1 = document.getElementById("currentdetailsid")
  emem1.innerHTML = `
      <div>
          <h1>${data.location.name}</h1>
          <h4>${data.current.condition.text}</h4>
          <h1>${data.current.temp_c}<sup>0</sup></h1>
      </div>
     <div>
        <img src=${data.current.condition.icon}  width="100px" height="100px" class="image">

      </div>`
}
function forecast(data){
  let elem2 = document.getElementById("forecastid")
 let colm = "";
 
  
for (let ind in data){
  let time = ind>12?ind-12:ind;
   if (ind == 6 || ind == 9 || ind == 12 || ind == 15 || ind == 18 || ind == 21){
  
   colm += `
          <div class ="card1 space1 white" >
            <h4>${time}:00${ind>=12?"AM":"PM"}</h4>
            <img src="${data[ind].condition.icon}" height="40px" width="40px" style="padding: 0px;" >
            <h4 style="padding: 0px;">${data[ind].temp_c}<sup>0</sup>C</h4>
          </div>`
    }
  }
elem2.classList.add("card1"); 
elem2.innerHTML = colm;

}

function sevenforecast(data){
elem3 = document.getElementById('sevendaysforecast')
trs = ""
  for (let ind in data)
  {
    trs +=`
           
          <tr class = "table sevencolor">
              <td class = "padding1">${data[ind].date}</td>
              <td class = "padding1">
               <img src = "${data[ind].day.condition.icon}">
              </td>
              <td>
                <h3 class = "padding1">${data[ind].day.condition.text}</h3>
              </td>
              <td class = "padding_2">${data[ind].day.avgtemp_c}</td>
          </tr>`
  }
  let table = `
  <table border = "1px" class = "card2 space white"> 
      ${trs}
  </table> 
  `
  elem3.innerHTML = table;
}
function mor_aft_evn(data){
   elem4 = document.getElementById("mor_aft_evn_id")
   elem4.innerHTML = `
   <div  class="row top1 white">
        <div class = "mor_aft_evn col-4 ">
          <h1 class = "text-center">MORNING</h1>
          <div  class = "mor_aft_evn1">
             <img src = "https://img.freepik.com/premium-vector/vector-isolated-weather-app-icon-with-snow-cloud-interface-elements-flat-design-web_1071100-327.jpg" width = "170px" height = "120px" class = "img">
             <h3 class = "temp">${data[6].temp_c}<sup>0</sup>C</h3>
          </div>
      </div>
       <div class = "mor_aft_evn col-3 white">
          <h1 class = "text-center">AFFTERNOON</h1>
          <div  class = "mor_aft_evn1">
             <img src = "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/91/38/f3/9138f3df-6bc4-08d8-e716-618267ceb3ca/AppIcon-0-0-1x_U007epad-0-1-sRGB-85-220.jpeg/512x512bb.jpg" width = "170px" height = "120px" class = "img">
             <h3 class = "temp">${data[6].temp_c}<sup>0</sup>C</h3>
          </div>
      </div>
      <div class = "mor_aft_evn col-4 white">
          <h1 class = "text-center">EVENING</h1>
          <div  class = "mor_aft_evn1">
             <img src = "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/91/38/f3/9138f3df-6bc4-08d8-e716-618267ceb3ca/AppIcon-0-0-1x_U007epad-0-1-sRGB-85-220.jpeg/512x512bb.jpg" width = "170px" height = "120px" class = "img">
             <h3 class = "temp">${data[6].temp_c}<sup>0</sup>C</h3>
          </div>
      </div>
   <div>
`
}

function Air_conditions_fun(data) {
  let elem4 = document.getElementById("Air_conditions")
elem4.innerHTML = `
    
      
      <div class ="bottom mor_aft_evn white">
         <h1 class = "text-center">${data.location.name}</h1>
          
          <div class = "mor_aft_evn2">
              <h4 class = "wind">Wind Speed: ${data.current.wind_kph}km/h</h4>
              <h4 class = "wind">Chance of Rain: ${data.forecast.forecastday[0].day.daily_chance_of_rain}</h4>
              <h4 class = "wind">UV Index: ${data.forecast.forecastday[0].day.uv}</h4>
              <h4 class ="temp">Max Temp: ${data.forecast.forecastday[0].day.maxtemp_c}</h4>
              <img src = "https://img.freepik.com/premium-vector/weather-forecast-icon-sun-rain-clouds_739746-67.jpg" width = "150px" height = "90px" class = "image_last">
          </div>
          
      </div>`

}
  





