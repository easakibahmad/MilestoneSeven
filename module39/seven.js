function myGreetings ( anotherGreet, name )
{
    anotherGreet( name )
}
function anotherGreet ( name )
{
    console.log( `hello my dear ${ name }` )
}
myGreetings( anotherGreet, 'mhj' )