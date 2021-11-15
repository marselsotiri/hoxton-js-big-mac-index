let usBigMac=5.66

// Index 

let inbr=0.74
let inau=1.35
let inca=1.25
let insw=0.92
let ineu=0.87

// End

let brBigMac=usBigMac * inbr
let auBigMac=usBigMac * inau
let caBigMac=usBigMac * inca
let swBigMac=usBigMac * insw
let euBigMac=usBigMac * ineu

console.log(brBigMac);
console.log(auBigMac);
console.log(caBigMac);
console.log(swBigMac);
console.log(caBigMac);

console.log(Boolean(brBigMac > usBigMac));
console.log(Boolean(brBigMac === auBigMac));
console.log(Boolean(brBigMac < caBigMac));
console.log(Boolean(brBigMac < swBigMac));
console.log(Boolean(brBigMac > euBigMac));

console.log(Boolean(auBigMac > usBigMac));
console.log(Boolean(auBigMac > caBigMac));
console.log(Boolean(brBigMac < swBigMac));
console.log(Boolean(brBigMac > euBigMac));

console.log(Boolean(caBigMac > usBigMac));
console.log(Boolean(caBigMac => swBigMac));
console.log(Boolean(caBigMac === euBigMac));

console.log(Boolean(swBigMac > usBigMac));
console.log(Boolean(swBigMac > euBigMac));

brBigMac="British Pound"
auBigMac="Australian Dollar"
caBigMac="Canadian Dollar"
swBigMac="Swiss Franc"
euBigMac="Europian Euro"

console.log(auBigMac + " has a higher BMI");
console.log(brBigMac + " has a lower BMI");
