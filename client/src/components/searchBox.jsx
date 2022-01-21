import React, { useState } from "react";
import styled from "styled-components";
import data from "../static/data.js";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import api from "../services/api.js";

const SearchBox = (props) => {
    const [locations, setLocations] = useState([]);


    const handleOnSelect = (location) => {
        props.setLoading(true);
        api.get(`/?location=${location.name}`)
            .then((forecast) => {
                props.setForecast(forecast.data);
            })
            .catch((err) => {
                console.error(err);
            }).finally(() => {
                props.setLoading(false);
            })
    }

    const handleOnSearch = async (string, results) => {
        const result = data.filter((location) => {
            return location.name.toLowerCase().includes(string.toLowerCase());
        });
        await setLocations(result);
    }


    return <Container>
        <ReactSearchAutocomplete items={locations} onSearch={handleOnSearch} onSelect={handleOnSelect} autofocus placeholder="Digite uma localização" />
    </Container>
}

const Container = styled.div`
margin: 48px;
text-align: center;
& > *:first-child{
    margin: auto;
    width: 700px;
}
`

export default SearchBox;