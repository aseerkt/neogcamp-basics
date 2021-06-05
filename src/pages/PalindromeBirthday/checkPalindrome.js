function checkPalindrome(dob) {
  const dobString = dob.split('-').join('');
  const dobJoin = dobString;
  const reversedJoin = dobString.split('').reverse().join('');
  // console.log(dobJoin, reversedJoin);
  if (dobJoin === reversedJoin) return true;
  return false;
}

function getAllCases(dob) {
  const splitArr = dob.split('-');
  // YYYY-MM-DD dob format
  // ['YYYY', 'MM', 'DD'] splitArr format
  const formatsWithDate = {
    'YYYY-MM-DD': splitArr.join('-'),
    'DD-YYYY-MM': [splitArr[2], splitArr[0], splitArr[1]].join('-'),
    'MM-DD-YYYY': [splitArr[1], splitArr[2], splitArr[0]].join('-'),
    'MM-YYYY-DD': [splitArr[1], splitArr[0], splitArr[2]].join('-'),
    'YYYY-DD-MM': [splitArr[0], splitArr[2], splitArr[1]].join('-'),
    'DD-MM-YYYY': splitArr.reverse().join('-'),
  };
  return formatsWithDate;
}

function checkPalForAllCases(test_date) {
  let next_pal = false;
  let date_pal = null;
  let format_pal = null;
  Object.entries(getAllCases(test_date)).every(([format, date]) => {
    next_pal = checkPalindrome(date);
    // console.log(format, date, next_pal);
    if (next_pal) {
      date_pal = date;
      format_pal = format;
      return false;
    }
    return true;
  });
  return { isPal: next_pal, date: date_pal, format: format_pal };
}

function getNextDate(dob) {
  const date = new Date(dob);
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);
  const n_year = nextDate.getFullYear();
  const n_month = nextDate.getMonth() + 1;
  const n_day = nextDate.getDate();
  return `${n_year}-${n_month < 10 ? '0' : ''}${n_month}-${
    n_day < 10 ? '0' : ''
  }${n_day}`;
}

function getPrevDate(dob) {
  const date = new Date(dob);
  const prevDate = new Date(date);
  prevDate.setDate(prevDate.getDate() - 1);
  const p_year = prevDate.getFullYear();
  const p_month = prevDate.getMonth() + 1;
  const p_day = prevDate.getDate();
  return `${p_year}-${p_month < 10 ? '0' : ''}${p_month}-${
    p_day < 10 ? '0' : ''
  }${p_day}`;
}

function getDifferenceInDates(date1, date2) {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function getDateFromFormat(date, format) {
  const splitDate = date.split('-');
  const splitFormat = format.split('-');
  const yearIndex = splitFormat.findIndex((v) => v === 'YYYY');
  const monthIndex = splitFormat.findIndex((v) => v === 'MM');
  const dayIndex = splitFormat.findIndex((v) => v === 'DD');
  return new Date(
    [splitDate[yearIndex], splitDate[monthIndex], splitDate[dayIndex]].join('-')
  );
}

function calcPalindrome(dob, setMessage, setLoading) {
  const isPalindrome = checkPalForAllCases(dob);
  if (isPalindrome.isPal) {
    setMessage('Yay! your DOB is palindrome');
    setLoading(false);
    return;
  }
  let n_date = dob;
  let p_date = dob;
  let nearest_pal = false;
  let pal_date = null;
  let pal_format = null;
  while (!nearest_pal) {
    n_date = getNextDate(n_date);
    p_date = getPrevDate(p_date);
    const next_pal_date = checkPalForAllCases(n_date);
    const prev_pal_date = checkPalForAllCases(n_date);

    if (next_pal_date.isPal) {
      pal_date = next_pal_date.date;
      pal_format = next_pal_date.format;
      nearest_pal = true;
      break;
    }

    if (prev_pal_date.isPal) {
      pal_date = prev_pal_date.date;
      pal_format = prev_pal_date.format;
      nearest_pal = true;
      break;
    }
  }

  const diffDays = getDifferenceInDates(
    getDateFromFormat(dob, 'YYYY-MM-DD'),
    getDateFromFormat(pal_date, pal_format)
  );

  setMessage(
    `Nearest Palindrome date is ${pal_date} (${pal_format}) which is ${diffDays} days away from your date of birth`
  );
  setLoading(false);
  return;
}

export default calcPalindrome;
