function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  function myFunction() {
    document.getElementById("list").classList.toggle("dropdown-content");
  }

 

  function show_hide() {
    var click = document.getElementById("list");
    if (click.style.display === "none") {
       click.style.display = "block";
    } else {
       click.style.display = "none";
    }
  }

