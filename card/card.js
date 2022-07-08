let pn = document.querySelector('#pn');
let amount = document.getElementById('price');
let type = document.getElementById('cardType');
let save = document.querySelector('#save');
let display = document.querySelector('#display');
let record = [];
let card = [{ETISALAT:'*232*', GLO:'*123*', AIRTEL:'*126*', MTN:'*555*'}];
// let cardPin ;
// let Status = 'UNUSED'
// console.log(Status)
let printref;
let recharge;
let date = new Date().toLocaleDateString();

let statos = 'UNUSED'
//                     RANDOM NUMBERS
const dat = new Date()
 let h = dat.getHours()
 let m = dat.getMinutes()
 let s = dat.getSeconds()
 let index = 0
 let seen=false;



 let ogg=JSON.parse(localStorage.getItem('CardDetails'))
 record=ogg || []
 show()
 
function generate(){
	let cardPin ;

		  pn.innerHTML = '';
		for(index = 0; index < 15; index++){
			cardPin = Math.floor(Math.random()* 7);
			 pn.innerHTML += cardPin
		}
		//   save.disabled = false
			 	if(price.value == ""){
           alert('INPUT AMOUNT!!')
		}	
		 printref = pn.innerHTML;
	if(type.value == 'ETISALAT'){
        recharge = '*232*'+ printref +'#'
	}
     if (cardType.value == 'GLO') {
	    recharge = '*123*'+ printref +'#';
	}
	  if (cardType.value == 'AIRTEL') {
		  recharge = '*126*'+ printref +'#';
	} 
	 if (cardType.value == 'MTN') {
		  recharge = '*555*'+ printref +'#';
	}
	
	let obj ={amount:amount.value, type:type.value, REF:printref, dat:date, load:recharge, status:statos}
	record.push(obj)
	localStorage.setItem('CardDetails',JSON.stringify(record) )
	show()
	
}
        //  TO DISPLAY THE CARDS
// function add(){
// 	let printref = cardPin;
// 	if(type.value == 'ETISALAT'){
//         recharge = '*232*'+ printref +'#'
// 	}
//      if (cardType.value == 'GLO') {
// 	    recharge = '*123*'+ printref +'#';
// 	}
// 	  if (cardType.value == 'AIRTEL') {
// 		  recharge = '*126*'+ printref +'#';
// 	} 
// 	 if (cardType.value == 'MTN') {
// 		  recharge = '*555*'+ printref +'#';
// 	}
	
// 	let obj ={amount:amount.value, type:type.value, REF:printref, dat:date, load:recharge, used:false}
// 	record.push(obj)
	
// 	localStorage.setItem('CardDetails',JSON.stringify(record) )
// 	show()
// }


function show(){  
	display.innerHTML = '';
  record.forEach(function(obj,index)
   {
	  display.innerHTML +=`<tr>
							<td>${index + 1}</td>
							<td>${obj.type}</td>
							<td>${new Date().toLocaleDateString() + '  ||' + h+':'+m+':'+s}</td> 
							<td>#${obj.amount}</td>
							<td>${obj.REF}</td>
							<td>${obj.load}</td>
						<td><button class="btn text-white bg-success" id="status${index}">${obj.status}</button></td>
							<td><button class="btn text-white bg-danger" onclick="del(${index})">delete</button></td> 
							</tr>` 
					
});
}
show()


//     DELETE FUNCTION
function del(index){
	record.splice(index,1)
	localStorage.setItem('CardDetails',JSON.stringify(record) )
	show()
  }
  
	 
//         TO RECHARGE CARDS
let myData= JSON.parse(localStorage.getItem('CardDetails'))
localStorage.setItem('CardDetails',JSON.stringify(record) )
let fail = 'You have entered an incorrect PIN your line will be barred if you try more than 5 times';
 function recharges(){ 
	 let char = document.querySelector('#char');
	 
   myData.forEach((element,index) => {
	   
	
	   
	if(char.value === element.load){
		if (element.status === 'USED') {
			alert('THIS CARD AS ALREADY BEEN USED BY YOU');
			seen=true;
			setTimeout(() => {
				seen=false
			}, 100);

		}
		else if(element.status !== 'USED')  {
			alert(`Your Recharge of ${type.value} ${amount.value} is successful, thank you`)
			element.status ='USED';
			record[index].statos ='USED';
			localStorage.setItem('CardDetails',JSON.stringify(myData))
		}
		
	}else if(index==myData.length-1 && seen == false){
		alert(fail)
		
	}
		 
 	//   if(char.value.length != element.load.length){
	// 		return alert(fail);
	// 	   }
	// 	   if(element.status ==='USED'){	 
	// 	  return alert('THIS CARD AS ALREADY BEEN USED BY YOU')	
	// 	 }
	//    if(element.status ==='UNUSED'){
	// 		   element.status ='USED';
	// 		   record[index].statos ='USED';
	// 		    localStorage.setItem('CardDetails',JSON.stringify(myData))
	// 	    return alert( `Your Recharge of ${type.value} ${amount.value} is successful, thank you`);
		 	      
	// 	 }
		
   });
 }
   show()
