// var number=document.getElementById('1');
// console.log(number);
var button=document.getElementsByClassName('numbers');
console.log(button);
var display=document.getElementById('screen');
display.style.fontSize="3rem";
var operand1=0;
var operand2=null;
var operator=null;

function Operator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for(var i=0;i<=button.length;i++)
{
	button[i].addEventListener('click', function(){
		var value= this.getAttribute('data-value');
		var text = display.textContent.trim();

		if(Operator(value))
		{
			operand1=parseFloat(text);
			operator=value;
			display.textContent+=operator;
		}
		else if(value=="ac")
		{
			display.textContent="";
		}
		else if(value=="sign")
		{
			operand1=parseFloat(text);
			operand1=-1*operand1;
			display.textContent=operand1;
		}
		else if(value==".")
		{
			if(text.length && !text.includes('.'))
			{
				display.textContent= text+'.';
			}
		}
		else if(value=="%")
		{
			operand1=parseFloat(text);
			operand1=operand1/100;
			display.textContent=operand1; 
		}
		else if(value=="del")
		{
			display.textContent=display.textContent.slice(0, - 1);;

		}
		else if(value=="=")
		{
			operand2=parseFloat(text);
			var result=eval(display.textContent);
			// if(result)
			// {
				display.textContent=result;
				operand1=0;
				operand2=null;
				operator=null;
			//}

		}
		else
		{
			display.textContent+=value;
		}
		// display.style.display=flex;
		// display.style.flexDirection="row-reverse";
	
	})
}

