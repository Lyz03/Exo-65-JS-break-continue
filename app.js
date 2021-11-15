let paragraphe = document.getElementsByClassName('paragraphe');

for (let i = 0; i<paragraphe.length; i++) {

    if ((i + 1) % 2 === 0) {
        continue;
    }

    paragraphe[i].innerHTML = (i+1).toString();

    if (i === (paragraphe.length - 1)) {
        break;
    }

}