var sliderMin=document.getElementById("lower");
var sliderMax=document.getElementById("upper");
var outputMin=document.getElementById("min");
var outputMax=document.getElementById("max");
outputMin.value=sliderMin.value;
outputMax.value=sliderMax.value;

sliderMin.oninput = function() {
    outputMin.value = this.value;

  }

  sliderMax.oninput = function() {
    outputMax.value = this.value;

  }