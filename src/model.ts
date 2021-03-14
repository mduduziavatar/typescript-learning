let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();

type Cost = number | string;//Union types are use to tell TS to know that accepts more then one type .ie. "string" and number

let originalCost: Cost;

//using typeof function to look inside a union types

if(typeof originalCost === "number"){
   let cost:number = originalCost; //returns a number
}else{
    let item = originalCost; // returns a string
}

//specifying the typeOF string you want outside
enum InventoryItemType {
    Computer = "computer",
    Furniture = "furniture"
}

interface InventoryItem {
    displayName: string;
    inventoryType: "computer" | "furniture"; // or you can use a string instead "computer" | "furniture" using object literals
    readonly trackingNumber: string;
    createDate: Date;
    originalCost?: number;
    addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {
}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    inventoryType: InventoryItemType.Computer, //Using enum function to tell it typeOf items in object 
    trackingNumber: "MBP123456",
    createDate: new Date(),
});