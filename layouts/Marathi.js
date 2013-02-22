function keyboardElement(ltr)
{
	this.chr = ltr.toLowerCase();
	this.alt = false;
	if(isLetter(ltr))
		this.shift = ltr.toUpperCase() == ltr;
	else
	{
		if(ltr == 'ऍ' || ltr == 'ॅ' || ltr == '्र' || ltr == 'र्' || ltr == 'ज्ञ' || ltr == 'त्र' ||
		   ltr == 'क्ष' || ltr == '(' || ltr == ')' || ltr == 'श्र' || ltr == 'ः' || ltr == 'ऋ' || 
		   ltr == 'छ' || ltr == 'ठ' || ltr == 'ऑ' || ltr == 'ढ' || ltr == 'ञ' || ltr == '।' || ltr == 'य़' || ltr == 'ष')
		    this.shift = true;
		else
			this.shift = false;
	}
	this.turnOn = function () { 
        if(isLetter(this.chr))
			document.getElementById(dobiTipkoId(this.chr)).className = "next"+dobiFinger(this.chr.toLowerCase());
		else if(this.chr == ' ')
			document.getElementById(dobiTipkoId(this.chr)).className = "nextSpace";
		else
			document.getElementById(dobiTipkoId(this.chr)).className = "next"+dobiFinger(this.chr.toLowerCase());
		if(this.chr == '\n' || this.chr == '\r\n' || this.chr == '\n\r' || this.chr == '\r')
			document.getElementById('jkeyenter').className = "next4";
		if(this.shift)
		{
			document.getElementById('jkeyshiftd').className="next4";
			document.getElementById('jkeyshiftl').className="next4";
		}
		if(this.alt)
			document.getElementById('jkeyaltgr').className="nextSpace";
    };
    this.turnOff = function () {
		if(isLetter(this.chr))
        {
			if(this.chr == 'ो' || this.chr == 'े' || this.chr == '्' || this.chr == 'ि' ||
			   this.chr == 'र' || this.chr == 'क' || this.chr == 'त')
			   document.getElementById(dobiTipkoId(this.chr)).className = "finger"+dobiFinger(this.chr.toLowerCase());
			else 
				document.getElementById(dobiTipkoId(this.chr)).className = "normal";
		}
		//These charecters are at : and ; in Inscript 
		else if(this.chr == 'छ' || this.chr == 'च')             
		//English specific ; and 
			document.getElementById(dobiTipkoId(this.chr)).className = "finger4";
		else
			document.getElementById(dobiTipkoId(this.chr)).className = "normal";
		if(this.chr == '\n' || this.chr == '\r\n' || this.chr == '\n\r' || this.chr == '\r')
			document.getElementById('jkeyenter').classname = "normal";			
		if(this.shift)
		{
			document.getElementById('jkeyshiftd').className="normal";
			document.getElementById('jkeyshiftl').className="normal";
		}
		if(this.alt)
			document.getElementById('jkeyaltgr').className="normal";
	};
}

function dobiFinger(t_crka)
{
	if(t_crka == ' ')
		return 5;
	else if(t_crka == 'ौ' || t_crka == 'ो' || t_crka == '1' ||  t_crka == '2' || t_crka == '' || t_crka == 'ष' || 
			t_crka == 'ज' || t_crka == 'ढ' || t_crka == 'ञ' || t_crka == 'च' || 
			t_crka == 'ॉ'' || t_crka == ट || t_crka == 'य' || t_crka == 'ृ' || t_crka == '-' ||
			t_crka == 'ऍ' || t_crka == 'ॅ' || t_crka == '।' || t_crka == 'ड' || t_crka == '़' ||
			t_crka == 'च' || t_crka == 'ठ' || t_crka == 'ऑ' || t_crka == 'य़' || t_crka == 'ऋ' || t_crka == 'ः')
		return 4;
	else if(t_crka == 'ै' || t_crka == 'े' || t_crka == 'ं' || t_crka == '3' || t_crka == '्र' || t_crka == '.' || 
	        t_crka == 'त' || t_crka == 'द' || t_crka == '०' || t_crka == ')')
		return 3;
	else if(t_crka == '्' || t_crka == 'ा' || t_crka == 'म' || t_crka == '4' || t_crka == 'क' || t_crka == 'ग' || 
	        t_crka == '9' || t_crka == ',' || t_crka == 'र्' || t_crka == '(')
		return 2;
	else if(t_crka == 'न' || t_crka == 'व' || t_crka == 'ि' || t_crka == 'ु' || t_crka == 'ी' || t_crka == 'ू' || 
	        t_crka == '5' || t_crka == '6' || t_crka == '7' || t_crka == '8' || t_crka == 'ज्ञ' || t_crka == 'त्र' || 
	        t_crka == 'स' || t_crka == 'ल' || t_crka == 'र' || t_crka == 'प' || t_crka == 'ह' || t_crka == 'ब' ||
	        t_crka == 'श्र' || t_crka == 'क्ष')
		return 1;
	else
		return 6;
}

function dobiTipkoId(t_crka)
{
	if(t_crka == ' ')
		return "jkeyspace";
	else if(t_crka == ',')
		return "jkeyvejica";
	else if(t_crka == '\n')
		return "jkeyenter";
	else if(t_crka == '.')
		return "jkeypika";
	else if(t_crka == '-' || t_crka == '_')
		return "jkeypomislaj";            
	else if(t_crka == '!')
		return "jkey1";
	else if(t_crka == '@')
		return "jkey2";
	else if(t_crka == '#')
		return "jkey3";
	else if(t_crka == '$')
		return "jkey4";
	else if(t_crka == '%')
		return "jkey5";
	else if(t_crka == '^')
		return "jkey6";
	else if(t_crka == '&')
		return "jkey7";
	else if(t_crka == '*')
		return "jkey8";
	else if(t_crka == '(')
		return "jkey9";
	else if(t_crka == ')')
		return "jkey0";
	else if(t_crka ==  '-' || t_crka == '_')	
		return "jkeypomislaj";
	else if(t_crka == '[' || t_crka == '{')	
		return "jkeyoglokl";
	else if(t_crka == ']' || t_crka == '}')
		return "jkeyoglzak";
	else if(t_crka == ';' || t_crka == ':')
		return "jkeypodpicje";
	else if(t_crka == "'" || t_crka == '"')
		return "jkeycrtica";
	else if(t_crka == "\\" || t_crka == '|')
		return "jkeybackslash";
	else if(t_crka == ',')
		return "jkeyvejica";
	else if(t_crka == '.')
		return "jkeypika";
	else if(t_crka == '=' || t_crka == '+')
		return "jkeyequals";
	else if(t_crka == '?' || t_crka == '/')
		return "jkeyslash";
	else if(t_crka == '<' || t_crka == '>')
		return "jkeyckck";
	else
		return "jkey"+t_crka;
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
