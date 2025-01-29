//1st question
for ( var i = 1; i <=10; i++) {
    console.log(i)
}

//2nd question
var sum=0;
for ( var i = 1; i <= 5; i++) {
    sum=sum+i
}
console.log(sum)

//3rd question
for (var x =2; x<=20; x+=2){
    console.log(x)
}
// 4th question
for ( var y = 10; y>=1; y--) {
    console.log(y)
}

//5th question
for (var z=5;z<=50;z+=5){
    console.log(z)
}

//MCQ's

for (let i = 0; i < 10; i++){
    console.log(i)
}
for (let i = 5; i > 0; i--) {
    console.log(i);
}
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 2; j++){
        console.log(i + j);
    }
}

for (let i = 0; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}



// for (let i = 0; i < 3; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }


for (let i = 0; i <= 3; i++, console.log(i));

for (let i = 0; i < 10; i = i + 3) {
    console.log(i);
  }
for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
  for (let i = 1; i < 20; i *= 3) {
    console.log(i);
  }
  for (let i = 5; i; i--) {
    console.log(i);
  }
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
      console.log(i, j);
    }
  }
        
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(i, j);
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = i; j < 3; j++) {
      console.log(i, j);
    }
  }


let result = '';
for (let i = 0; i < 3; i++) {         // 0                 1                 2
    for (let j = 0; j < 3; j++) {     // 0      1     2    0    1     2      0       1       2
        result += i + '' + j + ' ';    // 0 0   0 1  0 2   1 0  1 1   1 2    2 0     2 1     2 2
    }
}
console.log(result);  
for (let i = 0; i < 4; i++) {
    for (let j = i; j >= 0; j--) {
      console.log(i, j);
    }
}

for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
      if (i === j) break;
      console.log(i, j);
    }
}
for (let i = 3; i > 0; i--) {
    for (let j = 3; j > i; j--) {
      console.log(i, j);
    }
  }
console.clear();
for (let i = 0; i < 3; i++) {        //     0                 1                                                                             
    for (let j = 0; j < 3; j++) {    //     0     1      2    0     1     2                                                     
      if (i === 2) break;
      console.log(i, j);             //    0 0    01     02   10    11    12                                                                       
    }
}
  
    
  
// for (let i = 0;; i++) {
//     let i = 5;
//     console.log(i);
//   }
    
