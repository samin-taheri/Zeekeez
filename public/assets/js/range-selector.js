  var opacityRange = document.getElementById("opacity-range");
  var opacityValue = document.getElementById("opacity-value");

  var sizeRange = document.getElementById("size-range");
  var sizeValue = document.getElementById("size-value");
  
  opacityRange.addEventListener("input", function() {
    opacityValue.textContent = opacityRange.value;
  });
    
  sizeRange.addEventListener("input", function() {
  sizeValue.textContent = sizeRange.value;
  });
