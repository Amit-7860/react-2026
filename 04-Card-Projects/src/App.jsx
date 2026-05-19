import React from 'react'
import './App.css'
import Card from './Components/Card'
function App() {

 const categories = ["laptop","smartphone","headphones","watch","shoes","backpack","chair","camera","sofa","bicycle"];
const names = [
  "Dell Inspiron Laptop","Samsung Galaxy Smartphone","Sony Wireless Headphones",
  "Fossil Smartwatch","Nike Running Shoes","Wildcraft Backpack",
  "Ergonomic Office Chair","Canon DSLR Camera","Leather Recliner Sofa","Hero Mountain Bike"
];

const products = Array.from({ length: 100 }, (_, i) => {
  const category = categories[i % categories.length];
  const name = names[i % names.length] + " " + (i + 1);
  return {
    img: `https://source.unsplash.com/random/300x300?${category}&sig=${i}`,
    name,
    price: Math.floor(Math.random() * 50000) + 2000
  };
});



  return (
    <>

    
      <div className="parent">
       {products.map((item, index) => {
        return <Card key={item.img} id={index + 1} company={item.name} description={`Price: $${item.price}`} image={item.img} />
       })}
        
      </div>
    </>
  )
}

export default App
