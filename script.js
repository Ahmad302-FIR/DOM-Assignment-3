// Task 1: Get an Attribute Value
let image = document.getElementById("myImage");
let imgSrc = image.getAttribute("src");
console.log("Image src:", imgSrc);

// Task 2: Change Image Source
let changeImgBtn = document.getElementById("changeImgBtn");

changeImgBtn.addEventListener("click", function () {
    image.setAttribute("src", "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=");
});

// Task 3: Set Attribute to Input Field
let nameInput = document.getElementById("nameInput");
nameInput.setAttribute("placeholder", "Enter your name");

// Task 4: Remove an Attribute
let disabledInput = document.getElementById("disabledInput");
let enableBtn = document.getElementById("enableBtn");

enableBtn.addEventListener("click", function () {
    disabledInput.removeAttribute("disabled");
});

// Task 5: Check if Attribute Exists
let para = document.getElementById("checkPara");
let hasClass = para.hasAttribute("class");
console.log("Paragraph has class:", hasClass);

// Task 6: Change Link Destination
let link = document.getElementById("myLink");
let changeLinkBtn = document.getElementById("changeLinkBtn");

changeLinkBtn.addEventListener("click", function () {
    link.setAttribute("href", "https://github.com");
    link.innerText = "GitHub"
});
