function myGreetings ( anotherGreet, name )
{
    anotherGreet( name )
}
function anotherGreet ( name )
{
    console.log( `hello my dear ${ name }` )
}
// myGreetings( anotherGreet, 'mhj' )

const b = 6
// b = 6
// console.log( b );

const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;
console.log( ratName )
