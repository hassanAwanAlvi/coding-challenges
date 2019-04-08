/**
 * Returns the adidas three stripes logo using `@` characters.
 *
 * Logic, I made the logo string reverse and found a simple logic
 *
 *
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */
module.exports = function(width) {






    if (width < 2)
        throw new Error('Error, minimum width is 2')

    let spaces_btw_stripes = Math.round( Math.sqrt(width))
    let smallest_stripe_height = Math.round( Math.sqrt(width))

    //When you reverse the logo you see that there are all three stripes
    //in the first line as well as some spaces in the end
    //last_width is just the calculation of first line

    let last_width = (width * 3) + (2 * spaces_btw_stripes) + smallest_stripe_height - 1


    let adidas_logo = ``




    let spacing_char = ` `
    let main_char = `@`


    for (let i = 1 ; i <= smallest_stripe_height * 3; i++)
    {

        let line = ``
        // First stripe
        if ( smallest_stripe_height * 3 >= i )
        {
            line += addChars(width, main_char)
        }

        // Add Space
        line += addChars(spaces_btw_stripes, spacing_char)

        // Check if 2nd stripe needs to be here
        if ( smallest_stripe_height * 2 >= i )
        {
            line += addChars(width, main_char)
        }

        // Add Space
        line += addChars(spaces_btw_stripes, spacing_char)

        // Check if 3rd stripe needs to be here
        if ( smallest_stripe_height * 1 >= i )
        {
            line += addChars(width, "@")
        }

        //Add spaces till the end of line
        line += addChars(last_width - line.length, spacing_char)
        last_width -= 1

        //Line completed add it to adidas_logo
        adidas_logo += line + `\n`
    }


    //As we get the reversed string, in the end we have to reverse it once again
    //to make it logo
    adidas_logo = adidas_logo.split("").reverse().join("");

  return trim(adidas_logo);
};


function trim(value) {
    return value.replace(/^\n|\s+$/g, '');
}


function addChars(width, content) {

    let newContent = ``
    for(let i = 0 ; i < width; i++)
    {
        newContent += content
    }

    return newContent
}