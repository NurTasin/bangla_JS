module.exports=bengaliDigit
function bengaliDigit(num){
  num=num.toString();
  for(var i=0;i<num.length;i++){
    num=num.replace('0','০');
    num=num.replace('1','১');
    num=num.replace('2','২');
    num=num.replace('3','৩');
    num=num.replace('4','৪');
    num=num.replace('5','৫');
    num=num.replace('6','৬');
    num=num.replace('7','৭');
    num=num.replace('8','৮');
    num=num.replace('9','৯');
  }
  return num;
}