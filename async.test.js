const myFunctions = require('./async');
test('array test', ()=>{
    expect(myFunctions.arrSum([5,5,5])).toBe(15);
})

        test ('addStrings',()=>{
            expect(myFunctions.addStrings('I am Patryk')).toBe('I am Patryk')
        })
 