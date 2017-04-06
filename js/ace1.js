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
$( "#go" ).click(function() {
    $( "#block" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500 );
});
acejs1();