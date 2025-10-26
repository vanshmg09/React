import "./Product.css"
import Price from "./Price";

function Product({title, idx}) {
    // let list = features.map((feature) => <li>{feature}</li>)
    // let isDiscount = price > 30000;
    // let style = { backgroundColor : isDiscount ? "pink" : null}
    let oldPrice = ["12,495","11,999","1,599","599"];
    let newPrice = ["8,999","9,199","899","278"];
    let description = [["8,000 DPI", "Programmable button"], ["intuitive surface", "designed for iPad Pro"], ["intuitive surface", "designed for iPad Pro"], ["wireless", "optical orientation"]]
    return(
        <div className="Product" >
            <h4>{title}</h4>
            <p>{description[idx][[0]]}</p>
            <p>{description[idx][[1]]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}

export default Product;