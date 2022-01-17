(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PLNSHXS');


(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
ga("provide", "adblockTracker", function (tracker, opts) {
  var ad = document.createElement("ins");
  ad.className = "AdSense"; //Name of ad partner you're working with.
  ad.style.display = "block";
  ad.style.position = "absolute";
  ad.style.top = "-1px";
  ad.style.height = "1px";
  document.body.appendChild(ad);
  tracker.set("dimension" + opts.dimensionIndex, !ad.clientHeight);
  document.body.removeChild(ad);
});
ga("create", "UA-205379383-4", "auto"); //Replace UA-XXXXX-Y with your tracking ID.
ga("require", "adblockTracker", { dimensionIndex: 1 });
ga("send", "pageview");
