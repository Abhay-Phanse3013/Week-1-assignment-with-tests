/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  var sz = transactions.length;
  var uniqueList = [];
  var list = [];
  for(var i=0; i<sz; i++) {
    var object = transactions[i];

    if(uniqueList.includes(object.category)==false){
        // not found
        uniqueList.push(object.category);
        list.push({category: object.category, totalSpent: object.price});
    }
    else {
      // found
      var foundObject = list.find(obj => obj.category === object.category);

      foundObject.totalSpent += object.price;
    }
  }

  return list;
   

}




module.exports = calculateTotalSpentByCategory;
