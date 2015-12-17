(function() {

  var menuBtn = document.querySelector('.main-menu__icon');
  var minusBtn = document.querySelectorAll('.contest-form__number-change-btn--minus');
  var plusBtn = document.querySelectorAll('.contest-form__number-change-btn--plus');

//-----------------------------------------------------------------
  
  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    this.parentNode.parentNode.classList.toggle('main-menu--closed');
  });

//------------------------------------------------------------------

    var inputDate = minusBtn[0].nextElementSibling;
  

  minusBtn[0].addEventListener('click', function(event) {
    event.preventDefault();

    var num = parseInt(inputDate.value, 10);

    if (num > 5) {
      inputDate.value = --num + " дней";
    } else if (num <= 5 & num > 2) {
      inputDate.value = --num + " дня";
    } else {
      inputDate.value = "1 день";
      this.classList.add('contest-form__number-change-btn--disable');
      this.classList.remove('contest-form__number-change-btn--minus');
    }
  });
  
  plusBtn[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var num = parseInt(inputDate.value, 10);

    if (num >= 4) {
      inputDate.value = ++num + " дней";
    } else if (num < 4 & num > 0) {
      inputDate.value = ++num + " дня";
      minusBtn[0].classList.remove('contest-form__number-change-btn--disable');
      minusBtn[0].classList.add('contest-form__number-change-btn--minus');
    } else {
      inputDate.value = "1 день";
    }
  });

//------------------------------------------------------------------
  
  var inputCompanion = minusBtn[1].nextElementSibling;
  

  minusBtn[1].addEventListener('click', function(event) {
    event.preventDefault();

    var num = parseInt(inputCompanion.value, 10);

    if (num > 1) {
      inputCompanion.value = --num + " чел";
    } else {
      inputCompanion.value = "0 чел"
      this.classList.add('contest-form__number-change-btn--disable');
      this.classList.remove('contest-form__number-change-btn--minus');
    }
  });
  
  plusBtn[1].addEventListener('click', function(event) {
    event.preventDefault();

    var num = parseInt(inputCompanion.value, 10);

    inputCompanion.value = ++num + " чел";

    if (num >= 1) {
      minusBtn[1].classList.remove('contest-form__number-change-btn--disable');
      minusBtn[1].classList.add('contest-form__number-change-btn--minus');
    }
  });

//-----------------------------------------------------------------

  if (!("FormData" in window)) {
      return;
    }

  var form = document.querySelector(".contest-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = new FormData(form);

    request(data, function(response) {
      console.log(response);
    });
  });

  function request(data, fn) {
    var xhr = new XMLHttpRequest();

    var time = (new Date()).getTime();

    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);

    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
    });

    xhr.send(data);
  }

}) ();
