function acejs() {
    var editor = ace.edit("editor");
    editor.getSession().setMode("ace/mode/html");
    var iframe = document.querySelector('iframe');
    var doc = iframe.contentWindow.document;
    var currentContent ='';
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
        doc.body.innerHTML = editor.getValue();
        currentContent = editor.getValue();
    });
    editor.setValue('<!DOCTYPE html>\n<html>\n\t<head>\n\t</head>\n\t<body>\n\t\t<picture>\n\t\t\t<source srcset="/images/400.jpg">' +
        '\n\t\t\t<source srcset="/images/800.jpg">\n\t\t\t<source srcset="/images/1200.jpg">' +
        '\n\t\t\t<source srcset="/images/400.jpg">\n\t\t\t<img srcset="/images/400.jpg" alt="My default image">\n\t\t</picture>\n\t</body>\n</html>' +
        '\n<!--Не успел запилить анимацию на индикаторах-->');
}

acejs();

