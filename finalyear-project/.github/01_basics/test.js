//console.log("priya");
/*prefer not to use var since the issues of block of scope and functional of scope where if you change var
 varaiable of one will overwrite others also if let a; let varaible is not given any value you will get ouput as undefined */ 
const myArr=new Array(0,1,2,3,4,5);
const myAr=new Array(0,1,2,3,4,5);
const s1=myAr.slice(1,3);
const s2=myArr.splice(1,3);
console.log(s1)//for slice 3 is not included whereas in splice 3 is included that is the last number given in the splice and slice range
console.log(s2)//another difference is that
console.log(myAr)//for slice it does not affect the original data and just displayed the number between the given range
console.log(myArr)
//where as splice removed the range of numbers that came in as output of splice from original data thus original data is affected
const array1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const array2= array1.flat(Infinity) //speards out the data
console.log(array2)
const sc1=100
const sc2=200
const sc3=300 
console.log(Array.of(sc1,sc2,sc3))//also converts into array
console.log(Array.from("hitesh"))//coverts into string
console.log(Array.from({name:"hitesh"}))//interesting gives empty array - []
