function renderEducations(){

    const experience = document.getElementById("experience-container");
    if(!experience){
        console.log("experience Container Not Found");
        return;
    }

    experience.innerHTML = "";

    educationsData.forEach(function(education){
        const card = document.createElement("div");
        card.className = "p-10  text-center bg-blue-200 rounded-3xl shadow-md m-10px mb-5";

        const educationBoard = document.createElement("h1");
        educationBoard.className = "text-3xl font-bold  text-purple-900";
        educationBoard.textContent = education.board;
        

        const educationCourse = document.createElement("h3");
        educationCourse.className = "text-md font-bold";
        educationCourse.textContent = education.course;

        const educationYear = document.createElement("p");
        educationYear.className = "text-sm font-bold";
        educationYear.textContent = education.year;

        const educationCollege = document.createElement("p");
        educationCollege.className = "text-sm font-bold";
        educationCollege.textContent = education.college;

        const educationPercentage = document.createElement("p");
        educationPercentage.className = "text-sm font-bold";
        educationPercentage.textContent = education.percentage;
        
        card.appendChild(educationBoard);
        card.appendChild(educationCourse);
        card.appendChild(educationYear);
        card.appendChild(educationCollege);
        card.appendChild(educationPercentage);

        experience.appendChild(card);

    });
    console.log("")
}
renderEducations();