import {useState} from 'react';
import CoordinateInput from "./CoordinateInput";
import Calculation from '../Calculation'

const Calculator = () =>
{
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [soma, setSum] = useState('0');
    let c = new Calculation();

    const updateLatitudeView = (value) => {
        setLatitude(value);
        sum(latitude, longitude);
    }

    const updateLongitudeView = (value) => {
        setLongitude(value);
        sum(latitude, longitude);
    }

    const sum = (v1, v2) =>{
        let s = c.Sum(v1, v2);
        setSum(s);
    }

    return <div>
        <CoordinateInput label='Latitude' onChangeCoordinate={updateLatitudeView}/>
        <CoordinateInput label='Longitude' onChangeCoordinate={updateLongitudeView}/>
        <br></br>
        <div>{latitude}</div>
        <div>{longitude}</div>
        <div>{soma}</div>
    </div>
}

export default Calculator;