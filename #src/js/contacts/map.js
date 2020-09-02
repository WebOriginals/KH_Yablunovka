var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [44.986022, 38.948921], // Cтаромышастовская
        controls: [ ],  // Массив для навигации карты
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Создание геообъекта со cвоим изображением.
    //Переменная  myUly
    var myUly = new ymaps.Placemark([44.986022, 38.948921], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/ic/address.svg',
        iconImageSize: [24, 32],
        iconImageOffset: [-15, -40]
    });

// Размещение геообъекта на карте.
    myMap.geoObjects
        .add(myUly);

// Добавим на карту ползунок масштаба и линейку.
    myMap.controls.add('zoomControl');

//Отключить изменение маштаба колесом и косанием
    myMap.behaviors.disable(['scrollZoom' , 'multiTouch' , 'drag']);
}



