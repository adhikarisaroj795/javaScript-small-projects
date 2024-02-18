$(function () {
  console.log("working");
  console.log($);
  //   $("#f-h1").waypoint(
  //     function () {
  //       $("#my-skill").addClass("animate__animated animate__fadeInLeft");
  //       console.log("done");
  //     },
  //     { offset: "100%" }
  //   );

  $("#Danger").on("click", function () {
    $(".section2").fadeOut();
    $(".section1").fadeOut();
    $(".section3").fadeOut();
    setTimeout(function () {
      $(".section2").fadeIn();
      $(".section1").fadeIn();
      $(".section3").fadeIn();
    }, 7000);

    // setInterval(() => {
    //   $(".section2").hide();
    //   $(".section1").hide();
    //   $(".section3").hide();
    //   console.log("donek");
    // }, 5000);
  });
});
