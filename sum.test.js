const sum = require('./sum.js');
test('adds 1 to 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})
test('there is no I in team', () => {
    expect('teamI').toMatch(/I/)
})
// const example = require('./sum.js')
    
// test('checking object', () => {
//     expect(example.name).toMatch('Patryk')
//     expect(example.lastname).toMatch('Boryca');
//     expect(typeof example.age).not.toMatch("number")
//     expect(example.eyecolor).not.toMatch('white');
// })