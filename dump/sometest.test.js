const m = require('./sometest');

/*
 Degree conversion
*/
it('Convert 27 degrees, 2 minutes to 27.033', () => {
    expect(m.toDegrees(27,2,0)).toBe(27.033333333333335);
});

it('Convert -27 degrees, 12 minutes, 2 seconds to -27.2005555555555556', () => {
    const deg = -27;
    expect(m.toDegrees(deg,12,2)).toBe(-27.2005555555555556);
});

it('Convert 27 degrees, 12 minutes, 2 seconds to 27.2005555555555556', () => {
    expect(m.toDegrees(27,12,2)).toBe(27.2005555555555556);
});

it('Convert -27.2005555555555556 to object', () => {
    const received = m.toDegreeObject(-27.2005555555555556);
    const expected = { 
        degree: -27,
        minute: 12,
        second: 2
    };

    expect(received.degree).toBe(expected.degree);
    expect(received.minute).toBe(expected.minute);
    expect(received.second).toBe(expected.second);
});

it('Convert 27.2005555555555556 to object', () => {
    const received = m.toDegreeObject(27.2005555555555556);
    const expected = { 
        degree: 27,
        minute: 12,
        second: 2
    };

    expect(received.degree).toBe(expected.degree);
    expect(received.minute).toBe(expected.minute);
    expect(received.second).toBe(expected.second);
});

/**
 * Convert rad to degree
 */

it('Convert 0.7853981633974483 radians to 45 degrees',() =>{
    const radians = 0.7853981633974483;
    const deg = 45;

    expect(m.RadiansToDegrees(radians)).toBe(deg);
});

it('Convert 45 degrees to 0.7853981633974483 radians',() =>{
    const radians = 0.7853981633974483;
    const deg = 45;

    expect(m.DegreesToRadians(deg)).toBe(radians);
});