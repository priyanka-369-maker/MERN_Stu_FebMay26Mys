const form=document.getElementById("faqForm");
const questionInput=document.getElementById("question");
const answerInput=document.getElementById("answer");
const message=document.getElementById("message");

const faqContainer=document.getElementById("faqContainer");
const emptyMsg=document.getElementById("emptyMsg");

addEventListener("submit",
    function(e){
        e.preventDefault();

        const questionValue=questionInput.value.trim();
        const answerValue=answerInput.value.trim();

        if(questionValue.length<5){
            message.textContent="Question must be atleast 5 characters";
            message.style.color="red";
            return;
        }
        if(answerValue.length<15){
            message.textContent="Answer must be at least 15 characters";
            message.style.color="red";
            return;
        }
        message.textContent="";
        
        if(emptyMsg){
            emptyMsg.remove();
        }
        const faqBlock=this.document.createElement("div");

        faqBlock.innerHTML=`
        <h3 class="faqQuestion"></h3>
        <p class="faqAnswer"></p>
        <button class="deleteBtn">Delete</button>
        <hr>
        `;

        faqBlock.querySelector(".faqQuestion").textContent=questionValue;
        faqBlock.querySelector(".faqAnswer").textContent=answerValue;

        faqBlock.querySelector(".faqQuestion").insertAdjacentHTML("beforeend","<span class='badge'>NEW </span>");

        const deleteBtn=faqBlock.querySelector(".deleteBtn");

        deleteBtn.addEventListener("click", function(){

        faqBlock.remove();

        // show empty message if no FAQs
        if(faqContainer.children.length === 0){
            const msg = document.createElement("p");
            msg.textContent = "No FAQs available";
            msg.id = "emptyMsg";
            faqContainer.appendChild(msg);
        }

    });
    faqContainer.appendChild(faqBlock);
    form.reset();
    }
);