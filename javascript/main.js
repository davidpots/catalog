$(window).bind("load", function() {

    $.each(compositions, function(i) {
      comp = compositions[i];
      compImage = "https://media.mainstreethub.com/media/" + comp["id"];
      compPP = "https://passport.mainstreethub.com/location/" + comp["location"];

      $.ajax({
           url: compPP,
           dataType: 'text',
           success: function(data) {
                var element = $(".location-name").html(data)[0];
                var theText = element.nodeValue;
                // for(var i = 0; i < elements.length; i++) {
                //      var theText = elements[i].firstChild.nodeValue;
                //      // Do something here
                // }
                console.log(theText);
           }
      });


      placeholder =  '<div class="tile">\
                        <div class="imageWrapper">\
                          <a href="'+ compImage +'"><img class="dropImage" src="'+ compImage +'" /></a>\
                        </div>\
                        <div class="photoLabel">\
                          <a class="photoLabel-pp" href="'+ compPP +'"></a>\
                          <span class="photoLabel-location">'+ comp["location"] +'</span>\
                        </div>\
                      </div>';
      $('.container').append(placeholder);
    });







});
