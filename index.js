"use strict";
///Task # 17 ////
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
//only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//have an empty list at the end of your program
let guest_list = ["Arohi", "Kanwal", "Nimra", "Ahsan", "Hassan"];
guest_list.forEach(guest_list => {
    console.log(`Dear ${guest_list}, would you like to join me for dinner?`);
});
console.log(" \nSorry, the dinner table can only accommodate two guests.");
//Removing guest
while (guest_list.length > 2) {
    const removedGuest = guest_list.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, you can't be invited to dinne`);
    }
}
//print a message to remain guest
guest_list.forEach((remainingGuest) => {
    console.log(`${remainingGuest}, you're still invited to dinner.`);
});
guest_list.slice(0, 2);
console.log(guest_list);
