ymaps.ready(init);
  var mapContainer = document.querySelector(".map");
  var myMap;

function init(){
    myMap = new ymaps.Map(mapContainer, {
      center: [59.938667, 30.323073],
      zoom: 15,
      controls: []
    });

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'ул. Большая Конюшенная, 19/8',
    balloonContent: 'Это красивая метка'
  },
  {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.svg',
    iconImageSize: [36, 36]
  });

  myMap.geoObjects.add(myPlacemark);
  
  myMap.behaviors.disable('scrollZoom');
}
