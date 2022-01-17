  function cid() {
    var url = document.URL;
    var n = url.lastIndexOf("clickid=") + 8;
    if (n == 7){
      try {
        document.getElementById("hitid").value = window['dtpCallback'].getClickID();
      }
      catch (error) {
        const k = Date.now();
        document.getElementById("hitid").value = k;
      }
    } else {
      if (url.substring(n).indexOf('&') !== -1) {
        var clickid = url.substring(n).substr(0, url.substring(n).indexOf('&'));
        document.getElementById("hitid").value = clickid;
      } else {
        var clickid = url.substring(n);
        document.getElementById("hitid").value = clickid;
      }
    }
  };
  setTimeout( function() { cid(); }, 5000);
