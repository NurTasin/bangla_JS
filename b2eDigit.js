module.exports=englishDigit
function englishDigit(num){
  if(typeof num!=='string'){
    throw Error('The number given must be in string.')
  }
  for(var i=0;i<num.length;i++){
    num=num.replace('০','0');
    num=num.replace('১','1');
    num=num.replace('২','2');
    num=num.replace('৩','3');
    num=num.replace('৪','4');
    num=num.replace('৫','5');
    num=num.replace('৬','6');
    num=num.replace('৭','7');
    num=num.replace('৮','8');
    num=num.replace('৯','9');
    num=num.replace(' ','');
    num=num.replace('।','.');
  }
  return +num;
}