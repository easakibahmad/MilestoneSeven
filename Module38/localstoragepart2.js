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

    // localStorage.setItem( name, quantity )
    saveStorage( name, quantity )
    parentValueSet( name, quantity )
}


const getCart = () =>
{
    let savedCart = localStorage.getItem( 'cart' )
    let cart = {}
    if ( savedCart )
    {
        cart = JSON.parse( savedCart )
    }
    return cart
}

const saveStorage = ( p, q ) =>
{
    const cart = getCart()
    cart[ p ] = q
    const stringifyCart = JSON.stringify( cart )
    localStorage.setItem( 'cart', stringifyCart )
}

const parentValueSet = ( name, quantity ) =>
{
    const parent = document.getElementById( 'products' )
    const child = document.createElement( 'li' )
    child.innerText = `${ name } : ${ quantity }`
    parent.appendChild( child )
}

const displayProduct = () =>
{
    const cart = getCart()
    for ( const p in cart )
    {
        const quantity = cart[ p ]
        parentValueSet( p, quantity )
    }
}
displayProduct()