function changeCustomText() {
    let customHeading = document.getElementsByClassName('custom-heading')[0];
    var customTextArray = ['text1', 'text2', 'text3', 'text4', 'text5'];
    var index = getRandomInteger(0, customTextArray.length - 1);
    customHeading.innerHTML = customTextArray[index];
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
