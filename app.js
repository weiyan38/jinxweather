const getform = document.getElementById('form');
const getsearch = document.getElementById('search');
const getfirstphoto = document.getElementById('firstphoto');
const getcity = document.querySelector('.city');
const getdayname = document.querySelector('.dayname');
const gettempdata = document.querySelector('.tempdata');
const getdesdata = document.querySelector('.desdata');
const gethumidity = document.querySelector('.humadata');
const getpredata = document.querySelector('.predata');
const getwinddata = document.querySelector('.winddata');
const getforecast = document.querySelector('.forecast');



const key = "a7e986bc531e80c61a4e2c8b1b4c82f5";

let weatherurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}`;
let forecasturl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${key}`;


getform.addEventListener('submit', function (e) {
    e.preventDefault();

    const getsearchval = getsearch.value;

    weatherbycity(getsearchval);


    getsearch.focus();
    getsearch.value = '';
});


let getweatherbycityname = async function (city) {
    let url = `${weatherurl}&q=${city}`;

    let response = await fetch(url);

    if (response.status !== 200) {
        alert("Something wrong !");
        return;
    }

    let data = await response.json();

    return data;

};



let weatherbycity = async (city) => {

    let response = await getweatherbycityname(city);

    getweathertodom(response);

    const cityid = response.id;

    let fivedayforecasts = await getforecastbycityid(cityid);
    getforecasttodom(fivedayforecasts);
}

let dayofweek = (timestamp = new Date().getTime())=>{
    // return new Date(timestamp).toLocaleDateString('en-EN',{'weekday':'long'});
    return new Date(timestamp).toLocaleDateString('en-EN',{'weekday':'long'});
}

let getweathertodom = (data) => {

    getfirstphoto.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    getcity.textContent = `${data.name} - ${data.sys.country}`;
    getdayname.textContent = dayofweek();
    // gettempdata.textContent = data.main.temp > 0 ? `${data.main.temp}` : `-${data.main.temp}`;
    gettempdata.textContent = data.main.temp;
    gethumidity.textContent = `${data.main.humidity}`;
    getpredata.textContent = `${data.main.pressure}`;
    getwinddata.textContent = `${data.wind.speed}`;
    getdesdata.textContent = `${data.weather[0].description}`;
}


let getforecastbycityid = async function (id) {
    let url = `${forecasturl}&id=${id}`;

    let response = await fetch(url);

    let data = await response.json();

    let forecastlists = data.list;

    let comingdatas = [];

    forecastlists.forEach(function (forecastlist) {
        let date = new Date(forecastlist.dt_txt);

        let hours = date.getHours();

        if (hours === 12) {
            comingdatas.push(forecastlist);
        }
    });

    return comingdatas;
};



let getforecasttodom = (forecasts) => {
    getforecast.innerHTML = '';

    forecasts.forEach(forecast => {
        
        let temperature = forecast.main.temp;

        let daynames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let getday = new Date(forecast.dt_txt).getDay();     

        let html = `
            <div class="w-full sm:w-1/2 lg:w-1/5 p-1 text-center border border-dotted">
                <p class="text-xs otherday">${daynames[getday]}</p>
                <div class="flex justify-center items-center">
                    <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="">
                </div>
                <p class="text-xs"><span class="othertempdata">${temperature}</span> <span class="">&deg;C</span></p>
            </div>
        `;

        getforecast.insertAdjacentHTML("beforeend",html);
    });

    

}




weatherbycity('yangon');







