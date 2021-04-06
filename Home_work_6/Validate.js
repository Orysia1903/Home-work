// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

// регистрация обработчиков событий элементов формы.
function init() {
    form1.addEventListener('submit', onsubmitHandler);
    form1.addEventListener('change', validate);
}

function validate(elem) {
    var pattern = [/\S/, /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i, /\d{5}/];
    for (var i = 0; i < form1.elements.length; ++i) {
        var elem = form1.elements[i];
        var res = pattern[i].test(elem.value);
        if (res === false) {
            elem.className = "invalid";
        } 
        else {
            elem.className = "valid";
        }
    }
}

function onsubmitHandler(event) {

    for (var i = 0; i < form1.elements.length; ++i) {
        var elem = form1.elements[i];
        // проверка типа элемента и наличия обработчика события onchange.
        if (elem.type == "text" && elem.onchange) {
            elem.className = "valid";
            elem.onchange(); // запуск события onchange
            if (elem.className == "invalid") {
                alert("Допущены ошибки при заполнении формы.");
                event.preventDefault();
                return false; // отмена отправки формы.
            }
        }
    }
}
