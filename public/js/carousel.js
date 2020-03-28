$(document).ready(function() {
    var owl = $('.owl-carousel');
  
    owl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4500,
      nav: true,
      margin: 10,
    });
  
    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h5').removeClass('animated pulse');
   $('.owl-item').not('.cloned').eq(item).find('h5').addClass('animated pulse');
    });
  
  });

  var firebaseConfig = {
    apiKey: "AIzaSyAbIrxhlpo0cX8-uIvHUSuCCYSK2Gsa6Q4",
    authDomain: "ecellweb-d32be.firebaseapp.com",
    databaseURL: "https://ecellweb-d32be.firebaseio.com",
    projectId: "ecellweb-d32be",
    storageBucket: "ecellweb-d32be.appspot.com",
    messagingSenderId: "1009691924549",
    appId: "1:1009691924549:web:5892786fa2f1003d22eb2c",
    measurementId: "G-FYZVWEDYY9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();