/**
 * Custom javascript by Jessica Rosenfield
 * jessrose.me | @jessrosenfield
 * Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 */
function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1) {
        if (element.innerHTML === 'click here') element.innerHTML = 'rosenfield.jess@gmail.com';
    }
}