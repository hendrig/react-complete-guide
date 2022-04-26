const CoordinateInput = (props) => {
    const updateInput = (event) => {
        let value = event.target.value;
        props.onChangeCoordinate(value);
    }

    return <div>
        <label>{props.label}</label><br/>
        <input onChange={updateInput} type="number"></input>
    </div>
}

export default CoordinateInput;