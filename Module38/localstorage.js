const addItem = () =>
{
    const input = document.getElementById( 'input' )
    const inputValue = input.value
    localStorage.setItem( 'name', inputValue )
}

const removeItem = () =>
{
    localStorage.removeItem( 'name' )
}

const clearItem = () =>
{
    localStorage.clear()
}