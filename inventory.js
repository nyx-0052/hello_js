"use strict";
console.log("Hello World!");
// Enum for category of items
var Category;
(function (Category) {
    Category["Electronics"] = "Electronics";
    Category["Grocery"] = "Grocery";
    Category["Clothing"] = "Clothing";
})(Category || (Category = {}));
// Example items
const broccoli = {
    id: 1,
    name: "broccoli",
    category: Category.Grocery,
    price: 60,
    stock: 100,
};
const laptop = {
    id: 2,
    name: "laptop",
    category: Category.Electronics,
    price: 200,
    stock: 5,
    warrantyPeriodMonths: 3,
};
// Function to display item information
// input: item: Item
// output: return void
// console
function printItemDetails(item) {
    var _a;
    console.log("ID:", item.id);
    console.log("Name:", item.name);
    console.log(item.category);
    console.log(item.price);
    console.log(item.stock);
    if (item.warrantyPeriodMonths === undefined) {
        console.log("Warranty Period: NA months");
    }
    else {
        console.log("Warranty Period:", item.warrantyPeriodMonths, "months");
    }
    console.log(`Warranty Period: ${(_a = item.warrantyPeriodMonths) !== null && _a !== void 0 ? _a : "NA"} months`);
}
printItemDetails(broccoli);
console.log("-------");
printItemDetails(laptop);
// Extensions
// 1. Function to add a new item to the inventory
// 2. Function to update the stock of an item
// 3. Function to find items by category (input: 'Electronics', output: all electronic items)
// 4. Function to calculate the total price of items in stock (input: 'item', price x stock, output: total price of items in stock)
