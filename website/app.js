/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Medellín&appid=37f3924be7cf8785e01bd90fe67c2e51';
const apiKey = '37f3924be7cf8785e01bd90fe67c2e51&units=metric'


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Event listener when clicking 'generate'
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    // Verify zipcode
    const zipCode =  document.getElementById('zip').value;

    // Get the getWeatherData
    getWeatherData(baseURL, zipCode, apiKey)
    .then(function(data) {
        postData('/body', {temp:data.main.temp, date:newDate, content:data})
        .then(updateUI())
    })
};


// Function to post data
const postData = async(url = '', data = {}) => {
    const response = await fetch (url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),         
      });
    try {
        const newData = await response.json();
        return newData
    }catch(error) {
        console.log("error", error);
    }
};



// function to get web api data
// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API
const getWeatherData = async (baseURL, zipCode, apiKey) => {
    const result = await fetch (baseURL+zipCode+apiKey);
    try {
        const data = await result.json();
        return data;
    }
    catch(error) {
        console.log('error: '+ error)
    }
};


// When click generate, this will be called! 
const updateUI = async () => {
    const request = await fetch('/body');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById("date").innerHTML = "Today's date: " +allData.body.date;;
        document.getElementById("temp").innerHTML = "tempeture: "+allData.content.main.temp + " feels like " + allData.content.main.feels_like;
        document.getElementById("content").innerHTML = ;

    }
}