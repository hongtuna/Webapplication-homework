/*
console.log("hello world");

var value = 1;
console.log("value =", value);

value = value +2;
console.log("value =", value);

value += 4;
console.log("value =", value);

value += 1.1;
console.log("value =", value);

value = parseInt("10");
console.log("value =", value +3);

value = parseFloat("10.3");
console.log("value =", value);

value = parseInt("10.3");
console.log("value =", value);

value = "str";
console.log("value =", value);

value = "hello" +" "+ "world";
console.log(value);

value = "!";
value = "hello" +" "+ `world${value}`;
console.log(value);

value = 1+"!";
console.log(value);

value = true;
console.log("value =", value);

value = false;
console.log("value =", value);

value = 19<2;
console.log("value =", value);


"use strict";

var value=1;
console.log("value =", value);

//const 선언되면 바꿀수없음


function foo()
{
    console.log("hello world");
    if(true)
    {
        let value=1; //괄호 안에서만 사용
        //var value=1;
        //console.log("if value =", value);
        //const c= 2; 

    }
        
    console.log("value =", value);
    //console.log("c =", c);


}

foo();


console.log("hello world");
if (1>10) //첫번째 조건이 맞으면 다음거 건너뜀
{ //괄호 필수
    console.log("true");

} else if(2<=10)
{
    console.log("2<=10 = true")
}
else
{
    console.log("else");
}
console.log("end");


function test()
{
    console.log("test");
}

var list = [1, "1", true, {}, [1], test]
console.log(list);

console.log(list[0]);

//배열 마지막에 추가
list.push("pq");
console.log(list);

var p1 = list.pop(); //마지막 요소를 반환하고 삭제
console.log(p1,list);

//배열 첫번째에 추가
list.unshift("h1");
console.log(list);

var h= list.shift();//첫 요소를 반환하고 삭제
console.log(h,list);

*/

/*
var list = [1,2,3,4,5];

 //리스트 요소 갯수만큼 실행됨
list=list.map(function(item){
    return item +1;
    });
console.log(list);

list=list.map(item =>{ 
    return item +1;
    });

list=list.map(item =>item +1);
console.log(list);

//배열 현재값과 이전 요소를 더해줌
var sum = list.reduce((previousValue,currentValue)=>previousValue+currentValue); 
console.log(sum);

//초기값 정해줄경우
var sum = list.reduce((previousValue,currentValue)=>previousValue+currentValue,10); 
console.log(sum);

//각각 변수에 대해서 참인것만 다시 배열로 만듬
list= list.filter(item =>item<5);
console.log(list);


//요소마다 1씩더하고 4보다 작은것 거른다음에 다더한 값
console.log(list.map(item=>item+1)
                .filter(item=>item<4)
                .reduce((p,c)=>p+c));



var value = 3;
//1이 리스트의 몇번째 인덱스인지
switch(list.indexOf(value))
{
    case 1:
    case 2:
        console.log("index = 1,2");
        break;
    case 3:
        console.log("index = 3");
        break;
    default:
       console.log("index = default");
       break;
}
*/

/*
var list= [1,2,3,4,5];

while(list.length>0)
{
    //console.log(list.pop()); //마지막 요소 꺼냄
    console.log(shift.pop()); //첫 요소 꺼냄
}
console.log(list); 


for (let i=list.length-1; i>=0; i--)
{
    console.log(list[i]);
}


function foo()
{
    console.log("hello");
}
foo();

var bar =()=> //임명함수는 선언하고 사용
{
    console.log("hello2");
};

bar();



function foo(a, b, c=0)
{
    return a+b+c;
}
console.log(foo(1,2,3));
console.log(foo(1,2));


//콜백 함수
function sum(list,cb)
{
    return list.reduce((p,c) => 
    {
        if(typeof c != "number") //number가 아니면 cb에게 넘김
        {
            c=cb(c);
        }
        return p+c;
    });
}

var list=[1,2,3,"10","11",[],{}];
console.log(sum(list,(c) => {
    if(typeof c == "string") return parseInt(c);
    return 0;

    return parseInt(c);
}));


//객체
var o = {
    key : "value", //key는 문자열
    title : "hi",
    value : 1
};

console.log(o);
console.log(o["key"]);
console.log(o.key);

o.log = "log1"; //중간에 추가 가능
console.log(o);

o.log = null; //삭제할경우 
console.log(o);

for (let key in o)
{
    console.log(key, o[key]);
}

var list=[1,2,3,"10","11",[],{}];

for (let a in list) //a=인덱스
{
    console.log(a,list[a]);
}

//key값만 배열로 출력
var keys = Object.keys(o);
console.log(keys); 

var list=[1,2,3,"10","11",[],{}];


var o = {
    title : "hi",
    value : 1,
    label : function(s){
        return this.title +" "+this.value+s; //this는 o
    },

    label2 : (s)=>{
        return this.title +" "+this.value+s; //화살표 함수는 this 사용 x
    }
};

console.log(o.label("..."));
console.log(o.label2("..."));


//예외처리

try{
    console.log("hello");
    throw new Error("error");
    console.log("hello2");
}catch(e){
    
    console.log("catch");

}finally{
    console.log('마무리');

}
*/

//비동기 함수

setInterval(()=>{
    console.log("interval");
},1000);//정해진 초마다 함수 호출

let i = 0;
while (i<1000000)
{
    i++;
}
console.log("done");



setTimeout(()=> {
    console.log("hello");
},1000); //한번만 실행
console.log("done"); //done이 먼저 실행됨


function asyncTest(v,cb)
{
    setTimeout(()=>{
        cb(v +1);
    },1000);
}

asyncTest(2,(result)=>{
    console.log("result",result);
    console.log("done");

    asyncTest(result*2, (result2)=>{
        console.log("result2",result2);
        console.log("done");
    })
});


new Promise((resolve,reject)=> 
{
    asyncTest(2,(result)=>
    {
        console.log("result",result);
        resolve(result);
    });
}).then((result)=>
{
    return new Promise((resolve,reject)=>
    {
        asyncTest(result*2, (result2)=>
        {
            console.log("result2",result2);
            //resolve(result2);
            reject();
        });
    
    });
}).then((result)=>
{
    console.log("done",result);
}).catch(e =>
    {
        console.log("error");
    });



function asyncTest(v,cb)
{
    setTimeout(()=>{
        cb(v +1);
    },1000);
}

async function test()
{
    console.log("start");
    var value = await new Promise((resolve,reject)=>
    {
        asyncTest(2,(r)=>
        {
            resolve(r);
        })
    });
    console.log("value",value)

    value = await addTest(value);
    console.log("value",value);
}


async function addTest(value)
{
    await new Promise ((resolve,reject)=>{setTimeout(resolve,1000);});
    return value+1; 
}
test();