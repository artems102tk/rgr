








const images = document.querySelectorAll('.image img');
let currentImageIndex = 0;


images.forEach((image, index) => {
    image.addEventListener('click', () => {
      
        if (!document.fullscreenElement) {
            image.requestFullscreen(); // ��������� ���� �� ���� �����
        } else {
            document.exitFullscreen(); // ����� � �������������� ������
        }
    });
});




//document.addEventListener('DOMContentLoaded', function () {
 //   var dBlocks = document.querySelectorAll('.d');

  //  function checkVisibility() {
   //     dBlocks.forEach(function (dBlock) {
    //        var rect = dBlock.getBoundingClientRect();
    //        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

      //      if (rect.top <= windowHeight * 0.75) { // Якщо блок знаходиться у верхній чверті видимої області вікна
          //      dBlock.classList.add('visible');
       //     } else {
          //      dBlock.classList.remove('visible'); // Якщо блок не знаходиться у видимій області, видаляємо клас visible
         //   }
     //   });
  //  }

    // Викликаємо функцію перевірки видимості при завантаженні сторінки і при прокрутці
  //  checkVisibility();
  //  window.addEventListener('scroll', checkVisibility);
//});





//document.addEventListener('DOMContentLoaded', function () {
  //  var dBlocks = document.querySelectorAll('.d2');

   // function checkVisibility() {
    //    dBlocks.forEach(function (dBlock) {
     //       var rect = dBlock.getBoundingClientRect();
      //      var windowHeight = window.innerHeight || document.documentElement.clientHeight;

      //      if (rect.top <= windowHeight * 0.75) { // Якщо блок знаходиться у верхній чверті видимої області вікна
       //         dBlock.classList.add('visible');
       //     } else {
        //        dBlock.classList.remove('visible'); // Якщо блок не знаходиться у видимій області, видаляємо клас visible
        //    }
       // });
   /// }

    // Викликаємо функцію перевірки видимості при завантаженні сторінки і при прокрутці
  //  checkVisibility();
   // window.addEventListener('scroll', checkVisibility);
//});





function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

$(document).ready(function () {
    $('.news-list').slick({
        slidesToShow: 3, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 2000, 
        infinite: true, 
        prevArrow: '<button type="button" class="slick-prev">Previous</button>', 
        nextArrow: '<button type="button" class="slick-next">Next</button>', 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1 
                }
            }
        ]
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Перевірка розміру екрану при завантаженні сторінки і при зміні розміру
function checkScreenSize() {
    var menu = document.getElementById('menu');
    var menuToggle = document.getElementById('menu-toggle');
    if (window.innerWidth > 768) {
        menu.style.display = 'block'; // Показуємо меню
        menuToggle.classList.add('hidden'); // Приховуємо кнопку
    } else {
        menu.style.display = 'none'; // Приховуємо меню
        menuToggle.classList.remove('hidden'); // Показуємо кнопку
    }
}

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Додаємо або видаляємо клас 'active'
});

