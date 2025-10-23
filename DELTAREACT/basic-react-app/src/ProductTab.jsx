import Product from "./Product.jsx";

function ProductTab() {
    return(
    <>
      <Product title="phone" price= {30000}/>
      <Product title="laptop" price= {4000}/>
      <Product title="tab" />
    </>
    )
};

export default ProductTab;