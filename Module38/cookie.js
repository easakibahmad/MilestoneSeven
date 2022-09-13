const cookieFunc = ( name ) =>
{
    const src = document.cookie.split( '; ' )
    // console.log( src )
    const foundName = src.find( c => c.includes( name ) )
    if ( foundName )
    {
        const res = foundName.split( '=' )[ 1 ]
        return res
    }
}