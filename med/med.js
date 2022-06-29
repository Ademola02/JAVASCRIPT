let inp = document.getElementById('inp');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let display = document.getElementById('display');
let total = document.getElementById('total');
let arr=[]
let firstInput; 
  
  function push(){
    let obj = {inp:inp.value,inp1:inp1.value,inp2:inp2.value};
    arr.push(obj);
    show();
    granTotal()
    } 


    function show(){  
      display.innerHTML = '';
    arr.forEach(function(obj,index) {
        display.innerHTML +=`<tr>
                              <td>${index + 1}</td>
                              <td>${obj.inp}</td>
                              <td>${obj.inp1}</td> 
                              <td>#${obj.inp2}</td>
                              <td>${obj.inp1} * #${obj.inp2} = #${Number(obj.inp1 * obj.inp2)}</td>
                              <td><button class="btn text-white bg-danger" onclick="del(${index})">delete</button></td> 
                              </tr>` 
                      
 });
}
function del(index){
  arr.splice(index,1)
  show()
  granTotal()
}

function granTotal() {
 let total1 = 0;
 
 arr.forEach(function(obj,index) {  
  total1 += obj.inp1 * obj.inp2 
}); 
   total.innerHTML = 'Total:' + total1
  
}

// let inp = document.getElementById('inp');
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2');
// let display = document.getElementById('display');
// let total = document.getElementById('total');
// // let total1 = document.getElementById('total');
// let arr=[{inp:'',inp1:'',inp2:''}]
// let firstInput; 
  
//   function push(){
//     let obj = {inp:inp.value,inp1:inp1.value,inp2:inp2.value};
//     arr.push(obj);
//     show();
//     granTotal()
//     } 


//     function show(){  
//       display.innerHTML = '';
     
//     for (let index = 1; index < arr.length; index++) { 
//         display.innerHTML +=`<tr>
//                               <td>${index}</td>
//                               <td>${arr[index].inp}</td>
//                               <td>${arr[index].inp1}</td> 
//                               <td>#${arr[index].inp2}</td>
//                               <td>${arr[index].inp1} * #${arr[index].inp2} = #${Number(arr[index].inp1 * arr[index].inp2)}</td>
//                               <td><button class="btn text-white bg-danger" onclick="del(${index})">delete</button></td> 
//                               </tr>` 
                      
//  }

// }

// function granTotal() {
//  let total1 = 0
//  for (let index = 0; index < arr.length; index++) {
//   total1 += arr[index].inp1 * arr[index].inp2
   
//  }
//    total.innerHTML = 'Total:' + total1
// }

// function del(index){
//   arr.splice(index,1)
//   show()

//   granTotal()
// }
// // * #${arr[index].inp2} =`${Number(arr[index].inp1 * arr[index].inp2)}`