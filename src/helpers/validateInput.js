
export const inputIsValid = (prevInput, input) => {

    // Ei sallita kahta operaattoria peräkkäin
   
    if (input === '.' && prevInput.includes('.'))
        return false

    if (input === '-' && prevInput.includes('-'))
        return false

    if (input === '+' && prevInput.includes('+'))
        return false

    if (input === 'x' && prevInput.includes('x'))
        return false

    if (input === '%' && prevInput.includes('%'))
        return false


    // Ei sallita näillä aloitettavan laskutoimitusta

    if (input === '.' && prevInput.length === 0)
        return false

    if (input === '+' && prevInput.length === 0)
        return false

    if (input === 'x' && prevInput.length === 0)
        return false

    if (input === '%' && prevInput.length === 0)
        return false

    if (input === '/' && prevInput.length === 0)
        return false



    return true
}