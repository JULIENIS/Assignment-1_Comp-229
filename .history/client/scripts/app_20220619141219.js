"use strict";
(function () {
    function Start() {
        console.log("App Started!");
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = "/movie-list";
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map

/*"use strict";
(function () {
    function Start() {
        console.log("App Started!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map */