!function () {
  $("#mainform > input, textarea").keyup(function () {
    var isEmpty = false;
    $("#mainform > input, textarea").each(function () {
      if ($(this).val() === "") {
        isEmpty = true;
      }
    });

    if (isEmpty) {
      $(".form-btn").attr("disabled", "disabled");
    } else {
      $(".form-btn").removeAttr("disabled");
    }
  });
}();