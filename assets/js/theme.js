(function () {
    var KEY = "theme";

    function current() {
        var attr = document.documentElement.getAttribute("data-theme");
        if (attr) return attr;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function paint(btn, theme) {
        if (!btn) return;
        btn.textContent = theme === "dark" ? "☀" : "☾";
    }

    function apply(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(KEY, theme);
        paint(document.querySelector(".theme-toggle"), theme);
    }

    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.querySelector(".theme-toggle");
        if (!btn) return;
        paint(btn, current());
        btn.addEventListener("click", function () {
            apply(current() === "dark" ? "light" : "dark");
        });
    });
})();
