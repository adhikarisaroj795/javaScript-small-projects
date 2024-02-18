$(document).ready(() => {
  $("#third").hide();

  //   $("#hide").click(() => {
  //     // $(".second").text("i am saroj");
  //     // $(".second").html("<em>i am saroj</em>");
  //     // console.log($(".second").text());
  //     // console.log($(".second").html());

  //     console.log($("#hide").val());
  //   });
  //   $("#hide").click(() => {
  //     $(".box").animate({
  //       width: "200px",
  //       height: "200px",
  //       fontSize: "10px",
  //     });
  //   });

  $("body").keydown((event) => {
    console.log(event.which);
    if (event.which === 72) {
      $(".second").hide();
    }
    if (event.which === 83) {
      $(".second").show();
    }
  });

  //   $("#hide").click(() => {
  //     // $("#hide").attr("type");

  //     $("#hide").attr("type", "reset");
  //   });

  $("#hide").click(() => {
    // $("#hide").attr("type");

    const color = $("div.box").css("background-color");
    $(".second").css("color", color);
  });

  //   $("#output").load("samle.txt", function (response, statusTxt, xhr) {
  //     console.log(response);
  //     console.log(statusTxt);
  //     console.log(xhr);

  //     if (statusTxt === "success") {
  //       alert("sucess");
  //     }
  //     if (statusTxt === "error") {
  //       alert("error" + xhr.statusTxt);
  //     }
  //   });

  $.get("https://jsonplaceholder.typicode.com/users", function (data, status) {
    console.log(data);
    console.log(status);
  });

  $.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      tittle: "this is title",
      body: "this is body",
    },
    function (data, status) {
      console.log(data);
      console.log(status);
    }
  );
});
