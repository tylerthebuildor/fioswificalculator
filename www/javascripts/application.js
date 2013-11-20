// App Namespace
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //document.addEventListener('DOMContentLoaded', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        document.inputForm.wifiName.addEventListener("keyup", this.displayPasswords, true);
    },
    // Display WEP Keys
    displayPasswords: function() {
        if ( inputForm.wifiName.value.length == 5 ) {
            var passwords = app.calcPasswords( inputForm.wifiName.value );

            document.outputForm.pass1.value = passwords.pass1;
            document.outputForm.pass2.value = passwords.pass2;
            document.outputForm.className = 'show';
        } else {
            document.outputForm.className = 'hide';
        } 

    },
    // Calculate Passwords
    calcPasswords: function(wifiName) {
        var value = 0, i = 0;
        wifiName = wifiName.toUpperCase();

        for ( ; i<5; i++) {
            value = value + ( app.numeric(wifiName[i]) * Math.pow(36, i) );
        }

        return { 
        	pass1: ( '1801' + app.toHex(value) ), 
        	pass2: ( '1F90' + app.toHex(value) ) 
        };       
    },
    // Return Numeric Value of Char
    numeric: function(value) {
        if ( value == parseInt(value) )
            return value;
        else
            return ( value.charCodeAt(0) - 55 );
    },
    // Convert Number to Hex
    toHex: function(d) {
        var r = d % 16, result;

        if ( d - r == 0 ) 
            result = app.toChar(r);
        else 
            result = app.toHex( (d - r) / 16 ) + app.toChar(r);

        return result;
    },
    // Convert Number to Char
    toChar: function(n) {
        const alpha = "0123456789ABCDEF";
        return alpha.charAt(n);
    }

};