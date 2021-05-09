
import React from "react";
import Form from "./components/Form";
import Info from "./components/Info";
import Weather from "./components/Weather";

const API_KEy = "4a60aeec0e4699e473ddd8cffc2b345d";

class App extends React.Component{

  gettingWeather = async () =>{
    const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEy}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }


  render(){
    return(
      <div>
        <Info />
        <Form/>
        <Weather/>
      </div>
    );
  }
}

export default App;