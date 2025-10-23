import Product from "./Product.jsx";

function ProductTab() {
  let options = ["hi-Tech" ,"durable", "fast"];
    return(
    <>
      <Product title="phone" price= {30000} features={options}  />
      <Product title="laptop" price= {4000}  features={options} />
      <Product title="tab" price={300}  features={options} />
    </>
    );
};

export default ProductTab;