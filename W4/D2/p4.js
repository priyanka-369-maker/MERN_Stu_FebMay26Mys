const studentForm = document.getElementById("studentForm");
const nameinput = document.getElementById("nameinput");
const emailinput= document.getElementById("emailinput");
const inspectBtn= document.getElementById("inspectBtn");
const terms = document.getElementById("terms");
const country = document.getElementById("country");

inspectBtn.addEventListener("click",function(){
    console.log("Form:",studentForm);
    console.log("Form:",nameinput.value);
    console.log("Form:",emailinput.value);
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    console.log("Gender: ",selectedGender?selectedGender.value:"Not selected");
    console.log("Accepted terms: " ,terms.checked);
    console.log("country:",country.value);
});