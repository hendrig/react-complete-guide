const toDegrees = (degree, minutes, seconds) => {
    const p = parseFloat(parseInt(seconds) / 60);
    const m = parseFloat((parseInt(minutes) + p) / 60);

    let deg = parseFloat(Math.abs(degree) + m);;
    if(degree < 0){
        deg = -1 * deg;
    }

    return deg;
};

const toDegreeObject = (degrees) => {
    const degree = parseInt(degrees);

    const minutes = Math.abs(parseFloat((parseFloat(degrees)-degree) * 60));
    const minute = parseInt(minutes);
    const second = parseInt((minutes-minute) * 60);

    const obj = {
        degree: degree,
        minute: minute,
        second: second
    }

    return obj;
};

const DegreesToRadians = (degrees) => {
    return (degrees * Math.PI) / 180.0;
};

const RadiansToDegrees = (radians) => {
    return (radians * 180.0) / Math.PI;
};

module.exports = {
    toDegrees,
    toDegreeObject,
    RadiansToDegrees,
    DegreesToRadians
};