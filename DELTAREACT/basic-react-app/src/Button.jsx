function handelClick(event) {
    console.log("Hello");
    console.log(event);
}

function handelMouseOver() {
    console.log("Bye")
}

function handleDblClick() {
    console.log("you double clicked")
}

export default function Button() {
    return(
        <div>
            <button onClick={handelClick}>Click me!</button>
            <p onMouseOver={handelMouseOver}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptatum nostrum iusto fuga nemo tenetur? Soluta recusandae iusto excepturi distinctio quisquam aliquid. Perspiciatis omnis corporis placeat et ad maxime excepturi.</p>
            <button onDoubleClick={handleDblClick}>double click me!</button>
        </div>
    );
}