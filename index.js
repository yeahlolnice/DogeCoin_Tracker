let coinspot = require('coinspot-api');

require('dotenv').config();

const fetch = require("node-fetch");

let key = process.env.FULL_ACCESS; // insert your key here
let secret = process.env.FULL_ACCESS_SECRET; // insert your secret here
 
let coinspotClient = new coinspot(key, secret);
 
// Simple balance check
// coinspotClient.balances((e, data) => {
// 	data = JSON.parse(data);
//     console.log(data["balance"]);
// })

let bid = 0;

setInterval(() => {
	fetch('https://www.coinspot.com.au/pubapi/latest')
		.then(response => response.json())
		.then(data => {
			// console.log(data.prices["doge"])
			if (bid < data.prices.doge.bid) {
				bid = data.prices.doge.bid;
				console.log(`going to the moon🚀-- new bid is ${bid}`);
			}else if (bid === data.prices.doge.bid) {
				console.log(`Doge is at ${bid}`)
			}
			else{
				console.log("not going to the moon");
			}
			
			
		});
}, 5000);

console.log(bid);


// fetch to get doge prices

// fetch('https://www.coinspot.com.au/pubapi/latest')
//   .then(response => response.json())
//   .then(data => console.log(data.prices["doge"]));