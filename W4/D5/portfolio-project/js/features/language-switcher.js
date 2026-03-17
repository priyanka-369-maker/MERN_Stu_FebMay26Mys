function languageSelect(){
const languageSelect = document.getElementById("language-select");

if (languageSelect) {

    languageSelect.addEventListener("change", function () {

        currentLanguage = this.value;

        renderProjects();
        renderSkills();

        console.log("Language switched to:", currentLanguage);

    });

}
}
