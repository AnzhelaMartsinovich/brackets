module.exports = function check(str, bracketsConfig) {
  //преобразуем строку в массив и в разделитель ничего не указываем, что бы каждый символ из строки был отдельным индексом массива
  let arrStr = str.split('');

  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
    
      let firstBracket = bracketsConfig[j][0], 
        secondBracket = bracketsConfig[j][1];
      
      if (arrStr[i] === firstBracket && arrStr[i + 1] === secondBracket) {
        //если скобки сошлись, то удаляем их из arrStr
        arrStr.splice(i, 2);
        i = -1;  
      }
    }
  }
  return (arrStr.length === 0) ?  true :  false;



  // let brackets = '';

  // for (let i = 0; i < bracketsConfig.length; i++) {
  //     for (let j = 0; j < bracketsConfig[i].length; j++) {
  //         brackets += bracketsConfig[i][j];
  //     }
  // }

  // if (str === brackets) {
  //     // console.log('true');
  //   return true;
  // }
  // // console.log('false');
  // return false;
}
