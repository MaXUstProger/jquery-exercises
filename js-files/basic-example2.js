//другие упр закомментированы в целях предотвращения некорретной работы
//на номера страниц можно не обращать внимание


// УПР. работа с формами. стр. 350 (все работает)
$(function() {
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');
    //показываем кнопку и скрываем форму
    $newItemButton.show();
    $newItemForm.hide();
    //при клике на кнопку делаем наоборот
    $('#showForm').on('click', function() {
        $newItemButton.hide();
        $newItemForm.show();
    });
    //отправляем введенное значение и добавляем его в конец списка
    //потом форма скрывается, кнопка добавить появляется и ранее введенное в форму значение очищается
    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        var newText = $('input:text').val();
        $('li:last').after('<li>'+newText+'</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');
    });
});