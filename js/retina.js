var onOff = document.getElementById('on-off');
onOff.addEventListener("click", function() {
    var iframe = document.querySelector('iframe');
    var doc = iframe.contentWindow.document;

    var placeForAce = document.getElementById('place-for-ace');
    var browser = document.getElementById('browser');
    
    var editorH = document.getElementById('editor');
    
    var radio4 = document.getElementById('optionsRadios4');
    var radio5 = document.getElementById('optionsRadios5');
    var radio6 = document.getElementById('optionsRadios6');

    if (radio4.checked && (onOff.className === ('btn btn-info btn-md focus' || 'btn btn-info btn-md'))){
        placeForAce.className = '';
        placeForAce.className = 'col-md-6';
        editorH.style.height = '618px';
        iframe.style.height = '305px';
        browser.style.margin = '0';
        browser.className = '';
        browser.className = 'col-md-4 browser';
    }else if (radio5.checked && (onOff.className === ('btn btn-info btn-md focus' || 'btn btn-info btn-md'))){
        placeForAce.className = '';
        placeForAce.className = 'col-md-4';
        editorH.style.height = '618px';
        iframe.style.height = '345px';
        browser.style.margin = '0';
        browser.className = '';
        browser.className = 'col-md-8 browser';
    }else if (radio6.checked && (onOff.className === ('btn btn-info btn-md focus' || 'btn btn-info btn-md'))){
        placeForAce.className = '';
        placeForAce.className = 'col-md-12';
        editorH.style.height = '280px';
        iframe.style.height = '345px';
        browser.style.marginTop = '20px';
        browser.style.marginLeft = '12px';
        browser.style.maxWidth = '1144px';
        browser.className = '';
        browser.className = 'col-md-12 browser';
    }else{
        placeForAce.className = '';
        placeForAce.className = 'col-md-4';
        editorH.style.height = '618px';
        iframe.style.height = '345px';
        browser.style.margin = '0';
        browser.className = '';
        browser.className = 'col-md-8 browser';
    }

    (function (window, location) {

        function upperCaseFirst(str) {
            str += '';
            var first = str.charAt(0).toUpperCase();
            return first + str.substr(1);
        }

        var prefixes = "Webkit Moz Khtml O ms Icab".split(" ");

        var getVendorPrefix = function () {
            var prefix = "";
            var testStyle = "Transform";
            var bodyStyle = doc.body.style;

            for (var i = 0, l = prefixes.length; i < l; i++) {
                if (bodyStyle[prefixes[i] + testStyle] !== void 0) {
                    return prefixes[i];
                }
            }

            return prefix;
        };

        var retinaStyles = retinaChoice;

        var nonRetinaStyles = {
            "transform": "",
            "transformOrigin": ""
        };

        function toggleRetinaEmulation() {
            var prefix = getVendorPrefix();
            var bodyStyle = doc.body.style;
            var styles;
            var prefixedKey;

            if (window.devicePixelRatio > 1) {
                styles = nonRetinaStyles;
                window.devicePixelRatio = 1;
            }
            else {
                styles = retinaStyles;
                window.devicePixelRatio = 2;
            }

            for (var key in styles) {
                prefixedKey = prefix ? prefix + upperCaseFirst(key) : key;
                bodyStyle[prefixedKey] = styles[key];
            }
        }

        /**
         * Firefox doesn't allow common browser JS objects like window and
         * setInterval if this code is copy-pasted into the URL. If this is false,
         * we gotta bail and let them know
         */
        if (!this.setInterval) {
            return "Can't copy paste this. https://bugzilla.mozilla.org/show_bug.cgi?id=527530";
        }

        var handle = setInterval(function () {
            if (doc.body) {
                clearInterval(handle);
                toggleRetinaEmulation();
            }
        }, 10);

    })(window, location);
});
var retinaChoice ={
    "transform": "scale(1)",
    "transformOrigin": "0 0"
};

document.getElementById('optionsRadios1').addEventListener("click", function () {
    retinaChoice = {
        "transform": "scale(1)",
        "transformOrigin": "0 0"
    }
});

document.getElementById('optionsRadios2').addEventListener("click", function () {
    retinaChoice = {
        "transform": "scale(2)",
        "transformOrigin": "0 0"
    }
});

document.getElementById('optionsRadios3').addEventListener("click", function () {
    retinaChoice = {
        "transform": "scale(3)",
        "transformOrigin": "0 0"
    }
});






























/*
if (radio4.checked) {

 }else if (radio5.checked){
 $('toggle-view').on('click',function () {
 $('place-for-ace').toggleClass("col-md-6 col-md-12");
 $('browser').toggleClass("col-md-6 col-md-12");
 });
 }else if (radio6.checked) {
 $('toggle-view').on('click',function () {
 $('place-for-ace').toggleClass("col-md-6 col-md-12");
 $('browser').toggleClass("col-md-6 col-md-12");
 });
 }

$('toggle-view').click(function () {
    $('place-for-ace').swithClass("col-md-6 col-md-12");
    $('browser').toggleClass("col-md-6 col-md-12");
});*/
