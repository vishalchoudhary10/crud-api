// const app=require('./app')
// console.log(app)
 //var marks={
//     subham=30;
//     vishal=45;
//     mohit=15

// }
// console.warn("this is a warning");
// <script>
        
      
//         document.getElementsByTagName("h1")[0].style.fontSize="40px"
//         console.log(marks);
//             </script>  
// 3#filter funstion of array
// var arr=[1,2,3,4,75]
// console.log(arr)
// arr.filter((item)=>{
// console.log(item)

// })
// 3#

// const arr=[1,2,2,3,5,7,6]
// let result=arr.filter((item)=>{
// return item>2

// })
// console.log(result)
// #3


// const arr=[0,1,5,4,7,8,9,88,99,00]
// let result=arr.filter((item)=>{
// return item<10
// })
// console.log(result)

// const http=require('http');
// http.createServer((req,resp)=>{
// resp.write("hi there");
// resp.end();

// }).listen(4200);


// const arr=[1,5,5,8,4,7,9]
// let result =arr.filter((item)=>{

//     return item>4
// })
// console.log(result);
// console.warn("try nodemon")



// make a simple api
const http=require('http');
const data=require('./data');
http.createServer((req,resp)=>{
resp.writeHead(200,{'content-type':'application\JSON'});
//resp.write(JSON.stringify([{name:'vishal',Email:'vishaledu95@gmail.com',Mobile:'9782429533'}, 
//{name:'vishal kumar',Email:'vishaledu95@gmail.com',Mobile:'9782429533'}]));

resp.write(JSON.stringify(data));
resp.end();
}).listen(4200);



var a=20;
var b=30;
setTimeout(() => {
    console.log(a+b);

}, 2000);
console.log("execute");

console.log(a+b);
