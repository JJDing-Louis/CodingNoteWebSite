//
function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  $(document).ready(function(){
    $('header').load('header.html');
    $('footer').load('footer.html');
  });
  
  