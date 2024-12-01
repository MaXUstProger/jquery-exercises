//УПР. делегирование событий (все работает)
$(function() {
    var listItem, itemStatus, eventType;
    //метод on() в jquery можно рассматривать как обработчик события(ий)
    //всего имеет 4 параметра, обязательны только первый и последний
    $('ul').on(
        'click mouseover', //реагируем на два события click и mouseover
        ':not(#four)', //отфильтровываем эл-ты чей атриут id имеет значение four
        {status: 'important'}, //доп. данные передаются в виде объекта литерала
        //используем объект event, чтобы отобразить под списком содержимое элемента, с которым взаимодействовал пользователь
        function(e) {
            listItem = 'Элемент: '+e.target.textContent+'</br>';
            itemStatus = 'Статус: '+e.data.status+'</br>';
            eventType = 'Событие: '+e.type;
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );
});