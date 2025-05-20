// Вивести кожен елемент масиву. 
// Вивести перші 3 елементи масиву
// Вивести суму всіх елементів
// Вивести суму всіх елементів окрім елемента що = 4;

let array = [4, 4, 8, 3, 3, 3, 2, 4, 4]
console.log('Виводжу кожен елемент масиву: ')
for(let a of array){
  console.log(a)
}
console.log('Виводжу перші 3 елементи масиву:')
for(let i = 0; i<3; i++){
  console.log(array[i])
}

console.log('Виводжу суму всіх елементів:')
let sum =0;
for(let a of array){
sum += a;
};
console.log(sum)

console.log('Виводжу суму всіх елементів окрім елемента що = 4:')
let sumExceptFour =0;
for(let a of array){
  if(a ==4){
    sumExceptFour += 0
  }
  else{
    sumExceptFour += a;
  }

};
console.log(sumExceptFour)
