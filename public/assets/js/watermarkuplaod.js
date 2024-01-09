document.getElementById("watermark-image-input").addEventListener("change", function() {
  var fileInput = document.getElementById("watermark-image-input");
  var file = fileInput.files[0];
  var fileUrl = URL.createObjectURL(file);
  document.getElementById("watermark-image-preview").style.backgroundImage = "url('" + fileUrl + "')";
});


document.getElementById("upload-watermark-div").addEventListener("click", function() {
  document.getElementById("watermark-image-input").click();
});

document.getElementById("profile-image-input").addEventListener("change", function() {
  var profileInput = document.getElementById("profile-image-input");
  var profilefile = profileInput.files[0];
  var profilefileUrl = URL.createObjectURL(profilefile);
  document.getElementById("profile-image-preview").style.backgroundImage = "url('" + profilefileUrl + "')";
});


