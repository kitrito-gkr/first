//alert box
		var globalvar="some text";//thshi is global varible outside any function

		myFunction =function(arg1,arg2)
		{
			window.alert('my function called with arg1=' + arg1)
		};

		window.onload =function()//this is execute when our whole html file has been loaded
		{
			//window.alert("hello world");
			//console.log("Hello world");
			//console.error("we Got error");
			//document.write("Hello world");
			//var name=prompt("ENTER ur Name","JHON DON");//to take user data using javascript and store sit in variable here is name
			//document.getElementById("mypara").innerHTML="<b>Changed</b>"+name;//to change the HTML data of some tag we use its id to change it
			globalvar='some other text';//if we don't create a global varible and just assign it anywhere then js automatically make it global varible
			/*
			var myvar = 10;
			window.alert(5+5+globalvar);//print 10someothertext
			window.alert(globalvar+5+5);//print someothertext55

			var var1;
			var var2="";
			var var3=0;
			var var4=null;
			var var5=true;

			console.log(typeof var1);//all this will show in console not on brouser screen
			console.log(typeof var2);
			console.log(typeof var3);
			console.log(typeof var4);
			console.log(typeof var5);

			for (var i = 0; i < 10; i++) {
				break;
				continue;
			}

			a= true;
			while(a)
			{
				a=false;
			}
			var b=10
			switch(b){

			}
			var divisor=0;
			try{
				var my = 10/divisor;
			}catch(err){
				console.error(err);
			}
			*/
			//let abc="abc"//this is just like dvar but is scope is limited its is nither be use outside this function nor inside of this function block
			//abc="xyz";

			//const xyz="xyz"
			//xyz = "abc"
			/*
			var myobj ={name:"gaurav",age:19};//creating a object
			myobj.time="1500";//we can add new feilds to our objects dynamically this cant be possilble in classes
			
			console.log(myobj.time);
			*/
			//creating a string
			var myarr =['a','b',"this is string",10]
			console.log(myarr[0]);
			console.log(myarr[1]);
			console.log(myarr[2]);
			console.log(myarr[3]);
			var argument1="this is argument";
			myFunction(argument1);

			document.getElementById("mybutton").onclick=function()
		{   
			var name=document.getElementById('namebox').value;
			window.alert("Nobody press this button"+name);
		}

		};
		

		document.write("Hello world");