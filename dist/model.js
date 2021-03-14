var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost;
//using typeof function to look inside a union types
if (typeof originalCost === "number") {
    var cost = originalCost; //returns a number
}
else {
    var item = originalCost; // returns a string
}
//specifying the typeOF string you want outside
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    inventoryType: InventoryItemType.Computer,
    trackingNumber: "MBP123456",
    createDate: new Date(),
});
