// eight ways to get undefined
let a
// console.log( a )
function nameReturn ( name )
{
    let hisName = "sakib"
}
// console.log( nameReturn( 'sakib' ) )
function addNumber ( a, b, c )
{
    return a, b, c
}
// console.log( addNumber( 1, 2 ) )
function add ( num )
{
    if ( num > 0 )
    {
        return
    }
    else
    {
        return num
    }
}
// console.log( add( 4 ) )
let object = { name: 'mitrovic' }
// console.log( object.salary )
var arr = [ 1, 2, 3, 4, 4 ]
// console.log( arr[ 7 ] )
delete arr[ 4 ]
// console.log( arr[ 4 ] )
var name = undefined
// console.log( name )
// console.log( typeof null )
// console.log( typeof undefined )