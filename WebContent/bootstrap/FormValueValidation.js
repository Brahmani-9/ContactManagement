var numValid="Only Numerics Allowed";
var charValid="Only Alphabets Allowed";
var mailID="Not a Valid ID";
var digitPrsn="2 Digit Precision";
var digitPrsn1="4 Digit Precision";
var validNO="Not a Valid Number";
var charMand="Entry in Mandatory Fields Required";
var alNum="Only Numerics And Alphabets Allowed";
var alNumWC="Only Numerics And Alphabets with Comma Allowed";
var numValidNeg = "Only Negative / Positive Numbers Allowed";
var alNumWS="Only Numerics And Alphabets with Single Slash Allowed";
var panNO="Enter a Valid Pan Number";

function numValidate(event,nORp)
{
	var src;
	if (document.all)
    {
	src= event.srcElement;
    }
	else
    {
	src= event.target;
	}
	
	var field=src.value;	
	
if(nORp=="p"||nORp=="P")					//Allow Only +ve values.
  { 	
  var len=field.length;
  
		if(len)
		{
			for(var i=0;i< len;i++)
			{
				var str=field.charAt(i);
				if(!(str>="0" && str<="9"))
				{
					alert(numValid,'../img/help.jpg',"Ok",3);		
					src.value="";
					src.focus();
					return;
				}
			}
		}
  }
  else if(nORp=="n"||nORp=="N")				//Allow -ve values
	{
		var len=field.length;
		if(len)
		{
			for(var i=0;i< len;i++)
			{
				var str=field.charAt(i);
				if(str=="-")
				{
					if(field.lastIndexOf(str)!=0)
					{
						alert(validNO,"../img/help.jpg","Ok",3);		
						src.value="";
						break;
					}
				}
				if(!((str>="0" && str<="9")||str=="-"))
				{
					alert(numValid,"../img/help.jpg","Ok",3);		
					src.value="";
					src.focus();
					return;
				}
			}
		}
	}
}

function numValidate2(event,nORp)
{
	var src;
	if (document.all)
    {
	src= event.srcElement;
    }
	else
    {
	src= event.target;
	}
	var field=src.value;


if(nORp=="p"||nORp=="P")					//Allow Only +ve values.
  { 	var len=field.length;
		if(len)
		{
			for(var i=0;i< len;i++)
			{
				var str=field.charAt(i);
				if(!(str>="0" && str<="9"))
				{
					alert(numValid,'../img/help.jpg',"Ok",3);		
					src.value="";
					src.focus();
					return;
				}
			}
		}
  }
  else if(nORp=="n"||nORp=="N")				//Allow -ve values
	{
		var len=field.length;
		if(len)
		{
			for(var i=0;i< len;i++)
			{
				var str=field.charAt(i);
				if(str=="-")
				{
					if(field.lastIndexOf(str)!=0)
					{
						alert(validNO,"../img/help.jpg","Ok",3);		
						src.value="";
						break;
					}
				}
				if(!((str>="0" && str<="9")||str=="-"))
				{
					alert(numValid,"../img/help.jpg","Ok",3);		
					src.value="";
					src.focus();
					return;
				}
			}
		}
	}
}

function alnumValidate(event)
{
//Allows Only Characters & numbers
//Supporting Event - OnKeyUp.

	// var src=window.event.srcElement;
	// var field=src.value;
	
	var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;
	var len=field.length;
	if(len)
	{
		for(var i=0;i< len;i++)
		{
			var str=field.substr(len-1,len)
			if(!(str>="0" && str<="9" ||((str>="a"&&str<="z")||(str>="A"&&str<="Z"))||str==" "))
			{
				alert(alNum,"../img/help.jpg","Ok",3);
				src.value="";
				src.focus();
				return;
			}
		}
	}
}
/*Alphanumeric Validation End 

Alphanumeric Validation - with Comma Begin*/ 
function alnumValidateWC()
{
//Allows Only Characters & numbers
//Supporting Event - OnKeyUp.

	// var src=window.event.srcElement;
	// var field=src.value;
	
	var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;
	var len=field.length;
	if(len)
	{
		for(var i=0;i< len;i++)
		{
			var str=field.substr(len-1,len)
			if(!(str>="0" && str<="9" ||((str>="a"&&str<="z")||(str>="A"&&str<="Z"))||str==" "||str==","))
			{
				alert(alNumWC,"../img/help.jpg","Ok",3);
				src.value="";
				src.focus();
				return;
			}
		}
	}
}
/*Alphanumeric Validation - with Comma  End

Trim Leading & Trailing Values Begin*/
function TRIM()
{
//Trim's the Leading & Trailing Spaces
//Supporting Event - onBlur.

// var src=window.event.srcElement;
// var field=src.value;

var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;
	var i,j,k,l;
	l=0;
	for(i=0;i<=parseInt(field.length)-1;i++)
	{
		if(field.charAt(i)!=" ")
		{
			j=field.substr(i);				//LTRIM
				for(k=parseInt(j.length);k>=0;k--)
				{
					if(j.charAt(k-1)!=" ")
					{	
						l=j.substr(0,k)		//RTRIM
						src.value=l;
						return;
					}
				}
		}
	}
	//Check Only for Blank Spaces in Object
	for(i=0;i<=parseInt(field.length)-1;i++)
	{
		if(field.charAt(i)==" ")
		{
			l++;
			continue;
		}
	}
	if(l==i) src.value="";
}
/*Trim Leading & Trailing Values End*/

function alignfn(txtfield)
{
	//alert("called" +" "+txtfield.value);
	/*val =txtfield.value;
	len=val.length;
	tlen=20;
	tlen=tlen-len;
	//alert("length is "+ tlen);
	var str="";
	for(i=1;i<=tlen;i++)
	{
		str=str+" ";
	}
	str=str+""+val;
	//alert("value= "+ str);
	eval("document."+txtfield).value=str;*/
	
}
function padUp(objToBePadded, intLength, paddingChar)
{
	var strReturned = '', strToBePadded = '';
        if( typeof(intLength)=='undefined' )    intLength=parseInt('12');
        if( typeof(paddingChar)=='undefined' )  paddingChar='0';
	
	for(var i=0; i<intLength; i++)  strReturned = strReturned.concat(paddingChar);

        ///alert( typeof(objToBePadded));

        if(typeof(objToBePadded)=='undefined')
                strToBePadded = event.srcElement.value;
	else if(typeof(objToBePadded)=='object')
                strToBePadded = objToBePadded.value;
        else
                strToBePadded = objToBePadded;

	if(strToBePadded.length==0)     return '';
        try
        {
                strReturned = strReturned.substring(0,strReturned.length-strToBePadded.length).concat(strToBePadded);
        }catch(e){}
	
	 ///alert( 'return--' + strReturned );

        if(typeof(objToBePadded)=='undefined')
                        event.srcElement.value = strReturned;
        else if(typeof(objToBePadded)=='object')
                        objToBePadded.value = strReturned;

        return strReturned;
}


function BrAcNopadUp(branchid,prdid,objToBePadded, intLength, paddingChar)
{



	var strReturned = '', strToBePadded = '';
        if( typeof(intLength)=='undefined' )    intLength=parseInt('6');
        if( typeof(paddingChar)=='undefined' )  paddingChar='0';
	
	for(var i=0; i<intLength; i++)  strReturned = strReturned.concat(paddingChar);

        ///alert( typeof(objToBePadded));

        if(typeof(objToBePadded)=='undefined')
                strToBePadded = event.srcElement.value;
	else if(typeof(objToBePadded)=='object')
                strToBePadded = objToBePadded.value;
        else
                strToBePadded = objToBePadded;

                
                if(branchid.length==1)
                   branchid = "00"+branchid;
                if(branchid.length==2)
                   branchid = "0"+branchid;
                   
                if(prdid.length==1)
                   prdid = "00"+prdid;
                if(prdid.length==2)
                   prdid = "0"+prdid;

                   
                  
                   

	if(strToBePadded.length==0)     return '';
        try
        {
        		
//        		branchid=strReturned.substring(0,2-branchid.length).concat(branchid);
//        		prdid=strReturned.substring(0,2).concat(prdid);
                strReturned = strReturned.substring(0,strReturned.length-strToBePadded.length).concat(strToBePadded);
        }catch(e){}
	
	 	
		if(strToBePadded.length<=6)
		{
        if(typeof(objToBePadded)=='undefined')
                        event.srcElement.value = branchid+prdid+strReturned;
        else if(typeof(objToBePadded)=='object')
                        objToBePadded.value = branchid+prdid+strReturned;
         }            
         
    
         
		//strReturned=branchid+strReturned;
		
        return strReturned;
}

//close

//close 14-Nov-2007

//date 19/06/2008
//mahesh window.event not working in mozilla

function BrAcNopadUpNew(event,IBTYesNo,branchid,prdid,objToBePadded)
{

	var src;
	if (document.all)
    {
		src= event.srcElement;
    }
	else
    {
	src= event.target;
	}
	
	var field=src.value;
     
	var strReturned = '', strToBePadded = '';
        var intLength=parseInt('6');
        var paddingChar='0';
	
	  
	if(parseInt(prdid) == 0 )
	{    

	      if(field.length== 1) 
	      strReturned = "00000000000";
	      if(field.length== 2) 
	      strReturned = "0000000000";
	      if(field.length== 3) 
	      strReturned = "000000000";
	      if(field.length== 4) 
	      strReturned = "00000000";

		    src.value           = strReturned+field;
			objToBePadded.value = strReturned+field;
			strReturned         = strReturned+field;
	}
	else
	{
	for(var i=0; i<intLength; i++)  strReturned = strReturned.concat(paddingChar);

        ///alert( typeof(objToBePadded));

        if(typeof(objToBePadded)=='undefined')
                strToBePadded = src.value;
	else if(typeof(objToBePadded)=='object')
                strToBePadded = objToBePadded.value;
        else
                strToBePadded = objToBePadded;

                
                if(branchid.length==1)
                   branchid = "00"+branchid;
                if(branchid.length==2)
                   branchid = "0"+branchid;
                   
                if(prdid.length==1)
                   prdid = "00"+prdid;
                if(prdid.length==2)
                   prdid = "0"+prdid;

                   
                  
         

	if(strToBePadded.length==0)     return '';
        try
        {
        		

           strReturned = strReturned.substring(0,strReturned.length-strToBePadded.length).concat(strToBePadded);
        }catch(e){}
	
	 	
		if(strToBePadded.length<=6)
		{
        if(typeof(objToBePadded)=='undefined')
                        src.value = branchid+prdid+strReturned;
        else if(typeof(objToBePadded)=='object')
                        objToBePadded.value = branchid+prdid+strReturned;
         }            
         
    
         
	}          	//strReturned=branchid+strReturned;
	
	var accno=src.value;

	
	if(IBTYesNo=="N" && accno.substring(0,3)!=branchid && prdid!=0 && accno.substring(0,1) != 'L')
	{
	
	alert("You Are Not Allowed To Carry Out Inter Branch Transaction");
	src.value="";
	return;
	}
	
        return strReturned;
        
        
    
		
}

//close

//close 14-Nov-2007

//close

function padUpCust(objToBePadded, intLength, paddingChar,BranchAbrName)
{
	
        ////// Default Length - 12
        ////// Default Character to be padded - 0
        ////// Default Object - Element calling this function

        var strReturned = BranchAbrName, strToBePadded = '';
        if( typeof(intLength)=='undefined' )    intLength=parseInt('12');
        if( typeof(paddingChar)=='undefined' )  paddingChar='0';
        for(var i=0; i<intLength; i++)  strReturned = strReturned.concat(paddingChar);

        ///alert( typeof(objToBePadded));

        if(typeof(objToBePadded)=='undefined')
                strToBePadded = event.srcElement.value;
        else if(typeof(objToBePadded)=='object')
                strToBePadded = objToBePadded.value;
        else
                strToBePadded = objToBePadded;

        if(strToBePadded.length==0)     return '';
	try
        {
                strReturned = strReturned.substring(0,strReturned.length-strToBePadded.length).concat(strToBePadded);
        }catch(e){}

        ///alert( 'return--' + strReturned );

        if(typeof(objToBePadded)=='undefined')
                        event.srcElement.value = strReturned;
        else if(typeof(objToBePadded)=='object')
                        objToBePadded.value = strReturned;

        return strReturned;
}

function dispDefaultValue(defValue,elemObj,boolForceDisp)
{
	
	//alert(" "+defValue+" "+ elemObj+" "+boolForceDisp);
	//alert(eval("document."+elemObj).value);
	if(eval("document.Bank."+elemObj).value=="")
	{
		eval("document.Bank."+elemObj).value=defValue;
	}
	
/* if(typeof(elemObj) == "undefined")
  {
        if( TRIM(event.srcElement.value) != "")         return;
        /// if the element already has some value return without doing anything.
        if(typeof(defValue) == "undefined")             return;
        /// if there exist no element which has triggered this function return without doing anything
        if(typeof(defValue) == "undefined")
                event.srcElement.value="";      /// Set the field value to zero length string if
no parameter is passed
        else
                event.srcElement.value = defValue;      /// Set the field value to the parameter
value
        event.srcElement.select();
  }
  else
  {
	//alert("into else");
	//alert(defValue);
	//alert(elemObj.value + "box value");
        if(!boolForceDisp && TRIM(elemObj.value)!="")           return;
                        /// if the element already has some value return without doing anything.
	alert("elmobj -- "+elmobj);
        elemObj.value = defValue;
  }*/
}


/*Character Validation Begin*/

function charValidate(event)
{
//Allows Only Characters & spaces.
//Supporting Event - OnKeyUp.

// var src=window.event.srcElement;
// var field=src.value;
var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;

	var len=field.length;
	if(len!=0)
		{
			for(var i=0;i< len;i++)
			{
				var str=field.charAt(i);
				if(!((str>="a"&&str<="z")||(str>="A"&&str<="Z")||str==" "))
				{
					alert(charValid,"../img/help.jpg","Ok",3);
					src.value="";
					src.focus();
					return;
				}
			}
		}
}
/*Character Validation Begin

E-mail Validation Begin*/
function isEmail(event) 
{
//Checks for Valid Mail ID.
//Supporting Event - onBlur.

// var src=window.event.srcElement;
// var field=src.value;
var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;

	if(field.length)
	{
		if (window.RegExp) 
		{
			var reg1str = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
			var reg2str = "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$";
			var reg1 = new RegExp(reg1str);
			var reg2 = new RegExp(reg2str);
			if (!reg1.test(field) && reg2.test(field))
			  return true;
			alert(mailID,"../img/help.jpg","Ok",3);
			src.value="";
			src.focus();
		}
		else
		{
			if(str.indexOf("@") >= 0)
			  return true;
			alert(mailID,"../img/help.jpg","Ok",3);
			src.value="";
			src.focus();
		}
	}
}
/*E-mail Validation End


ScalePrecision Begin*/
function ScalePrecision4(event,nORp)
{
//Floating Point Validation
//Check for single Period(.) and 2 digit Precision.
//Supporting Event - OnKeyUp.

// var src=window.event.srcElement;
// var field=src.value;

var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;

var len=field.length;
if(len!=0)
	{
		//var str=field.substr(len-1,len);
		//Check for Positive Entries.
		for(var i=0;i< len;i++)
		{
			var str=field.charAt(i);
			if (nORp=="p" || nORp=="P")
			{
				if(!(str>=0 && str<=9) && !(str==".") || str==" ")
				{
					alert(numValid,"../img/help.jpg","Ok",3);
					src.value="";
					break;
				}
			}
			//Check for Negative Entries.
			else if(nORp=="n" || nORp=="N")
			{
				if(str=="-")
				{
					if(field.lastIndexOf(str)!=0)
					{
						alert(validNO,"../img/help.jpg","Ok",3);
						src.value="";
						break;
					}
				}
				if(!((str>="0" && str<="9")||str=="-") && !(str=="."))
				{
					alert(numValid,"../img/help.jpg","Ok",3);
					src.value="";
				}
			}

			//Check for Single Period(.)
			if (str==".")
			{
				if ((field.lastIndexOf(str)!=field.indexOf(str)))
				{
					alert(validNO,"../img/help.jpg","Ok",3);
					src.value="";
					return;
				}
			}
			//Check for 2 digits after Precision.
			if(!(field.indexOf(".")<0))
			{
				var pos=field.indexOf(".");
				var afterDigit=field.substr(pos+1,len);

				if(afterDigit.length>4)
				{
					alert(digitPrsn1,"../img/help.jpg","Ok",3);
					src.value="";
					break;
				}
			}
		}
	}
}
/*ScalePrecision End 

ScalePrecision Begin*/
function ScalePrecision(event,nORp)
{
//Floating Point Validation
//Check for single Period(.) and 2 digit Precision.
//Supporting Event - OnKeyUp.

// var src=window.event.srcElement;
// var field=src.value;

var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;

var len=field.length;
if(len!=0)
	{
		//var str=field.substr(len-1,len);
		//Check for Positive Entries.
		for(var i=0;i< len;i++)
		{
			var str=field.charAt(i);
			if (nORp=="p" || nORp=="P")
			{
				if(!(str>=0 && str<=9) && !(str==".") || str==" ")
				{
					alert(numValid,"../img/help.jpg","Ok",3);
					src.value="0.0";
					break;
				}
			}
			//Check for Negative Entries.
			else if(nORp=="n" || nORp=="N")
			{
				if(str=="-")
				{
					if(field.lastIndexOf(str)!=0)
					{
						alert(validNO,"../img/help.jpg","Ok",3);
						src.value="0.0";
						break;
					}
				}
				if(!((str>="0" && str<="9")||str=="-") && !(str=="."))
				{
					alert(numValid,"../img/help.jpg","Ok",3);
					src.value="0.0";
				}
			}

			//Check for Single Period(.)
			if (str==".")
			{
				if ((field.lastIndexOf(str)!=field.indexOf(str)))
				{
					alert(validNO,"../img/help.jpg","Ok",3);
					src.value="0.0";
					return;
				}
			}
			//Check for 2 digits after Precision.
			if(!(field.indexOf(".")<0))
			{
				var pos=field.indexOf(".");
				var afterDigit=field.substr(pos+1,len);

				if(afterDigit.length>2)
				{
					alert(digitPrsn,"../img/help.jpg","Ok",3);
					src.value="0.0";
					return;
				}
			}
		}
	}
}
/*ScalePrecision End*/
function ScalePrec(event,nORp,src)
{
//Floating Point Validation
//Check for single Period(.) and 2 digit Precision.
//Supporting Event - OnKeyUp.


//var src=window.event.srcElement;
//alert("src = " + src);
// var field=eval(src).value;
//alert(" field = " +field);

var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=eval(src).value;
var len=field.length;
if(len!=0)
	{
		//var str=field.substr(len-1,len);
		//Check for Positive Entries.
		for(var i=0;i< len;i++)
		{
			var str=field.charAt(i);
			if (nORp=="p" || nORp=="P")
			{
				if(!(str>=0 && str<=9) && !(str==".") || str==" ")
				{
					alert(numValid,"../img/help.jpg","Ok",3);
					src.value="";
					break;
				}
			}
			//Check for Negative Entries.
			else if(nORp=="n" || nORp=="N")
			{
				if(str=="-")
				{
					if(field.lastIndexOf(str)!=0)
					{
						alert(validNO,"../img/help.jpg","Ok",3);
						src.value="";
						break;
					}
				}
				if(!((str>="0" && str<="9")||str=="-") && !(str=="."))
				{
					alert(numValid,"../img/help.jpg","Ok",3);
					src.value="";
				}
			}

			//Check for Single Period(.)
			if (str==".")
			{
				if ((field.lastIndexOf(str)!=field.indexOf(str)))
				{
					alert(validNO,"../img/help.jpg","Ok",3);
					src.value="";
					return;
				}
			}
			//Check for 2 digits after Precision.
			if(!(field.indexOf(".")<0))
			{
				var pos=field.indexOf(".");
				var afterDigit=field.substr(pos+1,len);

				if(afterDigit.length>2)
				{
					alert(digitPrsn,"../img/help.jpg","Ok",3);
					src.value="";
					break;
				}
			}
		}
	}
}
/*ScalePrecision End

Date Validation Begin*/
var valDay,valMnth,valYr;

function IsDate(event)
{
//Check for Correct Date Entry.
//Format is - dd/mm/yyyy.
//year is between - 1900 to 2050.
//Supporting Event - OnBlur.
//Input Parameter - Object for which date has to be checked.
//Returns 1 if any error.

	var Day,Month,Year;
	// var src=window.event.srcElement;
	var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	

	var objVal=src.value;

	if(objVal == "") return;

	var _Fpos=objVal.indexOf("/");
	var _Lpos=objVal.lastIndexOf("/");
	
	Day=retDay(_Fpos,objVal);					
	if(Day != 'eD')								
	{	
		Month=retMonth(_Fpos,_Lpos,objVal);	
		
		if(Month != 'eM')
		{
			Year = retYear(_Lpos,objVal);
			if(Year != 'eY')
			{
				var iSts = fnDinM(Day,Month,Year);
				if(iSts == 1) return 1;
			}
			else {
				alert("Enter 4 Digit / > 1900 && < 2099 Year","../img/help.jpg","Ok",3); 
				return 1;
			}
		}
		else {
			alert("Not a Proper Month","../img/help.jpg","Ok",3); 
			return 1;
		}
	}
	else {
		alert("Not a Proper Day","../img/help.jpg","Ok",3);  
		return 1;
	}
}

function retDay(Fpos,objVal)
{
	if(Fpos != 1 && Fpos != 2) return 'eD';
	
	valDay=objVal.substr(0,Fpos);
	if(valDay=="0" || valDay=="00") return 'eD';
	
	return valDay;
}

function retMonth(Fpos,Lpos,objVal)
{
	if((Fpos+1)==Lpos) return 'eM';
	if(Lpos != 3 && Lpos != 4 && Lpos != 5) return 'eM';
	
	valMnth=objVal.substr(Fpos+1,(Lpos-Fpos-1));
	if(valMnth=="0" || valMnth=="00") return 'eM';
	if(valMnth > 12) return 'eM';
	
	return valMnth;
}

function retYear(Lpos,objVal)
{
	valYr=objVal.substr(Lpos+1);
	
	if(valYr.length < 4) return 'eY';
	if(!(valYr > 1900 && valYr < 2050)) return 'eY';
	
	return valYr;
}

function fnDinM(D,M,Y)
{
	var arrNLP = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var arrLP = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
	
	var i=fnLPYR(Y);	//0 - Not Leap Year, 1- Leap Year
	
	if(i==0)
	{
		if(D > arrNLP[M-1])
		{
			alert("Not a Proper Day","../img/help.jpg","Ok",3);
			return 1;
		}
	}
	else if(i==1)
	{
		if(D > arrLP[M-1])
		{
			alert("Not a Proper Day","../img/help.jpg","Ok",3);
			return 1;
		}
	}
}

function fnLPYR(year)
{
	if((year%4)==0)
	{
		if((year%100)==0)
		{
			if((year%1000)==0)
				return 1;
			else
				return 0;
		}
		else return 1;
	}
	else return 0;
}
/*Date Validation end

Mandatory Field Validation Begin*/
//Mandatory Field Validation.
//Check for Entry in Mandatory Fields.
//Supporting Event : OnClick().
//Input Parameter  :
//frm - Form Name, obj - Objects for which entry is to checked.

	function BlankCheck(frm,obj)
	{
		var arrObj = new Array();
		var iPos,iCnt=0;
//		alert("Called BlankCheck ");
//		alert("Frm =" +frm+" obj="+obj);
		while(obj.indexOf(":") != -1)
		{
			iPos = obj.indexOf(":");
//			alert(" object = " + obj.substring(0,iPos));
			arrObj[iCnt++] = obj.substring(0,iPos);
			var iCnt2 = --iCnt;
//			alert(" values are"+ arrObj[iCnt2]);
//			alert("document."+frm+".elements[arrObj[iCnt2]]");
//			alert(eval("document."+frm+"."+arrObj[iCnt2]).value);
			if(eval("document."+frm+"."+arrObj[iCnt2]).value == "")
			{

		alert("Entries in mandatory" + eval("document."+frm+"."+arrObj[iCnt2]).id +" fields required");
		eval("document."+frm+"."+arrObj[iCnt2]).focus();
		return 1;
		}
			obj = obj.substring(iPos+1,obj.length);
		}
		//alert("all filled ");
		return 0;
	}
/*Mandatory Field Validation End

Numeric Validation (Regular Expression) Begin*/
// nORp - Indicates Validation Check for Negative Number or Positive Number
// Value to be Passed - N/n for Negative Numbers
// Value to be Passed - P/p for Positive Numbers
// Supporting Event - OnKeyUp.

	function numValidateREG(nORp)
	{
		// var src=window.event.srcElement;
		// var field=src.value;

		
		var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;

		var reguExp,msg,reg1,numChk;
		if(field.length)
		{
			if(nORp=="p"||nORp=="P")		
			{
				reguExp = "\\d$";
				msg = numValid;
			}
			else if(nORp=="n"||nORp=="N")
			{
				reguExp = "[\\- \\d]$";	//split -ve to seperate match use -ve with quote.
				msg = numValidNeg;
				if(field.lastIndexOf("-") > 0)
				{
					alert(validNO,"../img/help.jpg","Ok",3);
					src.focus; 
					src.select();
				}
			}
			
			reg1 = new RegExp(reguExp);
			numChk = reg1.test(field);
			if(!(numChk))
			{
				alert(msg,"../img/help.jpg","Ok",3);	
				src.focus; 
				src.select();
			}
		}
	}
/*Numeric Validation (Regular Expression) End

Character Validation (Regular Expression) Begin*/
//Allows Only Characters & spaces.
//Supporting Event - OnKeyUp.

	function charValidateREG()
	{
		var src=window.event.srcElement;
		var field=src.value;
		
		var reguExp = "[' 'a-zA-Z]$";
		var reg1 = new RegExp(reguExp);
		var charChk = reg1.test(field);
		if(!(charChk))
		{
			alert(charValid,"../img/help.jpg","Ok",3);	
			src.focus;	
			src.select();
		}
	}
/*Character Validation (Regular Expression) End

Alpha Numeric Validation (Regular Expression) Begin*/
// Allows Only Characters & numbers
// Supporting Event - OnKeyUp.

	function alnumValidateREG(event)
	{
		// var src=window.event.srcElement;
		// var field=src.value;
		
		var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;		
		var reguExp1 = "\\'|\\`$";		
		var reg1 = new RegExp(reguExp1);
		var charChk1 = reg1.test(field);
		if(charChk1)
		{
			src.value = field.substring(0,field.length-1);
			charChk1 = false;
		}

		var reguExp2 = "\\.{2}|\\,{2}|\\_{2}$";
		var reg2 = new RegExp(reguExp2);
		var charChk2 = reg2.test(field);
		if(charChk2)
		{
			src.value = field.substring(0,field.length-1);
			charChk2 = false;
		}

		var reguExp = "[\\(' '\\) [a-zA-Z0-9]$";
		var reg1 = new RegExp(reguExp);
		var charChk = reg1.test(field);

		if(!(charChk) && (charChk1 || charChk2))
		{
			alert(alNum,"../img/help.jpg","Ok",3);	
			src.focus; 
			src.select();
		}
	}
/*Alpha Numeric Validation (Regular Expression) End

Validation for Special Characters begin*/
function myTest(event)
{
//Allows Only Characters & numbers
//Supporting Event - OnKeyUp.

	// var src=window.event.srcElement;
	// var field=src.value;
	var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;
	var len=field.length;
	if(len)
	{
		for(var i=0;i< len;i++)
		{			
			var str=field.charAt(i);
			if( str =="\\"  || str =="'" || str =="\"" )
			{
				alert(" Entered character is not valid ","../img/help.jpg","Ok",3);
				src.value="";
				src.focus();
				return;
			}
		}
	}
}
/*Validation for Special Characters end

A/c No. Validation - with Slash Begin*/ 
function AcNoValidate(event)
{
//Allows Only Characters & numbers	
//Supporting Event - OnKeyUp.		

	// var src=window.event.srcElement;
	// var field=src.value;
	
	var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;
	var len=field.length;

	if(len)
	{
		if(field.indexOf("/") != field.lastIndexOf("/"))
		{
			alert(alNumWS,"../img/help.jpg","Ok",3);
			src.value="";
			src.focus();
			return;
		}

		for(var i=0;i< len;i++)
		{
			var str=field.substr(len-1,len)
			if(!(str>="0" && str<="9" ||((str>="a"&&str<="z")||(str>="A"&&str<="Z")) || str=="/"))
			{
				alert(alNumWS,"../img/help.jpg","Ok",3);
				src.value="";
				src.focus();
				return;
			}
		}
	}
}
/*A/c No. Validation - with Slash End*/


                                                                                                                             
///Padding FOr OutStation Cheque
                                                                                                                             
                                                                                                                             
function padUpOsCheque(objToBePadded, intLength, paddingChar,BranchAbrName)
{
        ////// Default Length - 12
        ////// Default Character to be padded - 0
        ////// Default Object - Element calling this function
                                                                                                                             
        var strReturned = BranchAbrName, strToBePadded = '';
        if( typeof(intLength)=='undefined' )    intLength=parseInt('12');
        if( typeof(paddingChar)=='undefined' )  paddingChar='0';
        for(var i=0; i<intLength; i++)  strReturned = strReturned.concat(paddingChar);
                                                                                                                             
        ///alert( typeof(objToBePadded));
                                                                                                                             
        if(typeof(objToBePadded)=='undefined')
                strToBePadded = event.srcElement.value;
        else if(typeof(objToBePadded)=='object')
                strToBePadded = objToBePadded.value;
        else
                strToBePadded = objToBePadded;
                                                                                                                             
        if(strToBePadded.length==0)     return '';
        try
        {
                strReturned = strReturned.substring(0,strReturned.length-strToBePadded.length).concat(strToBePadded);
        }catch(e){}
                                                                                                                             
        ///alert( 'return--' + strReturned );
                                                                                                                             
        if(typeof(objToBePadded)=='undefined')
                        event.srcElement.value = strReturned;
        else if(typeof(objToBePadded)=='object')
                        objToBePadded.value = strReturned;
                                                                                                                             
        return strReturned;
}
/////   STRING PADDING FUNCTION End
//if(!(str>="0" && str<="9" ||((str>="a"&&str<="z")||(str>="A"&&str<="Z"))||str==" "||str==","))


/*
Code Written by Laxmi.M on 15-04-2008
Function to Validate Pan Number 
Pan Number is of size 10 . First five are identified by Character and next four are identified by integer and last is identified by Character again
*/
function isPanNumber(event)
{
//alert(" in pan fun");
// var src=window.event.srcElement;
// var field=src.value;


var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;
	// alert("field :"+field);
	if(field.length)
	{
	if(field.length<10)
	{
	alert(panNO,"../img/help.jpg","Ok",3);
	src.value="";
	src.focus();
	return;
	}
	/*else if(!(((field.charAt(0)>="a" && field.charAt(0)<="z" )||(field.charAt(0)>="A" && field.charAt(0)<="Z"))&&((field.charAt(1)>="a" && field.charAt(1)<="z" )||(field.charAt(1)>="A" && field.charAt(1)<="Z"))&&((field.charAt(2)>="a" && field.charAt(2)<="z" )||(field.charAt(2)>="A" && field.charAt(2)<="Z"))&&((field.charAt(3)>="a" && field.charAt(3)<="z" )||(field.charAt(3)>="A" && field.charAt(3)<="Z"))&&((field.charAt(4)>="a" && field.charAt(4)<="z" )||(field.charAt(4)>="A" && field.charAt(4)<="Z"))&&(field.charAt(5)>="0" && field.charAt(5)<="9")&&(field.charAt(6)>="0" && field.charAt(6)<="9")&&(field.charAt(7)>="0" && field.charAt(7)<="9")&&(field.charAt(8)>="0" && field.charAt(8)<="9")&&((field.charAt(9)>="a" && field.charAt(9)<="z" )||(field.charAt(9)>="A" && field.charAt(9)<="Z"))))
	alert(" not valid");
	else
	alert("is valid");	*/
	
	if(!(((field.charAt(0)>="a" && field.charAt(0)<="z" )||(field.charAt(0)>="A" && field.charAt(0)<="Z"))&&((field.charAt(1)>="a" && field.charAt(1)<="z" )||(field.charAt(1)>="A" && field.charAt(1)<="Z"))&&((field.charAt(2)>="a" && field.charAt(2)<="z" )||(field.charAt(2)>="A" && field.charAt(2)<="Z"))&&((field.charAt(3)>="a" && field.charAt(3)<="z" )||(field.charAt(3)>="A" && field.charAt(3)<="Z"))&&((field.charAt(4)>="a" && field.charAt(4)<="z" )||(field.charAt(4)>="A" && field.charAt(4)<="Z"))&&(field.charAt(5)>="0" && field.charAt(5)<="9")&&(field.charAt(6)>="0" && field.charAt(6)<="9")&&(field.charAt(7)>="0" && field.charAt(7)<="9")&&(field.charAt(8)>="0" && field.charAt(8)<="9")&&((field.charAt(9)>="a" && field.charAt(9)<="z" )||(field.charAt(9)>="A" && field.charAt(9)<="Z"))))
	{
	alert(panNO,"../img/help.jpg","Ok",3);
	src.value="";
	src.focus();
	return;
	
	}
	else
	return true;
		
	
	}
	
}
	/*
	Code Added by Padmaja on 26/june/2008.......@a1094
	Function:: to validate Rate of Interest field,it should not Accept 
	More than 100%
	
	*/
	function RateofInterest()
	{
	
	// var src=window.event.srcElement;
	// var field=src.value;
	
	var src;
if (document.all)
    {
src= event.srcElement;
    }
else
    {
src= event.target;
	}
	
var field=src.value;
	if(field.length)
	{

	if(field>100)
	{
	alert(" Rate of Interest Should Not Be Greater Than 100% ");
	src.value="";
	src.focus();
	return;
	}
	}
	
	}

	// function added by santhosh for formatting given input to two decimals (EX: 23244.4325 o/p is 23244.43)
	// working example added in outward clearing total amount
	function formatNumber(myNum, numOfDec)
	{
	var decimal = 1
	for(i=1; i<=numOfDec;i++)
	decimal = decimal *10

	var myFormattedNum = (Math.round(myNum * decimal)/decimal).toFixed(numOfDec)
	return(myFormattedNum)
	} 
	
	/** 04-05-2010
	 *  Added by Srilekha R
	 *  to trim right and left spaces 
	 **/
	
	String.prototype.trim = function() {		
		return this.replace(/^\s+|\s+$/g,"");
	}
	String.prototype.ltrim = function() {
		return this.replace(/^\s+/,"");
	}
	String.prototype.rtrim = function() {
		return this.replace(/\s+$/,"");
	}
	
	/** 04-05-2010
	 *  Added by Srilekha R
	 *  regular expression to allow only numerics
	 *  returns true or false
	 **/
	
	function numericCheck(testVal)
	{
		var objRegExp  = /(^-?\d\d*$)/;
		return objRegExp.test(testVal);
	}
	
	/** 21-06-2010
	 *  Added by Srilekha R
	 *  regular expression to validate pan number
	 *  returns true or false
	 **/
	
	function panNoCheck(testVal)
	{
	   var regex1=/^[A-Z]{5}\d{4}[A-Z]{1}$/;  	   
	   return regex1.test(testVal);	
	}

	/*
	 * Function added by laxmi for Proper Validation of Date on 23 Aug 2010
	 */
	
function IsValidDate(event){

	var src;
	if (document.all)
	    {
	src= event.srcElement;
	    }
	else
	    {
	src= event.target;
		}
		
	var inDate=src.value;
	if(inDate.length)
	{
		if((inDate.length<10) || (inDate.substring(2,3) != "/"  && inDate.substring(5,6) != "/") )
		  {
			   alert("Enter Date In DD/MM/YYYY Format"," ","OK",3);
			   src.value="";
			   src.focus();
			   return;
		  }
		
		var Day =  inDate.substring(0,2);
		var Mn  =  inDate.substring(3,5);
		var Yr  =  inDate.substring(6,10);
		var DateVal = Mn + "/" + Day + "/" + Yr;
		var dt = new Date(DateVal);
	
		    if(dt.getDate()!=Day){
		        alert('Invalid Date');
		        src.value="";
		    	src.focus();
		        return(false);
		        }
		    else if(dt.getMonth()!=Mn-1){
		    //this is for the purpose JavaScript starts the month from 0
		        alert('Invalid Date');
		        src.value="";
		    	src.focus();
		        return(false);
		        }
		    else if(dt.getFullYear()!=Yr){
		        alert('Invalid Date');
		        src.value="";
		    	src.focus();
		        return(false);
		        }
		        
		    return(true);
	} 
}
// end of date validation function