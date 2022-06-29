// alert("Hello world");
// let {log}=console;
// let name=function(){}[123];
// console.log(typeof name);
// let x=20;
// let y=40;
// console.log(x+y)
// x++;
// console.log(x);
// let answer=x>y && x>=y;
// let username='guy';
// let password='password';
// let u_username='guy';
// let u_password='password';
// if(username==u_username && password==u_password) {
//     alert('login successful')
// }
// else{
//     alert('invalid login')
// }
// let name = 'Ibrahim';// string data type
// let age =30; //Number data type
// let isApproved=true/false; // boolean data type 
// let person ={
//     name:'Ibrahim',//object
//     age:30
// };
// console.log(person);
// person.name ='John';//Dot Notation
// person['name']='Mary';//Bracket Notation
// console.log(person.name);
// let selectedColors =['red','blue'];
// console.log(selectedColors);
// let day='monday'
// let u_day='monday'
// let tomorrow='tuesday'
// let u_tomorrow='tuesday'
// let nextday='wednesday'
// let u_nextday='wednesday'
// let nextdays='thursday'
// let u_nextdays='thursday'
// let twodays='friday'
// let u_twodays='friday'
// let weekend='saturday'
// let u_weekend='saturday'
// let begin='sunday'
// let u_begin='sunday'
// if(day==u_day){
//    alert('Monday') 
// }
// else if(tomorrow==u_tomorrow)
// {
//     alert('Tuesday')
// }
// else if(nextday==u_nextday)
// {
//     alert('Wednesday')
// }
// else if(nextdays==u_nextdays)
// {
//     alert('Thursday')
// }
//  else if(twodays==u_twodays)
// {
//     alert('Friday')
// }
// else if(weekend==u_weekend)
// {
//     alert('Saturday')
// }
//  else if(u_begin==u_begin)
// {
//     alert('Sunday')
// }

//Functions
// function greetUs(){
// //    console.log('You are Welcome to my channel')
//    let value=document.getElementById('inp').value
//    document.getElementById('header').innerHTML=value 
//    document.getElementById('inp1').value=value 
// }
// function greetUs(){
//    let value=document.getElementById('inp').value
//    document.getElementById('inp1').value=value
//    document.getElementById('inp').value=''
//     document.getElementById('header').innerHTML=value
// // }                                            
// function calculate(){
//     let value1=document.querySelector('#inp').value
//     let value2=document.querySelector('#inp1').value

//     let operator=document.querySelector('#ope').value
// }
// let ansa;
// if(operator=='+'){
//     ansa=Number(x)+Number(y)
// }
// if(operator=='-'){
//     ansa=Number(x)+Number(y)
// }
// if(operator=='/'){
//     ansa=Number(x)+Number(y)
// }
// if(operator=='*'){
//     ansa=Number(x)+Number(y)
// }

// let screen=document.getElementById('screen');
// let first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, zero

// function firNum() {
//     first=document.getElementById('first').innerHTML
//     screen.innerHTML+=first
// }

// function secNum(){
//     second=document.getElementById('second').innerHTML
//     screen.innerHTML+=second
// }

// function thiNum(){
//     third=document.getElementById('third').innerHTML
//     screen.innerHTML+=third
// }

// function forNum(){
//     fourth=document.getElementById('fourth').innerHTML
//     screen.innerHTML+=fourth
// }

// function fifNum(){
//     fifth=document.getElementById('fifth').innerHTML
//     screen.innerHTML+=fifth
// }

// function sixNum(){
//     sixth=document.getElementById('sixth').innerHTML
//     screen.innerHTML+=sixth
// }

// function sevNum(){
//     seventh=document.getElementById('seventh').innerHTML
//     screen.innerHTML+=seventh
// }

// function eigNum(){
//     eighth=document.getElementById('eighth').innerHTML
//     screen.innerHTML+=eighth
// }

// function ninNum(){
//     ninth=document.getElementById('ninth').innerHTML
//     screen.innerHTML+=ninth
// }

// function zerNum(){
//     zero=document.getElementById('zero').innerHTML
//     screen.innerHTML+=zero
// }
// let screen=document.getElementById('screen')
// function display(digits ){    
//     screen.value+=digits
//     }
//    let operator;
// let val1; 
//     function operators(op){
//       operator=op
//       val1=screen.value;
//       screen.value=''
//     }
//     function equal(){
//       let ansa;
//       if (operator=='+'){
//         ansa=Number(val1) + Number(screen.value)
//       }
//       if (operator=='-'){
//         ansa=Number(val1) - Number(screen.value)
//       }
//       if (operator=='*'){
//         ansa=Number(val1) * Number(screen.value)
//       }
//       if (operator=='/'){
//         ansa=Number(val1) / Number(screen.value)
//       }
//       screen.value=ansa
//     }
let screen=document.getElementById('screen');
// screen.innerHTML=0
let screen1=document.getElementById('screen1');
function display(digits){
  screen.innerHTML+= digits

}

let operator;
let val1;
let ansa

 function operators(op){
   if(screen1.innerHTML!=''){
     equal()
   }
   operator=op
   val1=screen.innerHTML
   screen.innerHTML=''
   screen1.innerHTML+= val1 + op 
   

 }
 function delCurrent(){
  screen.innerHTML=''
  // screen1.innerHTML=val1
 }
 function del(){
  screen.innerHTML=''
  screen1.innerHTML=''
 }

 function double(){
  screen.innerHTML =  Math.pow(screen.innerHTML)
 }
 function square(){
   screen.innerHTML =  Math.sqrt(screen.innerHTML)
 }
 function quare(){
   screen.innerHTML = 2 * Math.sqrt(screen.innerHTML)
 }
 function backspace(){
   screen.innerHTML = screen.innerHTML.slice(0, -1);
 }

 function equal(){
   
   if(operator=='+'){
   ansa=Number(val1) + Number(screen.innerHTML)  
  }
   if(operator=='-'){
   ansa=Number(val1) - Number(screen.innerHTML)  
  }
   if(operator=='*'){
   ansa=Number(val1) * Number(screen.innerHTML)  
  }
   if(operator=='/'){
   ansa=Number(val1) / Number(screen.innerHTML)  
  }
  screen.innerHTML=ansa
 }

//         const body=document.body
//         const div=document.createElement('div')
//         body.append(div)
//         // div.innerText ="hello world"
//         div.textContent="WELCOME HOME"

//         body.append(div)
// body.append('Hello','come')