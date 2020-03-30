import React,{Component} from 'react';
import Weather from './components/weather.component'
import './App.css';
import '/home/rym/Bureau/code/react-weather-app/node_modules/weather-icons/css/weather-icons.css'
import Form from './components/forme.component.jsx'




class APP extends Component {
  
  constructor(){
     super();
     this.state = {
      city:'',
      country:'',
      temp:'',
      icon:undefined,
      description:'',
      temp_min:'',
      temp_max:'',
      error:false 
     };
     

     /*this.weathericone={
     thunderstom:"wi-day-snow-thunderstorm"
     };
     */

  }
  /* calcultemp(temp){
      let t =Math.floor(temp-273.15);
      return t;
     }
     */

  getweathericone(rangeid){
    switch(true){
     case   rangeid >=200 && rangeid<=232:
       this.setState({icon:"wi-day-thunderstorm"});
       break;
       case   rangeid >=300 && rangeid<=321:
       this.setState({icon:"wi-day-fog"});
       break;
       case   rangeid >=500 && rangeid<=531:
       this.setState({icon:"wi-day-rain"});
       break;
       case   rangeid >=600 && rangeid<=622:
       this.setState({icon:"wi-day-snow"});
       break;
       case   rangeid >=701 && rangeid<=781:
       this.setState({icon:"wi-day-thunderstorm"});
       break;
       case   rangeid===800: 
       this.setState({icon:"wi-day-sunny"});
       break;
       case   rangeid >=801 && rangeid<=804:
       this.setState({icon:"wi-day-cloudy"});
       break;
       default:
        this.setState({icon:"wi-day-cloudy"});


    }
  }
  
  

 getWeather = async(e)=> {

   e.preventDefault();

   const Api_Key='3c3d113338d435fa758212f788ba3c7d';
   const city=e.target.elements.city.value;
   const country=e.target.elements.country.value;
   console.log(city);
   console.log(country);
   if (city)
    
    {const responce = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const data= await responce.json(); 
    console.log(data);
    
    this.setState({
       city:data.name ,
       country:data.sys.country ,
       temp:Math.floor(data.main.temp-273.15),
       description:data.weather[0].description ,
       temp_min:Math.floor(data.main.temp_min-273.15),
       temp_max:Math.floor(data.main.temp_max-273.15),
       error:false 
    })
    this.getweathericone(data.weather[0].id);
  
   }
   else {
    this.setState({error:true});
    console.log("empty city");
   }
    
  }

  render() { 
    return ( 
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />

       <Weather city={this.state.city}
        country={this.state.country}
        temp={this.state.temp}
        temp_min={this.state.temp_min}
        temp_max={this.state.temp_max}
        description={this.state.description}
        weathericone={this.state.icon}  />
      </div>
    
      
   
     );
  }
}
 
export default APP;

