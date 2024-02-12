let eventCreation__eventServices__serviceSelection__btn =
  document.querySelectorAll(
    ".eventCreation__eventServices__serviceSelection__btn"
  );
let eventCreation__eventServices__serviceSelected__box =
  document.querySelectorAll(
    ".eventCreation__eventServices__serviceSelected__box"
  );
for (
  let j = 0;
  j < eventCreation__eventServices__serviceSelected__box.length;
  j++
) {
  eventCreation__eventServices__serviceSelected__box[j].style.display = "none";
}
eventCreation__eventServices__serviceSelected__box[0].style.display = "flex";
for (
  let i = 0;
  i < eventCreation__eventServices__serviceSelection__btn.length;
  i++
) {
  eventCreation__eventServices__serviceSelection__btn[i].addEventListener(
    "click",
    () => {
      for (
        let j = 0;
        j < eventCreation__eventServices__serviceSelected__box.length;
        j++
      ) {
        eventCreation__eventServices__serviceSelected__box[j].style.display =
          "none";
        if (
          eventCreation__eventServices__serviceSelection__btn[
            j
          ].classList.contains("service__active")
        ) {
          eventCreation__eventServices__serviceSelection__btn[
            j
          ].classList.remove("service__active");
        }
      }
      eventCreation__eventServices__serviceSelected__box[i].style.display =
        "flex";
      eventCreation__eventServices__serviceSelection__btn[i].classList.add(
        "service__active"
      );
    }
  );
}

// items numbers inc / dec in services buffet

// 1- hide all items number menu

let addItem__btn = document.querySelectorAll(".addItem__btn");
let card__quantity = document.querySelectorAll(
  ".serviceSelected__box__container__card__quantity"
);
const item_numbers = document.querySelectorAll(".card__quantity__number input");
const plus_btns = document.querySelectorAll(".card__quantity__plus");
const min_btns = document.querySelectorAll(".card__quantity__min");

for (let i = 0; i < addItem__btn.length; i++) {
  addItem__btn[i].addEventListener("click", () => {
    addItem__btn[i].style.display = "none";
    card__quantity[i].style.display = "flex";
    item_numbers[i].value = 1;
  });
}

for (let i = 0; i < plus_btns.length; i++) {
  plus_btns[i].addEventListener("click", () => {
    item_numbers[i].value = parseInt(item_numbers[i].value) + 1;
  });
}

for (let i = 0; i < min_btns.length; i++) {
  min_btns[i].addEventListener("click", () => {
    if (parseInt(item_numbers[i].value) > 1) {
      item_numbers[i].value = parseInt(item_numbers[i].value) - 1;
    } else {
      item_numbers[i].value = parseInt(item_numbers[i].value) - 1;
      addItem__btn[i].style.display = "flex";
      card__quantity[i].style.display = "none";
    }
  });
}

// serving qnt part

let serving__qnt = document.querySelectorAll(".serving__qnt");
let add__btn = document.querySelectorAll(".serving__card__rightSide__add__btn");
let serving__qnt__number = document.querySelectorAll(".serving__qnt__number");
let serving__qnt__plus = document.querySelectorAll(".serving__qnt__plus");
let serving__qnt__min = document.querySelectorAll(".serving__qnt__min");

for (let i = 0; i < add__btn.length; i++) {
  add__btn[i].addEventListener("click", () => {
    serving__qnt[i].style.display = "flex";
    add__btn[i].style.display = "none";
    serving__qnt__number[i].value = 1;
  });
}

for (let i = 0; i < serving__qnt__min.length; i++) {
  serving__qnt__min[i].addEventListener("click", () => {
    if (parseInt(serving__qnt__number[i].value) > 1) {
      serving__qnt__number[i].value =
        parseInt(serving__qnt__number[i].value) - 1;
    } else {
      serving__qnt__number[i].value =
        parseInt(serving__qnt__number[i].value) - 1;
      add__btn[i].style.display = "flex";
      serving__qnt[i].style.display = "none";
    }
  });
}

for (let i = 0; i < serving__qnt__plus.length; i++) {
  serving__qnt__plus[i].addEventListener("click", () => {
    serving__qnt__number[i].value = parseInt(serving__qnt__number[i].value) + 1;
  });
}