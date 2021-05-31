function getAllCases(dob) {
  const splitArr = dob.split('-');
  return {
    yyyy_mm_dd: splitArr.join('-'),
    dd_yyyy_mm: [splitArr[2], splitArr[0], splitArr[1]].join('-'),
    mm_dd_yyyy: [splitArr[1], splitArr[2], splitArr[0]].join('-'),
    dd_mm_yyyy: splitArr.reverse().join('-'),
    mm_yyyy_dd: [splitArr[2], splitArr[0], splitArr[1]].join('-'),
    yyyy_dd_mm: [splitArr[1], splitArr[2], splitArr[0]].join('-'),
  };
}

function checkPalindrome(dob) {
  const dobJoin = dob.replace('-', '');
  let isPalindrome = true;
  console.log(dobJoin);
  console.log('=======');
  for (let i = 0; i < 8; i++) {
    console.log(dobJoin[i], dobJoin[7 - i]);
    if (dobJoin[i] !== dobJoin[7 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

function calcPalindrome(dob) {
  // const stringToCheck = dob.split('-').join('');
  Object.values(getAllCases(dob)).forEach((d) => {
    alert(checkPalindrome(d));
  });
}

export default calcPalindrome;
