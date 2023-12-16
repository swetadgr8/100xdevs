/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let map = {};
  
  for(let trans of transactions){
    let category = trans["category"];
    let price = trans["price"];
    if(map.hasOwnProperty(category)){
       map[category] +=  price;
    }
    else{
      map[category] = price;
    }
  }

  let res = [];
  for(let key in map){
   let x = {"category" : key, "totalSpent": map[key]};
   res.push(x);
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;