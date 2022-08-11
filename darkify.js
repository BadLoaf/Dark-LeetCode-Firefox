var primDarkBg = document.querySelectorAll(".description__24sA, .container__2WTi, .question-fast-picker__3VcA, .navbar-container__2Y7K");
for (let i = 0; i < primDarkBg.length; i++) {
    primDarkBg[i].style.backgroundColor = '#181818';
}

var lightText = document.querySelectorAll("p, strong, span, .css-101rr4k, .css-jkjiwi, .css-v3d350, .ant-select-selection-selected-value");
for (let i = 0; i < lightText.length; i++) {
    lightText[i].style.color = "#FFFFFF";
}

var secDarkBg = document.querySelectorAll(".css-blecvm, .container__2zYY, .css-1lexzqe-TabHeaderContainer , .interactive-area__1JbC, .css-6iyx43")
for (let i = 0; i < secDarkBg.length; i++) {
    secDarkBg[i].style.backgroundColor = '#404040';
}

var monokai = document.querySelectorAll(".CodeMirror-gutter")
for (let i = 0; i < monokai.length; i++) {
    monokai[i].style.backgroundColor = '#272822';
}

var code = document.querySelectorAll("code, pre")
for (let i = 0; i < code.length; i++) {
    code[i].style.backgroundColor = '#404040';
    code[i].style.color = "#FFFFFF";
}