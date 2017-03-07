var editor = ace.edit("editor");
editor.setTheme("ace/theme/chaos");
editor.getSession().setMode("ace/mode/html");
var iframe = document.querySelector('iframe');

var doc = iframe.contentDocument ||
    iframe.contentWindow.document;
editor.getSession().on('change', function() {
    // Вывод содержимого редактора в iframe
    doc.body.innerHTML = editor.getValue();
});
editor.setValue("function a(b,c){\n\t//тело функции\n}");