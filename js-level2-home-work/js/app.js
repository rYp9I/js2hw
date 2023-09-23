//  1. Найдите числа в массиве которые делятся на 3 без остатка
const arr0 = [90, 124, 55, 9213, 159, 225, 1543, 1545];
const devideArr=[];
for (let i = 0; i < arr0.length; i++) {
  if (arr0[i] % 3 === 0) { devideArr.push(arr0[i])
  }
}
console.log(devideArr);
// ответ---(5) [90, 9213, 159, 225, 1545]

//  2. Посчитайте финальную стоимость всех продуктов в корзине и выведите результат как переменную в консоль лог

 const shoppingCart = [
   {
    name: 'Cheese',
    count: 4,
    pricePerItem: 100
    
  },
  {
    name: 'Water',
    count: 5,
    pricePerItem: 23
    
  },
  {
    name: 'Banana',
     count: 8,
   pricePerItem: 55
    
  },
  {
    name: 'Choccolate',
    count: 2,
     pricePerItem: 115
    
   }
 ];
 let chek = 0;
 for(let i of shoppingCart){
  chek += (i.count * i.pricePerItem)
 }

 console.log(`chek: ${chek}`)
// Ответ--- 1185
//3. Посчитайте сумму всех чисел внутри массива массивов. Присвойте переменной и выведете в консоль.
 const arr = [
   [100, 1230, 1293123, 1236478, 9816],
   [9932, 2123123, 1293123, 1203123, 1239],
   [12391, 1235, 1123994, 1203123, 5543243],
   [1203, 92346, 288, 12309, 5543243],
   [94324, 8236, 123, 86231, 8455322],
   [2340123, 172, 123, 321, 38421340],
 ]
let sum =0;
for(let i of arr){
    for(let j of i) {
        sum +=j;
    }
}
console.log(`suma arr: ${ sum}`);
// Ответ---suma arr: 70110977

//4. Добавить в массив uniqueArray только не повторяющиеся значения из arr
 const arr2 = ["php", "php", "css", "css",
   "script", "script", "html", "html", "java", "java", "go", "Python", "Python"
 ];
 const uniqueArray = new Set(arr2);
 console.log(Array.from(uniqueArray));
 // Ответ ---['php', 'css', 'script', 'html', 'java', 'go', 'Python']
 
//5. В объекте result должны быть свойства в которых ключ это элемент массива arr а значение - количество этих элементов в массиве arr
 const arr3 = ['Jane','Bob','Bob','Luci','Jane','Bob','Peter','Felix','Felix','Bob','Andrew'];
 const result = {};
    for (let i of arr3) {
      if (result[i] != undefined)
         result[i] ++
    else ( result[i] = 1);
  }
  console.log(result);
// Ответ ---Andrew:1 Bob:4 Felix:2 Jane: 2 Luci :1 Peter: 1
