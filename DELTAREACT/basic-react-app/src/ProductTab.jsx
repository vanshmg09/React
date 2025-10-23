import Product from "./Product.jsx";

function ProductTab() {
  let options = ["hi-Tech" ,"durable", "fast"];
  let options2 = {a: "hi-Tech" ,b: "durable", c: "fast"};
    return(
    <>
      <Product title="phone" price= {30000} features={options} features2={options2} />
      <Product title="laptop" price= {4000}  features={options} features2={options2}/>
      <Product title="tab" price={300}   features={options} features2={options2}/>
    </>
    );
};

export default ProductTab;