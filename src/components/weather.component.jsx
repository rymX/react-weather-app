import React from 'react'
import '/home/rym/Bureau/code/react-weather-app/node_modules/weather-icons/css/weather-icons.css'
import '../App.css';
 const Weather =(props)=> {
return (
     <div className="container ">

            <div className="cards pt-4">
                 <h1> <spam>{props.city} </spam>  </h1> 
                 <spam>{props.country}</spam>
                 <h1 className="py-4">
                 <i className={`wi ${props.weathericone} display-1`}/>
                 </h1>
                {props.temp ?  (<h1 className="py-2">{props.temp}&deg;</h1>): null }

                 <div className="container">
                 <h1>
                   { props.temp_min ? (<span className="px-4" > {props.temp_min}&deg; </span>):null}
                   { props.temp_max?( <span className="px-4" >    {props.temp_max}&deg;</span>):null}
                 </h1>
                 </div>                 
                 <h4 className="py-3">{props.description} </h4>
             </div>
            
        </div>
   );
}
export default Weather;