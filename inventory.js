console.log("Hello World!");
// Enum for category of items
var Category;
(function (Category) {
    Category["Electronics"] = "Electronics";
    Category["Grocery"] = "Grocery";
    Category["Clothing"] = "Clothing";
})(Category || (Category = {}));
// Example items
var broccoli = {
    id: 1,
    name: "broccoli",
    category: Category.Grocery,
    price: 60,
    stock: 100,
};
var laptop = {
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
    console.log("Warranty Period: ".concat((_a = item.warrantyPeriodMonths) !== null && _a !== void 0 ? _a : "NA", " months"));
}
printItemDetails(broccoli);
console.log("-------");
printItemDetails(laptop);
