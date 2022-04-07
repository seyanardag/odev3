// k => bir seferlik para çekme limiti (number),
// amounts => müşterilerin ilk sıralamasına göre oluşturulan hesap bakiyeleri (array)

let k = 2;
let amounts = [3, 2, 1, 2, 7];
// sıralama = [0, 1, 2, 3, 4];

function getFinalOrder(k, amounts) {
  let lastOrder = [];
  let amountsObject = [];
  let tempObj = amountsObject;

  amounts.forEach((element, index) => {
    amountsObject.push({
      no: index,
      amount: element,
    });
  });

  console.log(amountsObject);
  let index = 0;
  while (amountsObject.length>0) {
    amountsObject.splice(0,1)
    lastOrder.push(amountsObject[0].no);
    console.log(amountsObject);    
 }

  console.log(amountsObject);

  // while (amountsObject.length == 4) { 
  //    console.log(amountsObject.length)
  //   if (amountsObject[index] <= k) {
  //     //amount k ya eşit veya küçükse
  //     amountObj.amount = 0;
  //     lastOrder.push(amountObj.no);

  //     tempObj.splice(index, 1);
  //     amountObj = tempObj;
  //     index--
  //   }

  //   index++;
  //   if (index == amountsObject.length) {
  //     index = 0;
  //   } else if (amountsObject.length == 0) {
  //     break
  //   }
  // }

  // amountsObject.map((amountObj, index) => {

  // });

  console.log("SON SATIRDA AMOUNTS OBJECT:", amountsObject);
  console.log("SON SATIRDA LAST ORDER:", lastOrder);
  console.log("SON SATIRDA LAST tempObj:", tempObj);
}

getFinalOrder(k, amounts);

// console.log("amount:", amountsObject);
// console.log("index:", index);
// console.log("***************************");

// amountsObject.map((amountObj, index) => {
//   console.log("amount:", amountObj);
//   console.log("index:", index);
//   console.log("***************************");
//   if (amountObj.amount <= k) {
//     //amount k ya eşit veya küçükse
//     amountObj.amount = 0;
//     lastOrder.push(amountObj.no);
//     tempObj.splice(index,1)
//     amountObj=tempObj
//   }

// });
