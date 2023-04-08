//first 100 ticket price is = 100;
//2nd 100 ticket price is =90;

//onother all ticket price is =70;


function priceDiscount(number){
 let first100ticketPrice=100;
 let second100ticketPrice=90;
 let ontherTicketPrice=70;

 if(number<=100){
   let discountPrice=number * first100ticketPrice;
    return discountPrice;
    
 }
 else if(number > first100ticketPrice && number <= 200){
    let first100price=first100ticketPrice * first100ticketPrice;
    let hundredUp= number- first100ticketPrice;
    let hundreadUpTotalTricket=hundredUp * second100ticketPrice;
   let discountPrice =hundreadUpTotalTricket + first100price;
    return discountPrice;

 }
 else if( number > 200){
    let first100price=first100ticketPrice * first100ticketPrice;//10000
    let hundredUp= first100ticketPrice * second100ticketPrice;//9000
    let twoHundredUp= number - 200;
    let twoHundredUpTotal=twoHundredUp * ontherTicketPrice;
    let discountPrice =hundredUp + first100price + twoHundredUpTotal;
   return discountPrice;
 }


}

console.log(priceDiscount(120))