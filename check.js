module.exports=checker;
letters=['a','b','c','d','e','f','g','h','i','j','k','l','m',
		 'n','o','p','q','r','s','t','u','v','w','x','y','z']
letters.forEach((val)=>{
	letters.push(val.toUpperCase());
})
for(var i=0;i<10;i++){
	letters.push(i.toString());
}
function checker(sentence){
	let a=true;
	for(var i=0;i<sentence.length;i++){
		letters.forEach((val)=>{
			if(val===sentence[i]){
				a=false;
				return;
			}
		})
	}
	return a;
}