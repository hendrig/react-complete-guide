import Calculation from "./Calculation";

it('sum', () =>{
    let c = new Calculation();
    expect(c.Sum(1, 2)).toEqual(3);
})