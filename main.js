let colorChangedFlag = false;


function colorList () {
    let targetUL = document.getElementById('ulToColor');
    let counter = 0;
    for (let currentLi of targetUL.children) {
        counter++;
        if (colorChangedFlag) {
            if (counter % 2 == 0) currentLi.classList.remove("green");
            else if (counter % 2 ==1) currentLi.classList.remove("yellow");
        }
        else {
            if (counter % 2 == 0) currentLi.classList.add("green");
            else if (counter % 2 ==1) currentLi.classList.add("yellow");
        }
    }
    colorChangedFlag = !colorChangedFlag;

}
