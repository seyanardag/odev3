// k => bir seferlik para çekme limiti (number),
// amounts => müşterilerin ilk sıralamasına göre oluşturulan hesap bakiyeleri (array)

let k = 2;
let amounts = [3, 9, 0,3, 2, 7];
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

  // console.log(amountsObject);
  let index = 0;
  while (amountsObject.length >= 1) {
    // console.log(amountsObject[index].amount);
    if (amountsObject[index].amount <= k) {
      lastOrder.push(amountsObject[index].no);
      amountsObject.splice(index, 1);
    } else {
      amountsObject[index].amount -= k;
      amountsObject.push(amountsObject[index]);
      amountsObject.splice(index, 1);
    }
  }

  // console.log("SON SATIRDA AMOUNTS OBJECT:", amountsObject);
  // console.log("SON SATIRDA LAST ORDER:", lastOrder);
  // console.log("SON SATIRDA tempObj:", tempObj);

  return lastOrder
}

console.log(getFinalOrder(k, amounts))