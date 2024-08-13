function add(Id){
	var a = Number(document.getElementById(Id).innerHTML);
	a = a + 1;
	document.getElementById(Id).innerHTML = a;
}	

function subtract(Id){
	var a = Number(document.getElementById(Id).innerHTML);
	if( a > 1){
		a = a - 1;
		document.getElementById(Id).innerHTML = a;
	}
}

var Name = prompt('Enter your name.'); 
document.getElementById('Name').innerHTML = Name; 

var ProductPriceArray = []; 
	
ProductPriceArray[0] = 9; 
ProductPriceArray[1] = 16;
ProductPriceArray[2] = 17;
ProductPriceArray[3] = 20;
ProductPriceArray[4] = 19;
ProductPriceArray[5] = 17;
ProductPriceArray[6] = 16;
ProductPriceArray[7] = 23;
ProductPriceArray[8] = 17;
ProductPriceArray[9] = 16;
ProductPriceArray[10] = 19;
ProductPriceArray[11] = 27;
ProductPriceArray[12] = 27;
ProductPriceArray[13] = 30; 
ProductPriceArray[14] = 21; 
ProductPriceArray[15] = 32; 
ProductPriceArray[16] = 10; 
ProductPriceArray[17] = 19; 
ProductPriceArray[18] = 20;
ProductPriceArray[19] = 18;



function allProcess(){

function loopForPrice() {
  var price = document.getElementsByClassName('Price');
  var priceArray = [];
  for (i = 0; i < price.length; i++) {
    var a = document.getElementsByClassName('Price')[i].id.replace('Price','');
	var b = ProductPriceArray[a];
    priceArray[i] = b;
  }
  return priceArray;
}

function loopForQuantity() {
  var quantity = document.getElementsByClassName('Quantity');
  var quantityArray = [];
  for (i = 0; i < quantity.length; i++) {
    var a = document.getElementsByClassName('Quantity')[i].innerHTML;
    quantityArray[i] = a;
  }
  return quantityArray;
  }


var a = [];
var b = [];
a = loopForPrice();
b = loopForQuantity();

element = document.getElementsByClassName('Left_Cart_button');
price = document.getElementsByClassName('Price');


function eachPrice() {
	for (i = 0; i < element.length; i++) {
  var button = element[i];
  var priceValue = price[i];
  var first = a[i];
  var second = b[i]; 
  var third = first * second;
  priceValue.innerHTML = "£" + third;
                          }
}

eachPrice();

function totalPrice() {
  var arrayPrice = [];
for (i = 0; i < element.length; i++) {
	var button = element[i];
  var priceValue = price[i];
  var first = a[i];
  var second = b[i]; 
  var third = first * second;
  arrayPrice.push(third);
                          }
 return arrayPrice;
  }
  
var c = [];
c = totalPrice();

function finalPrice() {
  var sum = 0;
  for(i=0; i<c.length; i++){
    sum = sum + c[i];
  }
  var x = document.getElementById('Total').innerHTML = sum;
  return sum;
}
  return finalPrice();
}

allProcess();


function click(){
document.getElementById('Cart_icon').addEventListener('click', () => {check();}); 
}

click();

function check(){
if(document.getElementById('Cart_container').style.display== "none"){
  document.getElementById('Cart_container').style.display='block';
}
else{
    document.getElementById('Cart_container').style.display='none';
}
}
																	
var itemsArray = [];

itemsArray[0] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_5.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Beech Tree</p>
					</div>
					<button onclick="add('B0');allProcess();" id = "Test" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B0">1</p> <button onclick="subtract('B0');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price0" style="font-size: 18px; margin-right: 70px;"> &pound9 </p>
				</div>`;
																																																																																																																								
itemsArray[1] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_6.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Fir</p>
					</div>
					<button onclick="add('B1');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B1">1</p> <button onclick="subtract('B1');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price1" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
					
itemsArray[2] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_7.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Snow Rose Bonsai</p>
					</div>
					<button onclick="add('B2');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B2">1</p> <button onclick="subtract('B2');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price2" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[3] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_8.jpg" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Powder puff Bonsai</p>
					</div>
					<button onclick="add('B3');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B3">1</p> <button onclick="subtract('B3');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price3" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[4] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_1.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Pine</p>
					</div>
					<button onclick="add('B4');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B4">1</p> <button onclick="subtract('B4');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price4" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[5] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_2.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Flowering Cherry</p>
					</div>
					<button onclick="add('B5');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B5">1</p> <button onclick="subtract('B5');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price5" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[6] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_3.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Dwarf jade</p>
					</div>
					<button onclick="add('B6');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B6">1</p> <button onclick="subtract('B6');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price6" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;

itemsArray[7] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_4.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Chinese Elm</p>
					</div>
					<button onclick="add('B7');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B7">1</p> <button onclick="subtract('B7');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price7" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[8] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_9.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Meyer Lemon</p>
					</div>
					<button onclick="add('B8');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B8">1</p> <button onclick="subtract('B8');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price8" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[9] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_10.jpg" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Wisteria Bonsai Tree</p>
					</div>
					<button onclick="add('B9');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B9">1</p> <button onclick="subtract('B9');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price9" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[10] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_11.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Japanese maple</p>
					</div>
					<button onclick="add('B10');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B10">1</p> <button onclick="subtract('B10');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price10" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;

itemsArray[11] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_12.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Crassula bonsai</p>
					</div>
					<button onclick="add('B11');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B11">1</p> <button onclick="subtract('B11');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price11" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[12] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_13.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Pomegranate tree</p>
					</div>
					<button onclick="add('B12');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B12">1</p> <button onclick="subtract('B12');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price12" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[13] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_14.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Ficus bonsai tree</p>
					</div>
					<button onclick="add('B13');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B13">1</p> <button onclick="subtract('B13');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price13" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[14] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_15.jpg" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Juniper Bonsai</p>
					</div>
					<button onclick="add('B14');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B14">1</p> <button onclick="subtract('B14');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price14" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[15] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_16.jpg" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Mongolia stellata</p>
					</div>
					<button onclick="add('B15');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B15">1</p> <button onclick="subtract('B15');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price15" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[16] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_17.png" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Oak bonsai tree</p>
					</div>
					<button onclick="add('B16');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B16">1</p> <button onclick="subtract('B16');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price16" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
					
itemsArray[17] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_18.jpg" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Tridient bonsai </p>
					</div>
					<button onclick="add('B17');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B17">1</p> <button onclick="subtract('B17');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price17" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[18] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_19.jpg" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Zelkov bonsai</p>
					</div>
					<button onclick="add('B18');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B18">1</p> <button onclick="subtract('B18');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price18" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;
				
itemsArray[19] = `<div class="Individual" style="display:flex; justify-content: space-around;">
					<div style="display:flex; margin-top: 5px;">
						<img src="../Images/Product_20.jpg" style = "text-align: center; width: 50px; height: 50px; padding-right: 10px;">
						<p style="margin-left: 0 font-size: 18px;">Umbrella Bonsai</p>
					</div>
					<button onclick="add('B19');allProcess();" class="Left_Cart_button">+</button> <p class="Quantity" style="font-size: 18px;" id="B19">1</p> <button onclick="subtract('B19');allProcess();" class="Right_Cart_button" style="margin-right: 30px;">-</button>
					<p class="Price" id="Price19" style="font-size: 18px; margin-right: 70px;"> &pound16 </p>
				</div>`;




function AddToCart(Id){
  var A = document.getElementById('Products');
  A.innerHTML = A.innerHTML + itemsArray[Id];  
  document.getElementById(Id).onclick = "";
  allProcess();
}



var cartReset = document.getElementById('Reset_cart');
cartReset.addEventListener('click', resetCart);


var onClick = []; 

for(i=0; i<=19; i++){
var event = document.getElementById(i).onclick;
  onClick[i] = event;
}

function resetCart(){
  var x = document.getElementById('Products').innerHTML = "";
  var y = document.getElementById('Total').innerHTML = 0;
  
  for (i=0; i<=19; i++){
	  document.getElementById(i).onclick = onClick[i];
	}
}


var plantName = []; 

plantName[0] = "Beech Tree";      
plantName[1] = "Fir"; 
plantName[2] = "Snow Rose Bonsai";
plantName[3] = "Powder puff Bonsai";
plantName[4] = "Pine";
plantName[5] = "Flowering Cherry";
plantName[6] = "Dwarf jade";
plantName[7] = "Chinese Elm";
plantName[8] = "Meyer Lemon";
plantName[9] = "Wisteria Bonsai Tree"; 
plantName[10] = "Japanese maple"; 
plantName[11] = "Crassula bonsai";
plantName[12] = "Pomegranate tree";
plantName[13] = "Ficus bonsai tree";
plantName[14] = "Juniper Bonsai";
plantName[15] = "Mongolia stellata"; 
plantName[16] = "Oak bonsai tree";
plantName[17] = "Tridient bonsai"
plantName[18] = "Zelkov bonsai";
plantName[19] = "Umbrella Bonsai";


document.getElementById('Close').addEventListener('click', function() {
  
  
  document.getElementById('Notification-container').style.display = 'none'; 
  clearTimeout(setTimeout( function() {document.getElementById('Notification-container').style.display = 'none'}, 5000));});



function notification(Id){
	
	document.getElementById('Notification-container').style.display =  'block'; 
	
	function run(){
	var x = plantName[Id]; 
	document.getElementById('Notification').textContent = x + " has been added to the cart";

	  for (i=0; i<=19; i++){
	  document.getElementById(i).onClick = notification[i];
	}
	
	}
	
 var timeOut = setTimeout( function() {document.getElementById('Notification-container').style.display = 'none'}, 5000);
 
	    document.getElementById('Close').addEventListener('click', function () {
		document.getElementById('Notification-container').style.display = 'none';
		clearTimeout(timeOut)});
	    run(); 
}



function checkout() {
	if (document.getElementById('Products').innerHTML.trim() == ""){
	alert("No plants have been added into to the cart." + "\n" + "Please checkout after placing items in the cart.");
	}
	else{
		var plantName = [];
		var individualPlantName = "";

		var quantity = []; 
		var individualQuantity = ""; 

		var price = []; 
		var individualPrice = ""; 

		var display = [];





		var x = document.getElementsByClassName('Individual');
		var y = document.getElementsByClassName('Quantity');
    var z = document.getElementsByClassName('Price');

		  	 
for(i=0; i<x.length; i++){
  plantName[i] = x[i].getElementsByTagName('p')[0].innerHTML; 
  quantity[i] = y[i].innerHTML;
  price[i] = z[i].innerHTML;
  	var individualPlantName =  plantName[i];
    var individualQuantity =  quantity[i];
  	var individualPrice  = price[i];

  	display[i] = individualPlantName + "                    " + individualQuantity + "                         " + individualPrice ;
	}


table = ""; 

for(i=0; i<display.length; i++){
  table = table + display[i] + "\n";
}


var Total = document.getElementById('Total').innerHTML; 
var Discount = Math.floor(0.05 * Total);
var finalPrice = Math.floor(Total - Discount);
alert("Thank you for shopping with BonsaiCastle." + "\n" + "Your bill:" + "\n" +"\n" + "Item" + "                       " + "Quantity" + "                       " + "Price" + "\n" + table + "\n" + "Total: £" + Total + "\n" + "Discount: £" + Discount + "\n" + "Final Price: £" + finalPrice + "\n" + "\n" + "It was a pleasure doing buisiness with you. We hope that you take good care of your bonsai plant.");
}
	}
