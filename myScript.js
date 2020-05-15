//window.alert("hell0");
function gethistory() {
	return document.getElementByID("history-value").innerText;
}
function printHistory(num){
	document.getElementByID("history-value").innerText=num;
}
function getOutput() {
	return document.getElementByID("output-value").innerText;
}
function printOutupt(num) {
	if(num==""){
		document.getElementByID("output-value").innerText=num;
	}
	else{
		document.getElementByID("output-value").innerText=getFormattedNumber(num);
	}
	
}
function getFormattedNumber(num){
	 if(num == "-"){
	 	return "";
	 }
	var n = Number(num);
	var value = n.tolocateString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementByClassName("operator");
for(var i=0;i<operator.length;i++){
	operator[i].addEvenListener('click',function(){
		if(this.id=="clearchar"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output = reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output = getOutput();
			var history = gethistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history = history.substr(0,history.length-1);
				}
			}
			if(output!=""|| history!=""){
				//condition?true:false
				output=output==""?
				output:reverseNumberFormat(output);
				history = history+output;
				if(this.id=-""){
					var result =  eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history = history + this.id;
					printHistory(history);
					printOutput("");
				}
			}

		}

	});
var number = document.getElementByClassName("number");
for(var i=0;i<number.length;i++){
	operator[i].addEvenListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){//if output is a number
			output = output + this.id;
			printOutput(output);
		}

	});
}
