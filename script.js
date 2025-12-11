function openTwitch() {
    window.open("https://www.twitch.tv/ixlucho", "_blank");
}

function toggleTheme() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        document.body.style.background = "#f4f4f4";
        document.body.style.color = "#000";
    } else {
        document.body.style.background = "#0a0a0f";
        document.body.style.color = "#fff";
    }
}
