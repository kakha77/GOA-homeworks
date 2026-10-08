function openOrSenior(data){
  return data.map( ([age, man]) =>{
    if( age >=55 && man >7){
      return 'Senior';
      } else {
        return 'Open';
      }
  });
}









function positiveSum(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum
}






