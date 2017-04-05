function acejs() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/chaos");
    editor.getSession().setMode("ace/mode/html");
    var iphoneIframe = document.getElementById('iphoneIframe');
    var docIphone = iphoneIframe.contentWindow.document;
    var ipadIframe = document.getElementById('ipadIframe');
    var docIpad = ipadIframe.contentWindow.document;
    var pcIframe = document.getElementById('pcIframe');
    var docPc = pcIframe.contentWindow.document;
    var iframe = document.querySelector('iframe');
    var doc = iframe.contentWindow.document;
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
        doc.body.innerHTML = editor.getValue();
        docIphone.body.innerHTML = editor.getValue();
        docIpad.body.innerHTML = editor.getValue();
        docPc.body.innerHTML = editor.getValue();
    });
    editor.setValue("<!DOCTYPE html>\n<html>\n\t<head>\n\t</head>\n\t<body>\n\t\t<p>Привет, рукожоп! " +
        "Давай научимся верстать вместе!</p>\n\t\t<img src='http://orig03.deviantart.net/11e8/f/2007/035/6/b/batman___black_and_white_by_nafasmotor.jpg'> " +
        "\n\t</body>\n</html>");
}
acejs();

/*
<img
src="https://image.ibb.co/gsqeiv/400.jpg"
srcset=" 400w, https://image.ibb.co/g4dRVa/800.jpg 800w, https://image.ibb.co/c5DtAa/1200.jpg 1200w"
sizes="(min-width: 700px) 75vw, 100vw"
    >*/
/*
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p>Привет, рукожоп! Давай научимся верстать вместе!</p>
<img src="https://image.ibb.co/gsqeiv/400.jpg"
srcset="400w, https://image.ibb.co/g4dRVa/800.jpg 800w, https://image.ibb.co/c5DtAa/1200.jpg 1200w"
sizes="(min-width: 400px) 100vw, (min-width: 800px) 100vw, (min-width: 1200px) 100vw, 100vw">
    </body>
    </html>*/
