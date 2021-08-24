window.onscroll = function() {stickyAdder()};

// Get the header
const navBar = document.getElementsByClassName("topnav")[0];
const navBarHeight = navBar.offsetHeight;
const sticky = navBar.offsetTop;

const sections = document.getElementsByClassName("important");
const navLinks = document.getElementsByClassName("nav-link");

function stickyAdder() {
  const yOffset = window.pageYOffset - navBarHeight;
  if (yOffset > sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

//function below is not responsive
const linkOnClick = () => {
  for(var i=0; i < navLinks.length; i++){
    const headerHeight = (sections[i].offsetTop - navBarHeight - 48);
    console.log(headerHeight, sections[i].offsetTop)
    navLinks[i].addEventListener("click", function(){
      console.log(headerHeight)
      window.scrollTo(0 , headerHeight);
    })
  }
}

linkOnClick();
//add function that changes the color of the navbar when you scroll
//when clicking on a navbar link the navbar covers the header
//add a fixed css class so then you scroll the header and navbar stay together
