export const Functions = () => {
    const sum = ( a:number , b:number ):number => {
        return a + b;
    }
    return (
        <>
            <h3>Functions in React</h3>
            <span>
                { sum(20,10) }
            </span>
        </>
    )
}
