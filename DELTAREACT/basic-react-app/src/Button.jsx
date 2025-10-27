function printHello() {
    console.log("Hello");
}

function printBye() {
    console.log("Bye")
}

export default function Button() {
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printBye}>This is for event demo</p>
        </div>
    );
}