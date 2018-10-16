// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Init Scrollspy
$('body').scrollspy({
  target: '#main-nav'
});

// Smooth Scrolling
$("#main-nav a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      window.location.hash = hash;
    });
  }
});

// Init Maps
ymaps.ready(init);
var myMap,
  myPlacemark;

function init() {
  myMap = new ymaps.Map("map", {
    center: [40.73779515136974, 30.336942672729496],
    zoom: 16
  });

  myPlacemark = new ymaps.Placemark([40.73779515136974, 30.336942672729496], {
    hintContent: 'Sakarya University, Axel Tech',
    balloonContent: 'Sakarya University, Axel Tech'
  });

  myMap.geoObjects.add(myPlacemark);
}