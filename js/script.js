// slide
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let imgList = document.getElementsByClassName("img-slideshow");
    console.log(imgList.length);
    if (n > imgList.length) {slideIndex = 1}
     else if (n < 1) {slideIndex = imgList.length};

    for (i= 0; i < imgList.length; i++) {
        imgList[i].style.display ="none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1)
}, 2000);

// validation
function validateForm() {
    let name = document.forms["contact-form"]["name"].value;
    let email = document.forms["contact-form"]["email"].value;
    let interest = document.forms["contact-form"]["interested"].value;
    
    if (name === "") {
        alert("Nama tidak boleh kosong");
        document.forms["contact-form"]["name"].focus();
        return false;
    }
    if (email === "") {
        alert("Email tidak boleh kosong");
        document.forms["contact-form"]["email"].focus();
        return false;
    }
    if (interest === "0") {
        alert("Pilihan tidak boleh kosong");
        document.forms["contact-form"]["interested"].focus();
        return false;
    }
    

    let message = "Nama: " + name + "\nEmail: " + email + "\nPilihan: " + interest;
    alert(message);

    return true;
}

