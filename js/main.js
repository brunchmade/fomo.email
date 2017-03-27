$( document ).ready(function() {
  $('.js-previewOpen').on("click", function(){
    $('.emailcontainer').fadeIn();
    $('.emailwindow').css("bottom", "0");
  });

  $('.js-previewClose').on("click", function(){
    $('.emailcontainer').fadeOut();
    $('.emailwindow').css("bottom", "-95vh");
  });
});