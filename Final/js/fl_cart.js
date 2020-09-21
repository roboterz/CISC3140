"use strict";

/*
   final project

   Shopping Cart Form Script
   
   Author: Jiongjun Liu
   Date:   07/05/2020
   
   Filename: fl_Shop.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 


window.onload = calcCart;

document.getElementById("game1Qty").addEventListener("change", calcCart);
document.getElementById("game2Qty").addEventListener("change", calcCart);
document.getElementById("game3Qty").addEventListener("change", calcCart);
document.getElementById("game4Qty").addEventListener("change", calcCart);


function calcCart(){
	var order1Cost = document.getElementById("game1price").value * document.getElementById("game1Qty").value;
	document.getElementById("order1Cost").value = formatUSCurrency(order1Cost);
	
	var order2Cost = document.getElementById("game2price").value * document.getElementById("game2Qty").value;
	document.getElementById("order2Cost").value = formatUSCurrency(order2Cost);

	var order3Cost = document.getElementById("game3price").value * document.getElementById("game3Qty").value;
	document.getElementById("order3Cost").value = formatUSCurrency(order3Cost);

	var order4Cost = document.getElementById("game4price").value * document.getElementById("game4Qty").value;
	document.getElementById("order4Cost").value = formatUSCurrency(order4Cost);
	
	var subTotal = order1Cost + order2Cost + order3Cost + order4Cost;
	document.getElementById("subTotal").value = formatNumber(subTotal,2);
	
	var salesTax = 0.08 * subTotal;
	document.getElementById("salesTax").value = formatNumber(salesTax,2);
	
	var cartTotal = subTotal + salesTax;
	document.getElementById("cartTotal").value = formatUSCurrency(cartTotal);
	
	
}

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
