import Calculation from "./Calculation";

it('sum', () =>{
    let c = new Calculation();
    expect(c.Sum(1, 2)).toEqual(3);
})

/*
n = número de dias seguidos
declinacao = 23.45 * sen((360/365)*(284 + n))
TD = (2/15) * arccos(-tan(latitude)*tan(declinacao))
 */