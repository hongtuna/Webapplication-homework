//1번
console.log("문자열길이 : ", "hello world".length);

//2번
var list = [2,5,4,6,8,3,1,3,4,6,8,9,10,11,15,20]

for(let i = 1; i<list.length; i=i+2)
{
    //console.log(i);
    console.log(list[i]);
}

//3번
var o = {};

for (let i = 0; i<list.length; i++)
{
    if (i<10){
        o["index_"+'0'+i]=list[i];
    }
    else{
        o["index_"+i]=list[i];
    }  
}

console.log(o);


