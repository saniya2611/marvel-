const selectImage = document.getElementById("selectImage")

const all = Array.from(document.querySelectorAll(".all"))

const onImageColor = (eve) => {
    let getImage = eve.target.value;
    console.log(getImage);
    all.forEach(div => div.classList.add('d-none'));

    let getDivs = Array.from(document.querySelectorAll("."+getImage))
    getDivs.forEach(div => div.classList.remove('d-none'))

}
 




selectImage.addEventListener("change", onImageColor)
