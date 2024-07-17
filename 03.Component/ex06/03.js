import fs from 'fs';

console.log("== Violation ===================================");
let order=JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder = Object.assign({}, order, {receive: '강남구 논현동...'});
updateOrder.payment.method="mobile";

//mobile로  바꿨을때 이전객체도 바뀜 → 새로운 객체를 만든 것이 아님. deep copy가 아닌 얕은 copy인 것을 알 수 있음.
//04.js에서 react-addons-update 를 사용
console.log(order, updateOrder);

