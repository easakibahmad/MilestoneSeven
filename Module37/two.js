console.log( 2 )
console.log( 3 )
let s = 0
const id = setInterval( function ()
{
    console.log( ++s )
    if ( s === 10 )
    {
        clearInterval( id )
    }
}, 500 )
console.log( 6 )
console.log( 7 )
// clearTimeout( id )