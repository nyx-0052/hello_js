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

// display item information
function printItemDetails(item: Item) {
    console.log("ID:", item.id);
    console.log("Name:", item.name);
    console.log("Category:", item.category);
    console.log("Price:", item.price);
    console.log("Stock:", item.stock);
    if (item.warrantyPeriodMonths === undefined) {
        console.log("Warranty Period: NA months");
    } else {
        console.log("Warranty Period:", item.warrantyPeriodMonths, "months");
    }

    //console.log(`Warranty Period: ${item.warrantyPeriodMonths ?? "NA"} months`);
}

// input a new item to inventory
function addNewItem(): Item {
    console.log("You are about to add a new item to the inventory------")
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

function updateStock(item: Item){
    console.log("You are about to update the stock quantity------")
    const prompt = promptSync();
    const change = Number(prompt('Enter the change in stock quantity: '));
    item.stock += change;

    printItemDetails(item);
    return item.stock;
}

//test area
printItemDetails(broccoli);
console.log("-------")
printItemDetails(laptop);
console.log("-------");
addNewItem();
console.log("-------");
updateStock(laptop);





// Extensions
// ✅ 1. Function to add a new item to the inventory (input: the list of attributes of the item, output: item)
// 2. Function to update the stock of an item (input: item, change in stock quantity, output: updated stock quantity )
// 3. Function to find items by category (input: 'Electronics', output: all electronic items)
// 4. Function to calculate the total price of items in stock (input: 'item', price x stock, output: total price of items in stock)
