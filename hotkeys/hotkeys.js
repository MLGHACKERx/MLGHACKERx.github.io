var flipper = false;

document.addEventListener('keydown', (e) => {
    if (e.key == "ƒ" && flipper == false) {
        var menu = document.createElement("div")
        menu.id = "menu";
        menu.innerHTML = "<div style=\"position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: #404040; height: 75px; width: 150px; color: white; border: 5px solid black; text-align: left; font-family: sans-serif;\"><a href=\"https://mlghackerx.github.io/index.html\" style=\"padding-left: 3px; color: red; text-decoration: none;\">Index</a><br><a href=\"https://mlghackerx.github.io/colors/palettes.html\" style=\"padding-left: 3px; color: red; text-decoration: none;\">| Colors</a><br><a href=\"https://mlghackerx.github.io/hotkeys/hotkeys.html\" style=\"padding-left: 3px; color: red; text-decoration: none;\">| Hotkeys</a></div>";
        document.body.appendChild(menu);
        flipper = true;
    } else if (e.key == "ƒ" && flipper == true) {
        var menu = document.getElementById("menu");
        menu.parentNode.removeChild(menu);
        flipper = false;
    };
});