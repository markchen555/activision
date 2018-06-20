$(document).ready(function(){
  // Modal Show
  $(".btn").on("click", function() {
    $(".modal").fadeIn("slow", function(){
      $(this).show();
    })
  })
  
  // Modal Hidden
  $(".close").on("click", function() {
    $(".modal").fadeOut("slow", function(){
      $(this).hide();
    })
    var videoSrc = $(".video").attr("src");
    $(".video").attr("src","");
    $(".video").attr("src",videoSrc);
  })

  // Modal hidden when click outsite of modal 
  $(window).on("click", function(e) {
    if(e.target.className == "modal") {
      $(".modal").fadeOut("slow", function(){
        $(this).hide();
      })
    }
    var videoSrc = $(".video").attr("src");
    $(".video").attr("src","");
    $(".video").attr("src",videoSrc);
  })
})


