import React, { useState, useEffect } from "react";

function Products() {
    let [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(json => {
                setData(json.products); // Set the fetched products to state
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
            <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
                {data.map((product) => (
                    <section key={product.id} className="p-5 rounded-3xl py-10 bg-red-300 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <img src={product.thumbnail} alt={product.thumbnail} />
                        <div className="space-x-1 flex justify-center mt-10">
                           
                        </div>
                        <h1 className="text-3xl my-5 italic font-semibold underline decoration-double">{product.title}</h1>
                        <p className="mb-5 underline decoration-solid">{product.description}</p>
                        <h2 className="font-semibold mb-5 italic underline decoration-solid">{product.brand}</h2>
                      
                      <button className="p-2 px-6 bg-blue-700  text-white rounded-md hover:bg-purple-600">{product.availabilityStatus}</button>
                      <h2 className="font-semibold mb-5 italic underline decoration-solid">Rs: {product.price}/-</h2>
                       </section>



                ))}
            </section>
        </section>
    );
}

export default Products;