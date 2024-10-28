import promptSync from 'prompt-sync';

// Enum for category of items
enum Category {
    Electronics = "Electronics",
    Grocery = "Grocery",
    Clothing = "Clothing",
}

// Interface to define the attributes of an item (object) in the inventory
interface Item {
    id: number;
    name: string;
    category: Category;
    price: number;
    stock: number;
    warrantyPeriodMonths?: number;  // Optional property for a warranty period in months (only applicable to electronics)
}

// Example items
const broccoli: Item = {
    id: 1,
    name: "broccoli",
    category: Category.Grocery,
    price: 60,
    stock: 100,
}

const laptop: Item = {
    id: 2,
    name: "laptop",
    category: Category.Electronics,
    price: 200,
    stock: 5,
    warrantyPeriodMonths: 3,
}

// Function to display item information
// input: item: Item
// output: return void
// console
function printItemDetails(item: Item) {
    console.log("ID:", item.id);
    console.log("Name:", item.name);
    console.log(item.category);
    console.log(item.price);
    console.log(item.stock);
    if (item.warrantyPeriodMonths === undefined) {
        console.log("Warranty Period: NA months");
    } else {
        console.log("Warranty Period:", item.warrantyPeriodMonths, "months");
    }

    //console.log(`Warranty Period: ${item.warrantyPeriodMonths ?? "NA"} months`);
}

function addNewItem(): Item {
    const prompt = promptSync();
    const id = Number(prompt('Enter the ID '));
    const name = prompt('Enter the name ');
    const category = prompt('Enter the category ');
    const price = Number(prompt('Enter the price '));
    const stock = Number(prompt('Enter the stock '));
    const warrantyPeriodMonths = Number(prompt('Enter the number of months '));

    const item: Item = {
        id: id,
        name: name,
        category: category as Category,
        price: price,
        stock: stock,
        warrantyPeriodMonths: warrantyPeriodMonths,
    }

    printItemDetails(item);
    return item;
}

printItemDetails(broccoli);
console.log("-------")
printItemDetails(laptop);
console.log("-------");
addNewItem();



// Extensions
// ✅ 1. Function to add a new item to the inventory (input: the list of attributes of the item, output: item)
// 2. Function to update the stock of an item
// 3. Function to find items by category (input: 'Electronics', output: all electronic items)
// 4. Function to calculate the total price of items in stock (input: 'item', price x stock, output: total price of items in stock)
