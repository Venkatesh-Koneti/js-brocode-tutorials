// .toLocaleString() = returns a string with a language 
//                                  sensitive representation of a number
//                                 .toLocaleString("locale", {options});

let number = 123456.789;

number = number.toLocaleString("en-US");
number = number.toLocaleString("hi-IN");
number = number.toLocaleString("de-DE");
number = number.toLocaleString(undefined);

number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
number = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

console.log(number);