(function() {

  var menuBtn = document.querySelector('.main-menu__icon');
  var minusBtn = document.querySelectorAll('.contest-form__number-change-btn--minus');
  var plusBtn = document.querySelectorAll('.contest-form__number-change-btn--plus');
  var deleteBtn = document.querySelectorAll('.contest-form__delete');
  var companionsBlock = document.querySelector('.contest-form__fieldset--companions').firstElementChild;
  var template = document.querySelector('#companion-name-input').innerHTML;

  function deleteInput(elem) {
    var parent = elem.parentElement;

    elem.addEventListener('tap', function(event) {
      event.preventDefault;
      parent.parentElement.removeChild(parent);

      var num = parseInt(inputCompanion.value, 10);
      inputCompanion.value = --num + " чел";

      if (num == 0) {
        disableBtn(minusBtn[1]);
      }
    });
  }

  function declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
  }

  function disableBtn(btn) {
    btn.classList.add('contest-form__number-change-btn--disable');
    btn.classList.remove('contest-form__number-change-btn--minus');
  }

  function enableBtn(btn) {
    btn.classList.remove('contest-form__number-change-btn--disable');
    btn.classList.add('contest-form__number-change-btn--minus');
  }

//-----------------------------------------------------------------

  menuBtn.addEventListener('tap', function(event) {
    event.preventDefault();

    this.parentNode.parentNode.classList.toggle('main-menu--closed');
  });

//------------------------------------------------------------------

  var inputDate = minusBtn[0].nextElementSibling;


  minusBtn[0].addEventListener('tap', function(event) {
    event.preventDefault();

    var num = parseInt(inputDate.value, 10);

    if (num > 2) {
      inputDate.value = --num + declOfNum(num, [' день', ' дня', ' дней']);

      if (this.classList.contains('contest-form__number-change-btn--disable')) {
        enableBtn(this);
      }
    } else {
      inputDate.value = '1 день';
      disableBtn(this);
    }
  });

  plusBtn[0].addEventListener('tap', function(event) {
    event.preventDefault();

    var num = parseInt(inputDate.value, 10);

    if (num >= 1) {
      inputDate.value = ++num + declOfNum(num, [' день', ' дня', ' дней']);

      if (minusBtn[0].classList.contains('contest-form__number-change-btn--disable')) {
        enableBtn(minusBtn[0]);
      }
    } else {
      inputDate.value = '1 день';
      disableBtn(minusBtn[0]);
    }
  });

//------------------------------------------------------------------

  var inputCompanion = minusBtn[1].nextElementSibling;

  for (var i = 0; i < deleteBtn.length; i++) {
    deleteInput(deleteBtn[i]);
  }


  minusBtn[1].addEventListener('tap', function(event) {
    event.preventDefault();

    var num = parseInt(inputCompanion.value, 10);

    if (num > 1) {
      inputCompanion.value = --num + " чел";
    } else {
      inputCompanion.value = "0 чел"
      disableBtn(this);
    }

    if (num > 0) {
      companionsBlock.removeChild(companionsBlock.lastElementChild);
    }
  });

  plusBtn[1].addEventListener('tap', function(event) {
    event.preventDefault();

    var num = parseInt(inputCompanion.value, 10);

    inputCompanion.value = ++num + " чел";

    if (minusBtn[1].classList.contains('contest-form__number-change-btn--disable')) {
      enableBtn(minusBtn[1]);
    }
//Находим номер попутчика
    var companionNumber = companionsBlock.lastElementChild.querySelector('.contest-form__companion-number');

    if (companionNumber) {
      companionNumber = parseInt(companionNumber.innerHTML) + 1;
    } else {
      companionNumber = num;
    }
//
    var html = Mustache.render(template, {number: companionNumber});

    companionsBlock.insertAdjacentHTML('beforeEnd', html);

    deleteBtn = document.querySelectorAll('.contest-form__delete');

    deleteInput(deleteBtn[deleteBtn.length - 1]);
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
