const getItemValue = ( id ) =>
{
    const item = document.getElementById( id )
    const itemValue = item.value
    item.value = ""
    return itemValue
}
const addItem = () =>
{
    const name = getItemValue( "productName" )
    const quantity = getItemValue( "productQuantity" )

    localStorage.setItem( name, quantity )
    parentValueSet( name, quantity )
}

const parentValueSet = ( name, quantity ) =>
{
    const parent = document.getElementById( 'products' )
    const child = document.createElement( 'li' )
    child.innerText = `${ name } : ${ quantity }`
    parent.appendChild( child )
}