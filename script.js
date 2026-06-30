const intro = document.getElementById("intro");
const container = document.getElementById("container");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bgm");

openBtn.addEventListener("click", () => {

    intro.style.opacity = "0";
    intro.style.transform = "scale(1.1)";

    setTimeout(() => {
        intro.style.display = "none";
        container.style.display = "flex";

        container.animate([
            { opacity: 0, transform: "translateY(40px)" },
            { opacity: 1, transform: "translateY(0)" }
        ], {
            duration: 700,
            easing: "ease"
        });

    }, 500);

    music.play().catch(() => {});

});

function copyText(text, btn) {

    if (navigator.clipboard) {

        navigator.clipboard.writeText(text).then(() => {
            copied(btn);
        }).catch(() => {
            fallback(text, btn);
        });

    } else {

        fallback(text, btn);

    }

}

function fallback(text, btn) {

    let area = document.createElement("textarea");

    area.value = text;

    document.body.appendChild(area);

    area.select();

    document.execCommand("copy");

    area.remove();

    copied(btn);

}

function copied(btn) {

    let old = btn.innerHTML;

    btn.innerHTML = "Copied ✔";
    btn.style.background = "#ff2b2b";
    btn.style.transform = "scale(1.08)";

    setTimeout(() => {

        btn.innerHTML = old;
        btn.style.background = "#000";
        btn.style.transform = "scale(1)";

    }, 1500);

}