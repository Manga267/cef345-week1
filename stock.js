const products = [
   {
      name: "Product 1",
      qty: 4,
min Qty: 5,
costPrice: 10,
sellinfPrice: 15
},
{
name: 'Product 2",
qty: 10,
min Qty: 5,
costPrice: 20,
sellinfPrice: 28
}
];
function stockReport() {
  console.log("===== STOCK REPORT =====");
 products.forEach(p => {
  console.log("Product:",p.name);
  console.log("Quantity:",p.qty);
         if (p.qty < 5) {
  console.log("Status: LOW STOCK");
} else {
   console.log("Status: STOCK AVAILABLE");
}

console.log("-------------------------");
});
}
stockReport();
  