function acejs1() {
    var editor = ace.edit("editor1");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/css");
    var iframe = document.querySelector('iframe');
    var doc = iframe.contentWindow.document;
    var style = doc.createElement('style');
    doc.head.appendChild(style);
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
        doc.head.lastChild.innerHTML = editor.getValue();
    });

}

acejs1();