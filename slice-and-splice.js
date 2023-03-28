function frankenSplice(arr1, arr2, n) {
  let newArry = [];
   newArry = arr2.slice()
   for(let i=0; i <arr1.length; i++){
       newArry.splice(n,0,arr1[i])
       n++;
   }
   
  return newArry;
}

frankenSplice([1, 2, 3], [4, 5], 1);
