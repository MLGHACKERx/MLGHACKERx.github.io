function copyColor(color) {
	navigator.clipboard.writeText(color);
};

array = document.getElementsByClassName("palette-block");

Object.keys(array).forEach(function (key){
    childs = array[key].children;
    childElement = childs[0];
    array[key].style.background = childElement.innerHTML;
});