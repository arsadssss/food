const subsBTN = document.querySelector("#subsBTN");
const signUPText = document.querySelector("#signUPText");
const signUPInfo = document.querySelector("#signUPInfo");

subsBTN.addEventListener("click", function(){
    const emlINPT = document.querySelector("#emlINPT").value;
    signUPText.textContent = "Thank You For Subscribe";
    signUPInfo.innerHTML = `We'll reach out to you soon <span style='color:red;'> ${emlINPT} </span>`;
});