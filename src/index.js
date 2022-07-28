module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];

  bracketsConfig.forEach((brPair) => {
    openBrackets.push(brPair[0]);
    closeBrackets.push(brPair[1]);
  });

    let bracketsPairObj = {};

  bracketsConfig.forEach((brPair) => {
      bracketsPairObj[brPair[1]] = brPair[0];
  });

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let curSymbol = str[i];
    
    let topElem = stack[stack.length - 1];

    if (stack.length === 0) {
      stack.push(curSymbol);
    } else if (closeBrackets.includes(curSymbol) && topElem === bracketsPairObj[curSymbol]) {
      
      stack.pop()
    } else {
      stack.push(curSymbol);
    }

  }

  return stack.length === 0;


  // let openBrackets = [];

  // bracketsConfig.forEach((brPair) => {
  //   openBrackets.push(brPair[0]);
  // });

  // // console.log(openBrackets);

  //   let bracketsPairObj = {};

  // bracketsConfig.forEach((brPair) => {
  //     bracketsPairObj[brPair[1]] = brPair[0];
  // });

  // // console.log(bracketsPairObj);

  
  // let stack = [];

  // for (let i = 0; i < str.length; i++) {
  //   let curSymbol = str[i];

  //   if (openBrackets.includes(curSymbol)) {
  //     stack.push(curSymbol);
  //   } else {
  //     if (stack.length === 0) {
  //       return false;
  //     }

  //     let topElem = stack[stack.length - 1];

  //     if (bracketsPairObj[curSymbol] === topElem) {
  //       stack.pop();
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  // return stack.length === 0;
  
  // // your solution
}
