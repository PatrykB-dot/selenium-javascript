let array = [5,5,5];
function arrSum (){
    return array.reduce((a,b)=>
        a+b, 0
    )
}
function addStrings(string){
    return string
}
module.exports = {arrSum,addStrings} ;
