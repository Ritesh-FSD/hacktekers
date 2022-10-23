let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}
//header background
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 50) {
        $(".nav-scroll").css("background" , "#050344");
      }

      else{
          $(".nav-scroll").css("background" , "");      
      }
  })
})

// upcoming project 

    
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
  // Change image every 2 seconds
}

        // free courses
        $(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});


// Premium courses




// contact us

  // contact us 
  function Mail(){
    
      let name = document.getElementById("Name").value;
      let email = document.getElementById("Email").value;
      let message = document.getElementById("message").value;

      //console.log(name, phone, email, message);

      Email.send({
        SecureToken:"7c27ee40-9fe2-4429-a5d0-3179bbda20a9",
        To : 'riteshgupta9939@gmail.com',
        From : "riteshgupta9939@gmail.com",
        Subject: "Mail from Hacktakers Student ",
        Body: "Name:" + name + "<br/> USer Eamil:" + email + "<br/> Message:" + message
      }).then(
        message =>{
          //console.log (message);
          if(message=='OK'){
          alert('Your mail has been send. Thank you for connecting.');
          }
          else{
            console.error (message);
            alert('There is error at sending message. ')
            
          }

        }
      );
    }




// Testimonial-section

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {



    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});
