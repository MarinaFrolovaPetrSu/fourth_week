let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [61.785017, 34.346878],
    zoom: 12,
    controls: []
  });

  const coords = [
    [61.78459, 34.357363],
    [61.780996, 34.384800],
    [61.795065, 34.359648],
    [61.774997, 34.307355]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "./img/icons/marker.svg",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);