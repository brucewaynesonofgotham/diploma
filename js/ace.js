var editor = ace.edit("editor");
editor.setTheme("ace/theme/chaos");
editor.getSession().setMode("ace/mode/html");
var iframe = document.querySelector('iframe');
var doc = iframe.contentWindow.document;
editor.getSession().on('change', function() {
    // Вывод содержимого редактора в iframe
    doc.body.innerHTML = editor.getValue();
});
editor.setValue("<!DOCTYPE html>\n<html>\n\t<head>\n\t</head>\n\t<body>\n\t\t<p>Привет, рукожоп! Давай научимся верстать вместе!</p>\n\t</body>\n</html>");