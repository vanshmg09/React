import Product from "./Product.jsx";

function ProductTab() {
  let options = ["hi-Tech" ,"durable", "fast"];
    return(
    <>
      <Product title="phone" price= {30000}   />
      <Product title="laptop" price= {40000}  />
      <Product title="tab" price={300}  />
    </>
    );
};

export default ProductTab;