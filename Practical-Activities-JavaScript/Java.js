let hello = "Hello";
hello += " world";
console.log(hello);

class Character {
constructor(name, health, strength, hairColor, clothesColor, goldCoins) {


// Chest Class
class Chest {
constructor(isOpen, coins) {
this.isOpen = isOpen;
this.coins = coins;

openChest() {
if (!this.isOpen) {
this.isOpen = true;
this.coins = 0;
console.log("Chest opened! Collected 10 coins!");
document.getElementById("chest").src = "chest-open.png";

Create a new chest instance
const myChest = new Chest(false, 100);

// Open the chest
myChest.openChest();

console.log(myChest.coins);