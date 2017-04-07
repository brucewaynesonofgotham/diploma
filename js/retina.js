function retina() {
    var iframe = document.querySelector('iframe');
    var doc = iframe.contentWindow.document;
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

        /*var retinaStyles = retinaChoice;

*/
        var retinaStyles ={
            "transform": "scale(2)",
            "transformOrigin": "0 0"
        };

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
}
/*var retinaChoice ={
    "transform": "scale(2)",
    "transformOrigin": "0 0"
};

function changeScale() {
    if (radio1.checked) {
        retinaChoice = {
            "transform": "scale(1)",
            "transformOrigin": "0 0"
        }
    }else if (radio2.checked){
        retinaChoice = {
            "transform": "scale(2)",
            "transformOrigin": "0 0"
        }
    }else if (radio3.checked) {
        retinaChoice = {
            "transform": "scale(3)",
            "transformOrigin": "0 0"
        }
    }
}

$("#optionsRadios1").on("click", alert('1'));
$("#optionsRadios2").on("click", changeScale());
$("#optionsRadios3").on("click", changeScale());

var radio1 = document.getElementById('optionsRadios1');
var radio2 = document.getElementById('optionsRadios2');
var radio3 = document.getElementById('optionsRadios3');*/
