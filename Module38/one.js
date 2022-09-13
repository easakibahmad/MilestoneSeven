const alertFunction = () =>
{
    let num = Math.random() * 10
    num = num.toFixed( 2 )
    console.log( num )
    if ( num > 5 )
    {
        alert( `${ num } is greater than ` )
    }
    else
    {
        alert( `${ num } is less than 5` )
    }
}


const confirmFunction = () =>
{
    const num = confirm( "sakib" )
    if ( num )
    {
        alert( "yes its me, sakib" )
    }
    else
    {
        alert( 'nope, this is not sakib' )
    }
}


const promptFunction = () =>
{
    const name = prompt( 'whats is your passion' )
    alert( `${ name } is my passion` )
}