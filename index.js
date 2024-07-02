const nameInput = document.getElementById("name-input");
const collegeInput = document.getElementById("college-input");
const locationInput = document.getElementById("location-input");
const imageInput = document.getElementById("image-input");

const generateButton = document.getElementById("generate-button");

const idCardDisplayDiv = document.getElementById("right-div");
const nameOutput = document.getElementById("id-card-name");
const collegeOutput = document.getElementById("id-card-college");
const locationOutput = document.getElementById("id-card-location");
const imageInputPreview = document.getElementById("image-input-preview");
const imageOutput = document.getElementById("id-card-image");

function updateImagePreview() {
    const file = imageInput.files[0];

    if (file && file.type.startsWith("image/")) {
        const imageURL = URL.createObjectURL(file);
    
        imageInputPreview.src = imageURL;
    }
}

imageInput.addEventListener("change", updateImagePreview);

function updateIDCard(){
    idCardDisplayDiv.style.opacity = 1;

    let nameText = nameInput.value;
    let collegeText = collegeInput.value;
    let locationText = locationInput.value;
    let imageFile = imageInput.files[0];
    if (imageFile && imageFile.type.startsWith("image/")) {
        imageFile = URL.createObjectURL(imageFile);
    }
    else {
        imageFile = null;
    }

    nameOutput.innerText = nameText;
    collegeOutput.innerText = collegeText;
    locationOutput.innerText = locationText;
    imageOutput.src = imageFile ? imageFile : null;
}

generateButton.addEventListener("click", updateIDCard);