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
                          <img class="dropImage" src="'+ compImage +'" />\
                        </div>\
                        <div class="photoLabel">\
                          <span class="photoLabel-location">'+ comp["location"] +'</span>\
                          <span class="photoLabel-links">\
                            <a target="_blank" title="View Passport" class="photoLabel-links-passport" href="'+ compPP +'"></a><a target="_blank" title="View Image" class="photoLabel-links-image" href="'+ compImage +'"></a>\
                          </span>\
                        </div>\
                      </div>';
      $('.container').append(placeholder);
    });







});
