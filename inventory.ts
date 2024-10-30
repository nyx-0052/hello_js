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

// DELCARING ITEMS
const broccoli: Item = {
    id: 0,
    name: "broccoli",
    category: Category.Grocery,
    price: 60,
    stock: 100,
}

const laptop: Item = {
    id: 1,
    name: "laptop",
    category: Category.Electronics,
    price: 200,
    stock: 5,
    warrantyPeriodMonths: 3,
}

let inventory = new Map<number, Item>([
    [0, broccoli],
    [1, laptop]
])

/**
 * Get item using item ID.
 * @param id - Item ID
 * @returns - Item
 */
function getItem(id: number): Item {
    const itemRequired = inventory.get(id);
    if (itemRequired === undefined) {
       throw new Error('getItem failed: item is undefined');
    }
    return itemRequired;
}

/**
 * Prints all details of item out (formatted).
 * @param item - Item
 */
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

/**
 * Allows user to input details for new item to inventory.
 * @returns - new Item
 */
function addNewItem(): Item {
    console.log("------ 1 - ADD a new item to inventory ------")
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

    inventory.set(item.id, item);
    return item;
}

/**
 * Changes quantity of stock of item.
 * @returns - Changed stock quantity of item.
 */
function updateStock(): number{
    console.log("------ 2 - UPDATE a stock quantity ------")
    const prompt = promptSync();
    const id = Number(prompt('Enter the ID of the item you would like to change: '))
    const change = Number(prompt('Enter the change in stock quantity: '));

    const item = getItem(id);
    item.stock += change;
    return item.stock;
}

/**
 * Prints all items under specified category.
 */
function searchByCategory() {
    console.log("------ 3 - SEARCH by category------");
    const prompt = promptSync();
    const category = prompt('Enter the category you want to search: ');

    inventory.forEach((value) => {
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
    const prompt = promptSync();
    const id = Number(prompt('Enter the ID of the item you would like to calculate the cost of: '));
    const item = getItem(id);
    console.log("The total price of", item.name, "is $", item.stock*item.price);

}

//test area
let i: boolean = false;

while (i == false) {
    console.log("-------");
    console.log("0 - PRINT whole inventory");
    console.log("1 - ADD a new item to inventory");
    console.log("2 - UPDATE a stock quantity")
    console.log("3 - SEARCH by category")
    console.log("4 - CALCULATING total value of stock")
    console.log("5 - EXIT loop")
    const prompt = promptSync();
    const userDecision = Number(prompt('Enter action: '));

    switch (userDecision) {
        case 0:
            inventory.forEach(element => {
                printItemDetails(element);
                console.log('_______________')
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

// Extensions
// ✅ 1. Function to add a new item to the inventory (input: the list of attributes of the item, output: item)
// ✅ 2. Function to update the stock of an item (input: item, change in stock quantity, output: updated stock quantity )
// ✅ 3. Function to find items by category (input: 'Electronics', output: all electronic items)
// ✅ 4. Function to calculate the total price of items in stock (input: 'item', price x stock, output: total price of items in stock)
// ✅ 5. map refactoring
// 6. difference between no of ==
// 7. difference between undefined and null
// 8. difference between java and ts
