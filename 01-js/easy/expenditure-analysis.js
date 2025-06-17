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
  let answer = [];
  const catergoryTotals = {};
  for (const transaction of transactions) {
    const category = transaction.category;
    const price = transaction.price;
    console.log(transaction, category, price);
    if (catergoryTotals[category]) {
      catergoryTotals[category] += price;
    } else {
      catergoryTotals[category] = price;
    }
  }
  console.log("catergoryTotals", catergoryTotals);
  for (const category in catergoryTotals) {
    console.log(category);
    answer.push({
      category: category,
      totalSpent: catergoryTotals[category],
    });
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
