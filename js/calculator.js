/* By Gaurav Kumar Rawat*/
		var value1=0;
		var op=null;
		var value2=0;
		reset = function()
		{	document.getElementById('input').value=null;
			document.getElementById('input').placeholder="0";
			value1=0;
			op=null;
			value2=0;
		}

		setop = function(op1)
        {
			value1=Number(document.getElementById('input').value);    		
			op=op1;
			document.getElementById('input').value=null;
			document.getElementById('input').placeholder="";
		}

        answer = function()
        {
        	value2=Number(document.getElementById('input').value);
        	document.getElementById('input').value=null;
        	
        	switch(op)
        	{
        		   case "+":
						        document.getElementById('input').value=Number(value1+value2);
						        break;
			   case "-":
						        if(value2>value1)
						        {
						        	document.getElementById('input').value=Number(value2-value1);
						        	document.getElementById('input').value+="-";
						        }
						        else{
						        document.getElementById('input').value=Number(value1-value2);
						    	}
						        break;
			    case "*":
						        document.getElementById('input').value=Number(value1*value2);
						        break;
			    case "/":
						        if(value2==0)
						        {
						        	document.getElementById('input').value="ERROR";
						        	break;
						        }
						        document.getElementById('input').value=Number(value1/value2);
						        break;
		            default:
        						document.getElementById('input').value=value2;        
        		
        	}
        	
        	
        	
        }
		setnumber = function(arg1)
		{
			document.getElementById('input').value+= arg1;
		}
