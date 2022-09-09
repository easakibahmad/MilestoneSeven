function scopeTest ( a, b )
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
console.log( scopeTest( 1, 2, 3, 4, 5, 6, 7 ) )