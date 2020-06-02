/*প্রোজেক্ট বাংলা জে এস ------ Preject - Bangla JS */
/*জাভাস্ক্রিপ্টকে বাংলা শেখাও ----- Teach Javascript Bangla*/

// দশমিক চিণহ ব্যাবহারের পরিবর্তে '।' দঁআড়ি  ব্যাবহার করুন। 
// দুটিই কাজ করবে। 
//Use dari sign instead of point since avro doesn't support point
//Both thing will do the work
// কপিরাইট ২০২০ নূর মাহমুদ উল আলম তাসিন। 
// Copyright 2020 Nur Mahmud Ul Alam Tasin.
const b2e=require('./b2eDigit')
const e2b=require('./e2bDigit')
const checker=require('./check')
const bangla={
	plus:(...nums)=>{
		var ans=0;
		for(var i=0;i<=nums.length -1;i++){
			if(typeof nums[i] !=='string'){
				throw Error('Numbers must be in string. (because of being bengali digits.)');
			}
			else if(checker(nums[i])){
				ans+=b2e(nums[i]);
			}
			else if(!checker(nums[i])){
				throw Error('Use bangla functions when the inputs are in bengali characters only.');
			}
		}
		return e2b(ans);
	},
	minus:(...nums)=>{
		var ans=0;
		for(var i=0;i<=nums.length -1;i++){
			if(typeof nums[i] !=='string'){
				throw Error('Numbers must be in string. (because of being bengali digits.)');
			}
			else if(checker(nums[i])){
				if(i===0){
					ans=b2e(nums[0]);
				}else{
					ans-=b2e(nums[i]);
				}
			}
			else if(!checker(nums[i])){
				throw Error('Use bangla functions when the inputs are in bengali characters only.');
			}
		}
		return e2b(ans);
	},
	multiply:(...nums)=>{
		var ans=1;
		for(var i=0;i<=nums.length -1;i++){
			if(typeof nums[i] !=='string'){
				throw Error('Numbers must be in string. (because of being bengali digits.)');
			}
			else if(checker(nums[i])){
				ans*=b2e(nums[i]);
			}
			else if(!checker(nums[i])){
				throw Error('Use bangla functions when the inputs are in bengali characters only.');
			}
		}
		return e2b(ans);
	},
	divide:(...nums)=>{
		var ans=1;
		for(var i=0;i<=nums.length -1;i++){
			if(typeof nums[i] !=='string'){
				throw Error('Numbers must be in string. (because of being bengali digits.)');
			}
			else if(checker(nums[i])){
				ans/=b2e(nums[i]);
			}
			else if(!checker(nums[i])){
				throw Error('Use bangla functions when the inputs are in bengali characters only.');
			}
		}
		return e2b(ans);
	},
	pow:(base,power)=>{
		if(checker(base) && checker(power) && typeof base==='string' && typeof power==='string'){
			return e2b(b2e(base)**b2e(power));
		}else if(!checker(base) || !checker(power)){
			throw Error('Use bangla functions when the inputs are in bengali characters only.');
		}else if(typeof base!=='string' || typeof power!=='string'){
			throw Error('Numbers must be in string. (because of being bengali digits.)');
		}
	},
	sqrt:(num)=>{
		return bangla.pow(num,'০।৫');
	},
	cbrt:(num)=>{
		return bangla.pow(num,bangla.divide('১','৩'));
	},
	nthrt:(num,n)=>{
		return bangla.pow(num,bangla.divide('১',n));
	}
}
module.exports=bangla;
