var ESSID = "";
var VALUE = 0;

function numeric(value) {

	if ( value == parseInt(value) )
		return value;
	else
		return ( value.charCodeAt(0) - 55 );

} 

function toHex(d) {

	var r = d % 16;
	var result;

    if ( d - r == 0 ) 
    	result = toChar(r);
    else 
    	result = toHex( (d - r) / 16 ) + toChar(r);

    return result;

}

function toChar(n) {

	const alpha = "0123456789ABCDEF";
        return alpha.charAt(n);

}

function calcit(formin) {

	ESSID = formin.essid.value;
	var ESSID = ESSID.toUpperCase(); 

	for (i = 0; i < 5; i++) {
		VALUE = VALUE + ( numeric(ESSID[i]) * Math.pow(36, i) );
	}

	//Spit out the keys
	formout.key.value = '1801' + toHex(VALUE);
	formout.key2.value = '1F90' + toHex(VALUE);
	VALUE = 0;
	
}

function SelectAll(id) {

    document.getElementById(id).focus();
    document.getElementById(id).select();

}


