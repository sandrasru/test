$(window).on("resize scroll", function () {
  var value = $(this).scrollTop();

  if (value > $("header.hero").height()) {
    $("body").addClass("show-banner");
    $("body").removeClass("animate-form");
  } else {
    $("body").removeClass("show-banner");
    $("body").addClass("animate-form");
  }
});
$(window).scroll();

window.addEventListener("load", function () {
  // add referrer for broker
  var ref = window.location.href;
  var url = ref.substring(0, ref.indexOf(".php") + 4);
  var refDom = document.querySelector("input[name='referrer']");
  if (refDom != null) {
    refDom.value = url;
  }
  var forms = document.getElementsByClassName("needs-validation"); // Loop over them and prevent submission

  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        let nameContent = document.querySelector("#complete_name").value.split(" ");

        if (!(nameContent.length >= 2)) {
          document.querySelector("#error_name").classList.remove("not-show");
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated"); // Add loader when submitted

        document.querySelector(".loader__overlay").classList.remove("not-show");
      },
      false
    );
  });

  /** Estimate */

  function formatNumber(nStr) {
    nStr += "";
    x = nStr.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  }

  $("#estimate-slider").slider({
    tooltip: "always",
    formatter: function (value) {
      return "€ " + formatNumber(value);
    },
  });

  $("#estimate-slider").on("slide", function (e) {
    $(".card-estimate .card-estimate-result span").html("€ " + formatNumber(e.value * 5.226));
  });

  /** Goto position */

  $(".goto-position").click(function () {
    var href = $(this).attr("data-target");
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(href).offset().top,
      },
      500
    );
    return false;
  });

  /** Goto form */

  $(".goto-form").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".hero").offset().top,
      },
      300
    );
    return false;
  });
});
