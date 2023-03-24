function repeatStringNumTimes(str, num) {
   let repeat ="";
  if(num <= 0) {
    return "";
  }
  for (let i=1 ; i <= num; i++) {
     repeat = str+repeat;
  }
   str = repeat;
  return str;
}

repeatStringNumTimes("abc", 3);
