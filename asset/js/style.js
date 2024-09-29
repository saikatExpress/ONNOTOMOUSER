$(document).ready(function(){
      $('.menu-toggle').click(function(){
        $('.sidebar').addClass('active');
      });

      $('.close-sidebar').click(function(){
        $('.sidebar').removeClass('active');
      });

      $('.right-sidebar-toggle').click(function(){
        $('.right-sidebar').addClass('active');
      });

      $('.close-right-sidebar').click(function(){
        $('.right-sidebar').removeClass('active');
      });

      $('.header-dropdown .dropbtn').click(function(e){
        e.stopPropagation();
        var parent = $(this).parent('.header-dropdown');

        $('.header-dropdown').not(parent).removeClass('active').find('.header-dropdown-content').slideUp(200);

        parent.toggleClass('active');
        parent.find('.header-dropdown-content').slideToggle(200);
      });

      $('.sidebar-dropdown > a').click(function(e){
        e.preventDefault();
        var parent = $(this).parent('.sidebar-dropdown');

        $('.sidebar-dropdown').not(parent).removeClass('active').find('.sidebar-dropdown-content').slideUp(200);

        parent.toggleClass('active');
        parent.find('.sidebar-dropdown-content').slideToggle(200);
      });

      $(document).click(function(){
        $('.header-dropdown').removeClass('active').find('.header-dropdown-content').slideUp(200);
        $('.sidebar-dropdown').removeClass('active').find('.sidebar-dropdown-content').slideUp(200);
      });

      $('.header-dropdown-content, .sidebar-dropdown-content').click(function(e){
        e.stopPropagation();
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
  const modalUploadArea = document.getElementById("modalUploadArea");
  const fileInput = document.getElementById("fileInput");
  const previewContainer = document.getElementById("previewContainer");
  const browseButton = document.getElementById("browseButton");

  // Open file dialog when upload button is clicked
  browseButton.addEventListener("click", () => {
    fileInput.click();
  });

  // Handle file selection from input
  fileInput.addEventListener("change", handleFiles);

  // Drag and drop functionality
  modalUploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    modalUploadArea.classList.add("dragging");
  });

  modalUploadArea.addEventListener("dragleave", () => {
    modalUploadArea.classList.remove("dragging");
  });

  modalUploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    modalUploadArea.classList.remove("dragging");
    const files = e.dataTransfer.files;
    handleFiles({ target: { files } });
  });

  // Function to handle file(s) input
  function handleFiles(event) {
    const files = event.target.files;
    for (const file of files) {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          displayImage(e.target.result, file.name);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // Function to display the image preview with remove option
  function displayImage(src, name) {
    const previewDiv = document.createElement("div");
    previewDiv.classList.add("image-preview-wrapper");

    const img = document.createElement("img");
    img.src = src;
    img.alt = name;
    img.classList.add("preview-image");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-image");
    removeBtn.addEventListener("click", () => {
      previewDiv.remove();
    });

    previewDiv.appendChild(img);
    previewDiv.appendChild(removeBtn);
    previewContainer.appendChild(previewDiv);
  }
});
