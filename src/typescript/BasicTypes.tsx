import React from 'react'

export const BasicTypes = () => {
    let name: string = 'Andres';
    name = 'andres';

    const powers: ( string| number )[] = [ 'fly', 'strength', 'speed', 20 ];
    return (
        <>
           <h3>Basic types</h3>
           { name }
           <ol>
               {
                   powers.map(( element ) => {
                       return <li key = { element }>{ element }</li>
                   })
               }
           </ol>
           <br/>
           { powers.join(', ') }
        </>
    )
}
