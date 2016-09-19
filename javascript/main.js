// QUESTION:

// Is there a way I can repeat lines 5-26, as many times as is needed to match the # of times that the .tile elements occur on the page?

// I tried putting it within a for() loop, but that over-wrote all the variables in such a way so that the last occurance of .tile was the only one that worked.

// This is for a prototype I'm hoping to put together quickly, where I want to have 6-12 empty tiles on a page, in which CMs will be able to drag and drop images into each tile freely

// In this example as-is, you can drag and drop into the first 2 tiles –- b/c I brute forced it by copying the lines 5-26 below. obviously that is a non ideal way to do it.


$(window).bind("load", function() {

  $(document).on("click", '.tile.tile--withImage', function(e) {
    if($(e.target).is(".caption")) return;
    $(this).addClass('tile--textOnly');
    $(this).removeClass('tile--withImage');
    $('.caption').blur();
    return false;
  });

  $(document).on("click", '.tile.tile--textOnly', function(e) {
    if($(e.target).is(".caption")) return;
    $(this).removeClass('tile--textOnly');
    $(this).addClass('tile--withImage');
    $('.caption').blur();
    return false;
  });

$(document).on("click", '.imageWrapper.hasImage .imageClose', function(e) {
  $(this).parent('.imageWrapper').removeClass('hasImage').addClass('predrop');
  $(this).parent('.imageWrapper').find('.dropImage').attr('src','');
  $(this).parent('.imageWrapper').find('.dragDropInstructions').show();
  $(dropImage).attr('src',event.target.result);
});






var holder = [];

$.each( $('.dropzone'), function(index,val) {
  $(val).addClass('dropzone' + index);
});

for (i = 0; i < $('.dropzone').length; i++ ) {

  holder[i] = $('.dropzone')[i];

    holder[i].ondragover = function () { $(this).find('.tile').addClass('hover'); return false; };
    holder[i].ondragleave = function () { $(this).find('.tile').removeClass('hover'); return false; };
    holder[i].ondrop = function (e) {
      var dropImage = $(this).find('.dropImage'),
          imageWrapper = $(this).find('.imageWrapper'),
          dragDropInstructions = $(this).find('.dragDropInstructions');

      $(this).find('.tile').removeClass('hover');
      $(imageWrapper).removeClass('predrop').addClass('hasImage');
      $(dragDropInstructions).hide();
      e.preventDefault();
      var file = e.dataTransfer.files[0],
          reader = new FileReader();
      reader.onload = function (event) {
        $(dropImage).attr('src',event.target.result);
      };
      reader.readAsDataURL(file);
      return false;
    };

}

});
