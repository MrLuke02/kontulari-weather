import styled from "styled-components"
import React, { useState } from "react"
import { Button, Toast, ToastHeader, ToastBody } from "reactstrap";

const WeatherCard = (props) => {
    const [forecast] = useState(props.forecast);

    let icon = `https://www.metaweather.com/static/img/weather/${forecast.consolidated_weather[0].weather_state_abbr}.svg`
    let Data = new Date(forecast.time);


    return (
        <Container>
            <div>
                <Toast>
                    <ToastHeader>
                        <div class="ToastBar">
                            <img src={icon} alt="Icone" />
                            <h1>{forecast.title}</h1>
                            <div class="data">
                                <h2>{pad(Data.getDate()) + "/" + pad(Data.getMonth() + 1) + "/" + Data.getFullYear()}</h2>
                                <h3>{pad(Data.getHours()) + ":" + pad(Data.getMinutes()) + ":" + pad(Data.getSeconds().toPrecision())}</h3>
                            </div>
                        </div>
                    </ToastHeader>
                    <ToastBody>
                        <span>{forecast.consolidated_weather[0].the_temp.toFixed(1)}°C</span>
                    </ToastBody>
                </Toast>
            </div>
        </Container>
    )
}

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

const Container = styled.div`
color: #323225;
margin-top: 418px;
justify-content: center;
margin: auto;
padding: 36px;
.data{
    display:block;
    text-align: right;
    margin-left: 33%;
}
.ToastBar{
    margin:0;
    display:flex;
    text-align: right;
    align-items: center;
}
.ToastBar h1{
    color: #272727;
    font-size: 30px;
    padding:0;
    margin-left: 1rem;
    text-align: center;
}
img{
    height: 2.5rem;
    margin: 0;
}
h6 {
    font-size: 2rem;
    margin-botton: 32px;
    margin-top: 5%;
}
span {
    font-size: 3rem;
    margin-top: 32px;
}
`
export default WeatherCard;