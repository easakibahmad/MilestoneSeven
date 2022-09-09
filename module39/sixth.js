function watch ()
{
    let count = 0
    return function ()
    {
        count++
        return count
    }
}
const one = watch()
console.log( one() )
console.log( one() )
console.log( one() )


const two = watch()
console.log( two() )
console.log( two() )
console.log( two() )


const three = watch()
console.log( three() )
console.log( three() )
console.log( three() )