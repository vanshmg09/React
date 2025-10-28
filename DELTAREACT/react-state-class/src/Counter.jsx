export default function Counter(){
    let count = 0;

    function increaseCount(){
        count += 1;
        console.log(count);
    }

    return(
        <>
            <h3>Count = {count}</h3>
            <button onClick={increaseCount}>Increase Count</button>
        </>
        
    )
}