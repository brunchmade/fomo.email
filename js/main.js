$( document ).ready(function() {
  $('.js-previewOpen').on("click", function(){
    $('.emailcontainer').fadeIn(200);
    $('.emailwindow').css("bottom", "0");
  });

  $('.js-previewClose').on("click", function(){
    $('.emailcontainer').fadeOut(200);
    $('.emailwindow').css("bottom", "-95vh");
  });
});