console.log( 2 )
console.log( 3 )
const id = setTimeout( function ()
{
    console.log( 4 )
}, 2000 )
console.log( 6 )
console.log( 7 )
// clearTimeout( id )