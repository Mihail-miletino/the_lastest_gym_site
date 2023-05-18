const arr_links_1 = document.querySelectorAll(".menu_link");
const arr_lines = document.querySelectorAll(".line");

if (arr_links_1.length > 0){
    for (let index = 0; index < arr_links_1.length; index++){
        arr_links_1[index].addEventListener("mouseover", function(event){
            const element = event.target.textContent.toLowerCase();
            if (arr_lines.length > 0){
                for (let index_2 = 0; index_2 < arr_lines.length; index_2++){
                    if (element == arr_lines[index_2].id.toLowerCase()){
                        arr_links_1[index].classList.add("add_pixels");
                        arr_lines[index_2].classList.add("show");
                    };
                };
            };
        });
    };
};

if (arr_links_1.length > 0){
    for (let index = 0; index < arr_links_1.length; index++){
        arr_links_1[index].addEventListener("mouseout", function(event){
            if (arr_lines.length > 0){
                for (let index_2 = 0; index_2 < arr_lines.length; index_2++){
                    arr_links_1[index].classList.remove("add_pixels");
                    arr_lines[index_2].classList.remove("show");
                };
            };
        });
    };
};

const menuBurger = document.querySelector(".menu_burger");
const menuBurgerContainer = document.querySelector(".menu_burger_container");
const Body = document.querySelector("Body");
const wrapper = document.querySelector(".wrapper");

const headerButton = document.querySelector(".header_button_link");
const firstBlockButton = document.querySelector(".first_block_button_link");
const menuBurgerLink = document.querySelector(".menu_burger_list_link");
const darkLink = document.querySelector(".menu_dark_link");

menuBurger.addEventListener("click", function(event){
    menuBurgerContainer.classList.toggle("use");
    menuBurgerContainer.classList.toggle("brightness")
    Body.classList.toggle("overflow");
    wrapper.classList.toggle("overflow");
    headerButton.classList.toggle("pointer");
    firstBlockButton.classList.toggle("pointer");
    darkLink.classList.toggle("change");
});

darkLink.addEventListener("click", function(event){
    menuBurgerContainer.classList.toggle("use");
    menuBurgerContainer.classList.toggle("brightness")
    Body.classList.toggle("overflow");
    wrapper.classList.toggle("overflow");
    headerButton.classList.toggle("pointer");
    firstBlockButton.classList.toggle("pointer");
    darkLink.classList.toggle("change");
    event.preventDefault();
});

menuBurgerLink.addEventListener("click", function(event){
    menuBurgerContainer.classList.remove("use");
    menuBurgerContainer.classList.remove("brightness")
    Body.classList.remove("overflow");
    wrapper.classList.remove("overflow");
    headerButton.classList.remove("pointer");
    firstBlockButton.classList.remove("pointer");
    darkLink.classList.remove("change");
    event.preventDefault();
});

const arr_navigation = document.querySelectorAll(".nav");
const arr_scrolls = document.querySelectorAll(".scroll");

if (arr_navigation.length > 0){
    for (let index = 0; index < arr_navigation.length; index++){
        arr_navigation[index].addEventListener("click", function(event){
            event.preventDefault();
            if (arr_scrolls.length > 0){
                for (let index_2 = 0; index_2 < arr_scrolls.length; index_2++){
                    const arr_classes = arr_scrolls[index_2].classList;
                    for (let index_3 = 0; index_3 < arr_classes.length; index_3++){
                        if (arr_navigation[index].textContent.toLowerCase() == arr_classes[index_3].toLowerCase()){
                            arr_scrolls[index_2].scrollIntoView({
                                block: "start",
                                inline: "nearest",
                                behavior: "smooth"
                            });
                            menuBurgerContainer.classList.toggle("use");
                            Body.classList.toggle("overflow");
                            wrapper.classList.toggle("overflow");
                            headerButton.classList.toggle("pointer");
                            firstBlockButton.classList.toggle("pointer");
                            darkLink.classList.toggle("change");
                        };
                    };
                };
            };
        });
    };
};

const arr_links_next = document.querySelectorAll(".menu_link");

if (arr_links_next.length > 0){
    for (let index = 0; index < arr_links_next.length; index++){
        arr_links_next[index].addEventListener("click", function(event){
            headerButton.classList.toggle("pointer");
            firstBlockButton.classList.toggle("pointer");
        });
    };
};

const sepButton = document.querySelector(".separator_button_link");
const popup = document.querySelector(".popup_wrapper");
const popup_2 = document.querySelector(".popup_wrapper_2");
const popupClose = document.querySelector(".popup_close_1");
const popupClose_2 = document.querySelector(".popup_close_2");
const popupButton = document.querySelector(".popup_button_close");
const popupButton_2 = document.querySelector(".popup_button_close_2");

sepButton.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.toggle("show_popup");
    popupClose.classList.toggle("change");
    Body.classList.toggle("overflow");
});

popupButton.addEventListener("click", function(event){
    popup.classList.toggle("show_popup");
    popupClose.classList.toggle("change");
    Body.classList.toggle("overflow");
});

popupClose.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.toggle("show_popup");
    popupClose.classList.toggle("change");
    Body.classList.toggle("overflow");
});

headerButton.addEventListener("click", function(event){
    event.preventDefault();
    popup_2.classList.toggle("show_popup");
    popupClose_2.classList.toggle("change");
    Body.classList.toggle("overflow");
});

popupButton_2.addEventListener("click", function(event){
    popup_2.classList.toggle("show_popup");
    popupClose_2.classList.toggle("change");
    Body.classList.toggle("overflow");
});

popupClose_2.addEventListener("click", function(event){
    event.preventDefault();
    popup_2.classList.toggle("show_popup");
    popupClose_2.classList.toggle("change");
    Body.classList.toggle("overflow");
});

firstBlockButton.addEventListener("click", function(event){
    event.preventDefault();
    popup_2.classList.toggle("show_popup");
    popupClose_2.classList.toggle("change");
    Body.classList.toggle("overflow");
});

const button = document.querySelector(".popup_button_reg");
const form = document.querySelector("form");
const inputEmail = document.querySelector("#email");
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputPhone = document.querySelector("#telephone");

button.addEventListener("click", function(event){
    event.preventDefault();
    let prohibitSymbols = checkEmail_2(inputEmail.value);
    let digits_and_symbols = checkName(inputName.value);
    let digits_and_symbols_2 = checkSurname(inputSurname.value);
    let phone = checkPhone(inputPhone.value);
    let value = inputEmail.value;
    let error = 0;
    let str = inputEmail.value;
    let str_2 = inputName.value;
    let str_3 = inputSurname.value;
    let str_4 = inputPhone.value;
    if (str == ""){
        addClass(inputEmail);
        error += 1;
    } else{
        removeClass(inputEmail);
    };
    if (str_2 == ""){
        addClass(inputName);
        error += 1;
    } else{
        removeClass(inputName);
    };
    if (str_3 == ""){
        addClass(inputSurname);
        error += 1;
    } else{
        removeClass(inputSurname);
    };
    if (str_4 == ""){
        addClass(inputPhone);
        error += 1;
    } else{
        removeClass(inputPhone);
    };
    let a = checkEmail(inputEmail.value);
    if (a == false || prohibitSymbols == true || value[0] == "."){
        addClass(inputEmail);
        error += 1;
    } else{
        removeClass(inputEmail);
    };
    if (digits_and_symbols == true || str_2 == ""){
        addClass(inputName);
        error += 1;
    } else{
        removeClass(inputName);
    };
    if (digits_and_symbols_2 == true || str_3 == ""){
        addClass(inputSurname);
        error += 1;
    } else{
        removeClass(inputSurname);
    };
    if (error == 0){
        form.submit();
        error = 0;
    };
    console.log(error);
});

function addClass(x){
    x.classList.add("red");
};

function removeClass(x){
    x.classList.remove("red");
};

function checkEmail(x){
    let regexp = /\w+\@\w+\.\w{2,255}/gi;
    let result = regexp.test(x);
    return result;
};

function checkName(x){
    let str = "0123456789!#$%&~=,'@?-+/";
    let count = 0;
    for (let index = 0; index < x.length; index++){
        for (let index_2 = 0; index_2 < str.length; index_2++){
            if (x[index] == str[index_2]){
                count += 1;
            };
        };
    };
    if (count == 0){
        return false;
    } else{
        return true;
    };
};

function checkSurname(x){
    let str = "0123456789!#$%&~=,'@?-+/";
    let count = 0;
    for (let index = 0; index < x.length; index++){
        for (let index_2 = 0; index_2 < str.length; index_2++){
            if (x[index] == str[index_2]){
                count += 1;
            };
        };
    };
    if (count == 0){
        return false;
    } else{
        return true;
    };
};

function checkPhone(x){
    let str = "0123456789";
    let count = 0;
    for (let index = 0; index < x.length; index++){
        for (let index_2 = 0; index_2 < str.length; index_2++){
            if (x[index] == str[index_2]){
                count += 1;
            };
        };
    };
    if (count == 11 && x.length == 11){
        return true;
    } else{
        return false;
    };
};

function checkEmail_2(x){
    let count = 0;
    let prohibit = "!#$%&~=,'-+";
    for (let index = 0; index < x.length; index++){
        for (let index_2 = 0; index_2 < prohibit.length; index_2++){
            if (x[index] == prohibit[index_2]){
                count += 1;
            };
        };
    };
    if (count == 0){
        return false;
    } else{
        return true;
    };
};
