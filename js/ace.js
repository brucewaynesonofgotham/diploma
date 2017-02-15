var editor = ace.edit("editor");
editor.setTheme("ace/theme/chaos");
editor.getSession().setMode("ace/mode/css");
var iframe = document.querySelector('iframe');
var doc = iframe.contentDocument ||
    iframe.contentWindow.document;
editor.getSession().on('change', function() {
    // Вывод содержимого редактора в iframe
    doc.body.innerHTML = editor.getValue();
});
