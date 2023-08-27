
// 1)Написать функцию, которая получает в качестве аргумента число и строку, 
//где число обозначает сколько раз должна быть добавлена эта строка в массив. 
//Возвращает массив из этих строк. 
// Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].


// const repeatedStrings = repeatString( 3, "dogs");

// function repeatString(number, String){
//     const finalArray = new Array(number).fill(String);
//     return finalArray;
// }
// console.log(repeatedStrings);


// 2)Написать функцию, которая получает в качестве аргумента массив с числами. 
// Функция нужна для расчета суммы четных чисел в массиве. Так же написать новую функцию для расчета суммы нечетных чисел в массиве. 
// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.




// let arr = [2,4,5,66,42,27];
// let sumEven = 0;
// let sumOdd = 0;

//     for (let i=0; i<arr.lenght; i++){
//         if(arr[i]%2===0){
//             sumEven += arr[i];
//         }else {
//             sumOdd +=arr[i];
//         }
//         if(sumEven >sumOdd){
//             console.log(sumEven-sumOdd);
//         }else{
//             if(sumEven<sumOdd){
//                 console.log(sumOdd-sumEven);
//             }
//         }
//     }




// 3)Напишите функцию, которая как аргумент принимает строку. 
// Эта функция возвращает это слово в развернутом виде. Пример:  “cat” => “tac”


// let myString = "cat";
// let splitString = myString.split("");
// console.log(splitString.reverse(""));



// 4)Написать функцию, которая будет находить максимальное число в массиве.

// let arr = [4,5,3,7,89,2,5];

// let result = 0;

// for(let i=0; i< arr.length; i++){
//     if(arr[i]>arr.length)
//     console.log(arr[i]);
// }



// 5)написать функцию, которая будет находить минимальное число в массиве.

// let arr =[2,5,10,3,14,55];

// for (let i = 0; i<arr.length; i++){
//     if(arr[i]< arr.length)
//     console.log(arr[i]);
// }
