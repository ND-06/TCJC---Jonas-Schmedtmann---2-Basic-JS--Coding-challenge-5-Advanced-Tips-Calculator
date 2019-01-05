/*  CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
*/

var tipsJohn = {  // We create an object by the litteral way
                  // We create some properties related to our object 
fullName: "John Smith",  
billsValues: [124, 48, 268, 180, 42],   
tipsPaid: [], // We create a empty array where we will store differents amounts of tips paid by John
finalPaidAmount: [], // We create also a empty array where we will store final paid amounts (bill+tips)
calcTip: function() {  // We include , inside the object, a function which allows us to calculate tips amounts by using loop and if/else statements
  for (var i = 0; i < this.billsValues.length; i++) {
    if (this.billsValues[i] < 50) {
      this.tipsPaid.push((this.billsValues[i] / 100) * 20);       
      } else if (this.billsValues[i] >= 50 && this.billsValues[i] <= 200) {
        this.tipsPaid.push((this.billsValues[i] / 100) * 15);       
      } else {
        this.tipsPaid.push((this.billsValues[i] / 100) * 10);       
      }
    }
    for (var i = 0; i < this.tipsPaid.length; i++) {    // We make a loop to calculate the finalPaidAmount for each bill and we inject results in finalPaidAmount array
      this.finalPaidAmount.push(this.tipsPaid[i]+this.billsValues[i]);
    }
  }
} 

tipsJohn.calcTip(); // We call our tipCalculator function for John

console.log("John and his family paid the following tips in USD: " + tipsJohn.tipsPaid + '.' + ' '+ "John paid the following amounts with tips included in each bill " + tipsJohn.finalPaidAmount + ' .');

var tipsMark = {  // We apply the same code for Mark

fullName: "Mark Gandolfi",  
billsValues: [77, 375, 110, 45], 
tipsPaid: [],
finalPaidAmount: [],
calcTip: function() {
  for (var i = 0; i < this.billsValues.length; i++) {
    if (this.billsValues[i] < 100) {
      this.tipsPaid.push((this.billsValues[i] / 100) * 20);       
      } else if (this.billsValues[i] >= 100 && this.billsValues[i] <= 300) {
      this.tipsPaid.push((this.billsValues[i] / 100) * 15);       
      } else {
      this.tipsPaid.push((this.billsValues[i] / 100) * 25);       
      }
    }
    for (var i = 0; i < this.tipsPaid.length; i++) {
      this.finalPaidAmount.push(this.tipsPaid[i]+this.billsValues[i]);
    }
  }
}

tipsMark.calcTip(); // We call the TipsCalculator function for Mark

console.log("Mark and his family paid the following tips in USD: " + tipsMark.tipsPaid + '.' + ' '+ "Mark paid the following amounts with tips included in each bill " + tipsMark.finalPaidAmount + ' .');

/* EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average */


function averageTips (tips) { // This function will allows us to calculate the averageTips paid by each family
var sum = 0;  // In order to do this, we use a loop which add each tip in our sum variable and we request to 
              // divide this sum by numbers of tips, the result will be the average tips paid.  
for (var i = 0; i < tips.length; i++) {
  sum+= tips[i];     
  }
  return sum / tips.length;
}

console.log("Mark and his family paid an average tip of " + averageTips(tipsMark.tipsPaid) + ' USD'); 
console.log("John and his family paid an average tip of " + averageTips(tipsJohn.tipsPaid) + ' USD');

if (averageTips(tipsMark.tipsPaid) > averageTips(tipsJohn.tipsPaid)) {     // We make an if/else statement to compare 
  console.log("Mark & his family paid the highest tips on average");       // which character paid the highest tips on average
  } else if (averageTips(tipsJohn.tipsPaid) > averageTips(tipsMark.tipsPaid)) {
    console.log("John & his family paid the highest tips on average");
  } else {
    console.log("John and Mark paid the same tips average");
}

