$(document).ready(function () {
  var $codes = $(".code");

  $codes.first().focus();

  $codes.on("keydown", function (e) {
    var index = $codes.index(this);
    if (e.key >= 0 && e.key <= 9) {
      $(this).val("");
      setTimeout(function () {
        $codes.eq(index + 1).focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(function () {
        $codes.eq(index - 1).focus();
      }, 10);
    }
  });

  $codes.on("input", function () {
    var allFilled = true;
    $codes.each(function () {
      if ($(this).val() === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      setTimeout(function () {
        alert("Code entered successfully!");
        $codes.val("");
        $codes.first().focus();
      }, 250);
    }
  });
});
