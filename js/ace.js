function acejs() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/chaos");
    editor.getSession().setMode("ace/mode/html");
    var iframe = document.querySelector('iframe');
    var doc = iframe.contentWindow.document;
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
        doc.body.innerHTML = editor.getValue();
    });
    editor.setValue("<!DOCTYPE html>\n<html>\n\t<head>\n\t</head>\n\t<body>\n\t\t<p>Привет, рукожоп! " +
        "Давай научимся верстать вместе!</p>\n\t\t<img src='http://orig03.deviantart.net/11e8/f/2007/035/6/b/batman___black_and_white_by_nafasmotor.jpg'> " +
        "\n\t</body>\n</html>");
}

acejs();