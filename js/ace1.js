var editor = ace.edit("editor1");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");
var iframe = document.querySelector('iframe');
var doc = iframe.contentWindow.document;
editor.getSession().on('change', function() {
    // Вывод содержимого редактора в iframe
    doc.body.innerHTML = editor.getValue();
});
