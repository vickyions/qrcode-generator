//theme setting
const root = document.documentElement; //root node
const tglBtn = document.getElementById("toggle-theme");
tglBtn.addEventListener("click", () => {
    root.classList.toggle("dark");
});
////

const qrImageContainer = document.getElementById("qr-image");
const generated = document.getElementById("generated");
const qrGenForm = document.getElementById("qr-form");

const inputBox = document.getElementById("text-content");
const selectBox = document.getElementById("qr-size");

const downBtn = document.createElement("a");
downBtn.innerText = "Download QR";
downBtn.classList =
    "px-8 py-2 mt-10 max-w-[400px] rounded bg-red-400 text-yellow-200 cursor-pointer hover:text-green-600 hover:shadow-md hover:shadow-grey-200 block text-center mx-auto md:mb-10 focus:outline focus:outline-3";

const generateQr = (text, size) => {
    return new QRCode(qrImageContainer, {
        text,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
};

const clearGenerated = () => {
    qrImageContainer.innerHTML = "";
    downBtn.remove();
};

const displayDownBtn = () => {
    const downLink = qrImageContainer.querySelector("img").src;
    //add a light border around it for easy scanned
    qrImageContainer.querySelector("img").classList.add('p-3', 'bg-white');
    downBtn.href = downLink;
    downBtn.download = "qrcode";
    generated.appendChild(downBtn);
};

const handleGenQr = (e) => {
    e.preventDefault();
    //clear previous qr
    clearGenerated();
    //gen new qr
    const inputText = inputBox.value;
    const qrSize = Number(selectBox.value);
    if (inputText !== "" && qrSize !== isNaN(qrSize)) {
        generateQr(inputText, qrSize);
    }
    //display download anchor
    setTimeout(displayDownBtn, 50); //waiting 50ms otherwise it doesnt exist in dom
};

qrGenForm.addEventListener("submit", handleGenQr);
