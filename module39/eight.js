function scopeTest ( a, b, c )
{
    // console.log( arguments )
    // console.log( arguments[ 4 ] )
    // console.log( ...arguments )
    // for ( const m of arguments )
    // {
    //     console.log( m )
    // }
    return a * b
}
// this arguments is different from inside funtion arguments
// console.log( arguments ) 
// console.log( scopeTest( 1, 2, 3, 4, 5, 6, 7 ) )
// console.log( scopeTest.length )






// part two
let a = 2
let b = 4
function sumTwo ( m, n )
{
    // m = 45
    return m + n
}
// console.log( a )
// console.log( sumTwo( a, b ) )


let objOne = { name: 'sakib', age: 21 }
function nameChange ( one )
{
    one.name = 'jhon'
    one.age = 22
}
console.log( objOne )
nameChange( objOne )
console.log( objOne )