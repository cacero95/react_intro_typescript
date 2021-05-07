interface Person {
    name: string,
    age: number,
    address: Address
}
interface Address {
    country: string
}

export const ObjectsLiteral = () => {
    const document: Person = {
        name: 'Andres',
        age: 26,
        address: {
            country: 'Colombia'
        }
    }
    return (
        <>
          <h1>Literal Objects</h1>
          <code>
            <pre>
                { JSON.stringify( document, null, 2 ) }
            </pre>
          </code>
        </>
    );
}
