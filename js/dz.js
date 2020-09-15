var name = document.getElementsByClassName('name')[0].value;
var old = document.getElementsByClassName('old')[0].value;
var label = document.querySelector('input[type=checkbox]');
var btn1 = document.getElementById("btn1");

function check() {
    if (name != null && old > 18 && label.checked) {
        alert('Вам разрешен доступ к сайту');
    }
    else {
        alert('Доступ запрещен');
    }
}

btn1.addEventListener('click', check);
