// let usBigMac=5.66

// // Index 

// let inbr=0.74
// let inau=1.35
// let inca=1.25
// let insw=0.92
// let ineu=0.87

// // End

// let brBigMac=usBigMac * inbr
// let auBigMac=usBigMac * inau
// let caBigMac=usBigMac * inca
// let swBigMac=usBigMac * insw
// let euBigMac=usBigMac * ineu

// console.log(brBigMac);
// console.log(auBigMac);
// console.log(caBigMac);
// console.log(swBigMac);
// console.log(caBigMac);

// console.log(Boolean(brBigMac > usBigMac));
// console.log(Boolean(brBigMac === auBigMac));
// console.log(Boolean(brBigMac < caBigMac));
// console.log(Boolean(brBigMac < swBigMac));
// console.log(Boolean(brBigMac > euBigMac));

// console.log(Boolean(auBigMac > usBigMac));
// console.log(Boolean(auBigMac > caBigMac));
// console.log(Boolean(brBigMac < swBigMac));
// console.log(Boolean(brBigMac > euBigMac));

// console.log(Boolean(caBigMac > usBigMac));
// console.log(Boolean(caBigMac => swBigMac));
// console.log(Boolean(caBigMac === euBigMac));

// console.log(Boolean(swBigMac > usBigMac));
// console.log(Boolean(swBigMac > euBigMac));

// brBigMac="British Pound"
// auBigMac="Australian Dollar"
// caBigMac="Canadian Dollar"
// swBigMac="Swiss Franc"
// euBigMac="Europian Euro"

// console.log(auBigMac + " has a higher BMI");
// console.log(brBigMac + " has a lower BMI");


// the price of a Big Mac was $3.57 in the United States (varies by store)
// the price of a Big Mac was £2.29 in the United Kingdom (varies by region)
// the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
// this compares with an actual exchange rate of $2.00 to £1 at the time
// (2.00–1.56)/1.56 = 28%
// the pound was thus overvalued against the dollar by 28%

// const USBigMacPrice = 3.57

// const UKBigMacPrice = 2.29

// const UKPPP = USBigMacPrice / UKBigMacPrice

// const USDToGBP = 2.0

// const UKIndex = ((USDToGBP - UKPPP) / UKPPP) * 100

// console.log(
//   'The 2008 Big Mac Price Index for the UK was:',
//   UKIndex.toFixed(2) + '%'
// )

// A Big Mac costs C$6.77 in Canada and US$5.65 in the United States. The implied exchange rate is 1.20. The difference between this and the actual exchange rate, 1.27, suggests the Canadian dollar is 6% undervalued

const USBigMacPrice = 5.65

// CANADA

const CanadaBigMacPrice = 6.77

const CanadaPPP = CanadaBigMacPrice / USBigMacPrice

const USDtoCAD = 1.27

const CanadaIndex = ((USDtoCAD - CanadaPPP) / CanadaPPP) * 100

const CanadaIndexFixed = CanadaIndex.toFixed()

const message = `The 2021 Big Mac Price Index for Canada was: ${CanadaIndexFixed}%`

console.log(message)

// ISRAEL

// A Big Mac costs 17.00 shekels in Israel and US$5.65 in the United States. The implied exchange rate is 3.01. The difference between this and the actual exchange rate, 3.29, suggests the Israeli shekel is 8.6% undervalued

const IsraelBigMacPrice = 17.0

const IsraelPPP = IsraelBigMacPrice / USBigMacPrice

const USDtoINS = 3.29

const IsraelIndex = ((USDtoINS - IsraelPPP) / IsraelPPP) * 100

console.log(
  'The 2021 Big Mac Price Index for Canada was:',
  IsraelIndex.toFixed() + '%'
)
