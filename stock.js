const products = [
   {
      name: "Product 1",
      qty: 6,

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
function profitPerUnit(p) {
  return p.sellingPrice -
p.costPrice;
}
function stockReport() {
  console.log("===== STOCK REPORT =====");
 products.forEach(p => {
  console.log("Product:",p.name);
  console.log("Quantity:",p.qty);
  console.log("Profit per unit:",profitPerUnit(p));
         if (p.qty < p.minQty) {
  console.log("Status: LOW STOCK");
} else {
   console.log("Status: STOCK AVAILABLE");
}

console.log("-------------------------");
});
}
stockReport();
  