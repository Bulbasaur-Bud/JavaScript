// const inventory = {
//   sunglasses: 0,
//   pants: 1088,
//   bags: 1344,
// };

// const checkInventory = (order) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let inStock = order.every((item) => inventory[item[0]] >= item[1]);
//       if (inStock) {
//         resolve(`Thank you. Your order was successful.`);
//       } else {
//         reject(
//           `We're sorry. Your order could not be completed because some items are sold out.`
//         );
//       }
//     }, 1000);
//   });
// };

// module.exports = { checkInventory };

// //Item inside the store in OBJECT form
// const store = {
//   sunglasses: {
//     inventory: 817,
//     cost: 9.99,
//   },
//   pants: {
//     inventory: 236,
//     cost: 7.99,
//   },
//   bags: {
//     inventory: 17,
//     cost: 12.99,
//   },
// };

// //Explain this.
/*
// The selected code block defines a function called checkInventory that takes in an order object as a parameter. Inside the function, an array called itemsArr is created by accessing the items property of the order object. Then, the variable inStock is assigned the result of the every() method being called on itemsArr. This method checks if every element in itemsArr meets a certain condition. The condition is specified as a callback function that checks if the inventory of each item in the store is greater than or equal to the quantity specified in the item array. The result of the every() method is assigned to inStock. If inStock is true, meaning all items are in stock, a total variable is initialized to 0. Then, a forEach() method is called on itemsArr to calculate the total cost by multiplying the quantity (item[1]) with the cost of each item in the store (store[item[0]].cost) and adding it to total. Finally, a success message is printed to the console and a promise is resolved with the order and total as the resolution value. If any items are not in stock, a rejection message is returned with a promise.
*/
// const checkInventory = (order) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const itemsArr = order.items;
//       let inStock = itemsArr.every(
//         (item) => store[item[0]].inventory >= item[1]
//       );

//       if (inStock) {
//         let total = 0;
//         itemsArr.forEach((item) => {
//           total += item[1] * store[item[0]].cost;
//         });
//         console.log(
//           `All of the items are in stock. The total cost of the order is ${total}.`
//         );
//         resolve([order, total]);
//       } else {
//         reject(
//           `The order could not be completed because some items are sold out.`
//         );
//       }
//     }, generateRandomDelay());
//   });
// };

// const processPayment = (responseArray) => {
//   const order = responseArray[0];
//   const total = responseArray[1];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let hasEnoughMoney = order.giftcardBalance >= total;
//       // For simplicity we've omited a lot of functionality
//       // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
//       if (hasEnoughMoney) {
//         console.log(
//           `Payment processed with giftcard. Generating shipping label.`
//         );
//         let trackingNum = generateTrackingNumber();
//         resolve([order, trackingNum]);
//       } else {
//         reject(`Cannot process order: giftcard balance was insufficient.`);
//       }
//     }, generateRandomDelay());
//   });
// };

// const shipOrder = (responseArray) => {
//   const order = responseArray[0];
//   const trackingNum = responseArray[1];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         `The order has been shipped. The tracking number is: ${trackingNum}.`
//       );
//     }, generateRandomDelay());
//   });
// };

// // This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
// function generateTrackingNumber() {
//   return Math.floor(Math.random() * 1000000);
// }

// // This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
// function generateRandomDelay() {
//   return Math.floor(Math.random() * 2000);
// }

// module.exports = { checkInventory, processPayment, shipOrder };

// const store = {
//   sunglasses: {
//     inventory: 817,
//     cost: 9.99,
//   },
//   pants: {
//     inventory: 236,
//     cost: 7.99,
//   },
//   bags: {
//     inventory: 17,
//     cost: 12.99,
//   },
// };

// const checkInventory = (order) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const itemsArr = order.items;
//       console.log(itemsArr);
//       let inStock = itemsArr.every(
//         (item) => store[item[0]].inventory >= item[1]
//       );
//       console.log(inStock);

//       if (inStock) {
//         let total = 0;
//         itemsArr.forEach((item) => {
//           total += item[1] * store[item[0]].cost;
//         });
//         console.log(total);
//         console.log(
//           `All of the items are in stock. The total cost of the order is ${total}.`
//         );
//         resolve([order, total]);
//       } else {
//         reject(
//           `The order could not be completed because some items are sold out.`
//         );
//       }
//     }, generateRandomDelay());
//   });
// };

// const processPayment = (responseArray) => {
//   const order = responseArray[0];
//   const total = responseArray[1];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let hasEnoughMoney = order.giftcardBalance >= total;
//       // For simplicity we've omited a lot of functionality
//       // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
//       if (hasEnoughMoney) {
//         console.log(
//           `Payment processed with giftcard. Generating shipping label.`
//         );
//         let trackingNum = generateTrackingNumber();
//         resolve([order, trackingNum]);
//       } else {
//         reject(`Cannot process order: giftcard balance was insufficient.`);
//       }
//     }, generateRandomDelay());
//   });
// };

// const shipOrder = (responseArray) => {
//   const order = responseArray[0];
//   const trackingNum = responseArray[1];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         `The order has been shipped. The tracking number is: ${trackingNum}.`
//       );
//     }, generateRandomDelay());
//   });
// };

// // This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
// function generateTrackingNumber() {
//   return Math.floor(Math.random() * 1000000);
// }

// // This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
// function generateRandomDelay() {
//   return Math.floor(Math.random() * 2000);
// }

// module.exports = { checkInventory, processPayment, shipOrder };

//Promise ALL

// const checkAvailability = (itemName, distributorName) => {
//   console.log(`Checking availability of ${itemName} at ${distributorName}...`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (restockSuccess()) {
//         console.log(`${itemName} are in stock at ${distributorName}`);
//         resolve(itemName);
//       } else {
//         reject(
//           `Error: ${itemName} is unavailable from ${distributorName} at this time.`
//         );
//       }
//     }, 1000);
//   });
// };

// module.exports = { checkAvailability };

// // This is a function that returns true 80% of the time
// // We're using it to simulate a request to the distributor being successful this often
// function restockSuccess() {
//   return Math.random() > 0.2;
// }

/*
this is the brainstormDinner function. It's a little silly. It returns a promise that uses a series of setTimeout() functions to simulate a time-consuming asynchronous action. It's a good example of "callback hell" or "the pyramid of doom," two ways people describe how confusing a bunch of nested callback functions can become.
*/

// const brainstormDinner = () => {
//   return new Promise((resolve, reject) => {
//     console.log(`I have to decide what's for dinner...`);
//     setTimeout(() => {
//       console.log("Should I make salad...?");
//       setTimeout(() => {
//         console.log("Should I make ramen...?");
//         setTimeout(() => {
//           console.log("Should I make eggs...?");
//           setTimeout(() => {
//             console.log("Should I make chicken...?");
//             resolve("beans");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   });
// };

// module.exports = brainstormDinner;

/*
This is the shopForBeans function. It uses a setTimeout() function to simulate a time-consuming asynchronous action. The function returns a promise with a resolved value of a string representing a type of bean. It settles on a random beanType from the beanTypes array using Math.random().
*/

// const shopForBeans = () => {
//   return new Promise((resolve, reject) => {
//     const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
//     setTimeout(() => {
//       let randomIndex = Math.floor(Math.random() * beanTypes.length);
//       let beanType = beanTypes[randomIndex];
//       console.log(`2. I bought ${beanType} beans because they were on sale.`);
//       resolve(beanType);
//     }, 1000);
//   });
// };

// module.exports = shopForBeans;

/*
This is the shopForBeans function from the last exercise
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * 5);
      let beanType = beanTypes[randomIndex];
      console.log(`I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
};

let soakTheBeans = (beanType) => {
  return new Promise((resolve, reject) => {
    console.log("Time to soak the beans.");
    setTimeout(() => {
      console.log(`... The ${beanType} beans are softened.`);
      resolve(false);
    }, 1000);
  });
};

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log("Time to cook the beans.");
    setTimeout(() => {
      if (isSoftened) {
        console.log("... The beans are cooked!");
        resolve("\n\nDinner is served!");
      }
    }, 1000);
  });
};

module.exports = { shopForBeans, soakTheBeans, cookTheBeans };
