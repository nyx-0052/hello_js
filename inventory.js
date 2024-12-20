"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laptop = exports.broccoli = void 0;
exports.getItem = getItem;
exports.calculateTotalValue = calculateTotalValue;
exports.calculateTotalPrice = calculateTotalPrice;
var promptSync = require('prompt-sync')();
// Enum for category of items
var Category;
(function (Category) {
    Category["Electronics"] = "Electronics";
    Category["Grocery"] = "Grocery";
    Category["Clothing"] = "Clothing";
})(Category || (Category = {}));
// DELCARING ITEMS
exports.broccoli = {
    id: 0,
    name: "broccoli",
    category: Category.Grocery,
    price: 60,
    stock: 100,
};
exports.laptop = {
    id: 1,
    name: "laptop",
    category: Category.Electronics,
    price: 200,
    stock: 5,
    warrantyPeriodMonths: 3,
};
var inventory = new Map([
    [0, exports.broccoli],
    [1, exports.laptop]
]);
/**
 * Get item using item ID.
 * @param id - Item ID
 * @returns - Item
 */
function getItem(id) {
    var itemRequired = inventory.get(id);
    if (itemRequired === undefined) {
        throw new Error('getItem failed: item is undefined');
    }
    return itemRequired;
}
/**
 * Prints all details of item out (formatted).
 * @param item - Item
 */
function printItemDetails(item) {
    console.log("ID:", item.id);
    console.log("Name:", item.name);
    console.log("Category:", item.category);
    console.log("Price:", item.price);
    console.log("Stock:", item.stock);
    if (item.warrantyPeriodMonths === undefined) {
        console.log("Warranty Period: NA months");
    }
    else {
        console.log("Warranty Period:", item.warrantyPeriodMonths, "months");
    }
    //console.log(`Warranty Period: ${item.warrantyPeriodMonths ?? "NA"} months`);
}
/**
 * Allows user to input details for new item to inventory.
 * @returns - new Item
 */
function addNewItem() {
    console.log("------ 1 - ADD a new item to inventory ------");
    var prompt = promptSync();
    var id = Number(prompt('Enter the ID '));
    var name = prompt('Enter the name ');
    var category = prompt('Enter the category ');
    var price = Number(prompt('Enter the price '));
    var stock = Number(prompt('Enter the stock '));
    var warrantyPeriodMonths = Number(prompt('Enter the number of months '));
    var item = {
        id: id,
        name: name,
        category: category,
        price: price,
        stock: stock,
        warrantyPeriodMonths: warrantyPeriodMonths,
    };
    inventory.set(item.id, item);
    return item;
}
/**
 * Changes quantity of stock of item.
 * @returns - Changed stock quantity of item.
 */
function updateStock() {
    console.log("------ 2 - UPDATE a stock quantity ------");
    var prompt = promptSync();
    var id = Number(prompt('Enter the ID of the item you would like to change: '));
    var change = Number(prompt('Enter the change in stock quantity: '));
    var item = getItem(id);
    item.stock += change;
    return item.stock;
}
/**
 * Prints all items under specified category.
 */
function searchByCategory() {
    console.log("------ 3 - SEARCH by category------");
    var prompt = promptSync();
    var category = prompt('Enter the category you want to search: ');
    inventory.forEach(function (value) {
        if (value.category === category) {
            console.log(value.name);
        }
    });
}
/**
 * Calculates and prints the total value of the specfied item.
 */
function calculateTotalValue() {
    console.log("------ 4 - CALCULATING total value of stock ------");
    var prompt = promptSync();
    var id = Number(prompt('Enter the ID of the item you would like to calculate the cost of: '));
    var item = getItem(id);
    console.log("The total price of", item.name, "is $", item.stock * item.price);
}
function calculateTotalPrice(id) {
    var item = getItem(id);
    var itemName = item.name;
    var totalPrice = item.stock * item.price;
    return { itemName: itemName, totalPrice: totalPrice };
}
// abstract the function
// const id = Number(promptSync('Enter the ID of the item you would like to calculate the cost of: '));
// const result = calculateTotalPrice(id);
// console.log("The total price of", result.itemName, "is $", result.totalPrice)
function main() {
    //test area
    var i = false;
    while (i == false) {
        console.log("-------");
        console.log("0 - PRINT whole inventory");
        console.log("1 - ADD a new item to inventory");
        console.log("2 - UPDATE a stock quantity");
        console.log("3 - SEARCH by category");
        console.log("4 - CALCULATING total value of stock");
        console.log("5 - EXIT loop");
        var prompt_1 = promptSync();
        var userDecision = Number(prompt_1('Enter action: '));
        switch (userDecision) {
            case 0:
                inventory.forEach(function (element) {
                    printItemDetails(element);
                    console.log('_______________');
                });
                break;
            case 1:
                addNewItem();
                break;
            case 2:
                updateStock();
                break;
            case 3:
                searchByCategory();
                break;
            case 4:
                calculateTotalValue();
                break;
            case 5:
                i = true;
                break;
        }
    }
}
// main()
// Extensions
// ✅ 1. Function to add a new item to the inventory (input: the list of attributes of the item, output: item)
// ✅ 2. Function to update the stock of an item (input: item, change in stock quantity, output: updated stock quantity )
// ✅ 3. Function to find items by category (input: 'Electronics', output: all electronic items)
// ✅ 4. Function to calculate the total price of items in stock (input: 'item', price x stock, output: total price of items in stock)
// ✅ 5. map refactoring
// 6. difference between no of ==
// 7. difference between undefined and null
// 8. difference between java and ts
