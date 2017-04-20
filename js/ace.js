function acejs() {
    var editor = ace.edit("editor");
    editor.getSession().setMode("ace/mode/html");
    var iframe = document.querySelector('iframe');
    var doc = iframe.contentWindow.document;
    var currentContent ='';
    var firstTask = document.getElementById('first-task');
    var secondTask = document.getElementById('second-task');
    var nextTask = document.getElementById('next-task');
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
        doc.body.innerHTML = editor.getValue();
        currentContent = editor.getValue();
        if (currentContent == '<!DOCTYPE html>\n<html>\n\t<head>\n\t</head>\n\t<body>\n\t\t<picture>\n\t\t\t<source srcset="/images/400.jpg" media="(max-width: 500px)">' +
            '\n\t\t\t<source srcset="/images/800.jpg">\n\t\t\t<source srcset="/images/1200.jpg">' +
            '\n\t\t\t<source srcset="/images/400.jpg">\n\t\t\t<img srcset="/images/400.jpg" alt="My default image">\n\t\t</picture>\n\t</body>\n</html>'){
            firstTask.style.backgroundColor = 'orange';
            firstTask.style.borderColor = 'orange';
        }
        if (currentContent == '<!DOCTYPE html>\n<html>\n\t<head>\n\t</head>\n\t<body>\n\t\t<picture>\n\t\t\t<source srcset="/images/400.jpg" media="(max-width: 500px)">' +
            '\n\t\t\t<source srcset="/images/800.jpg" media="(max-width: 900px)">\n\t\t\t<source srcset="/images/1200.jpg" media="(max-width: 1600px)">' +
            '\n\t\t\t<source srcset="/images/400.jpg">\n\t\t\t<img srcset="/images/400.jpg" alt="My default image">\n\t\t</picture>\n\t</body>\n</html>') {
            secondTask.style.backgroundColor = 'orange';
            firstTask.style.borderColor = 'orange';
            nextTask.removeAttribute('disabled');
        }
    });
    editor.setValue('<!DOCTYPE html>\n<html>\n\t<head>\n\t</head>\n\t<body>\n\t\t<picture>\n\t\t\t<source srcset="/images/400.jpg">' +
        '\n\t\t\t<source srcset="/images/800.jpg">\n\t\t\t<source srcset="/images/1200.jpg">' +
        '\n\t\t\t<source srcset="/images/400.jpg">\n\t\t\t<img srcset="/images/400.jpg" alt="My default image">\n\t\t</picture>\n\t</body>\n</html>');
}

acejs();

