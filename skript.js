 let button=document.getElementById("Button");
 let p=1;
 var name=document.getElementsByName("name");
 let mail=document.getElementsByName("email")
 let tel=document.getElementsByName("tel")
 let massage=document.getElementsByName("massage")
 sessionStorage.setItem("is_reloaded", true);

function showModal () {
    history.pushState({form: true}, "", "./#form");
    document.querySelector(".wrapper-two").classList.remove("hide")
}
function closeModal() {
    history.replaceState({form: false}, "", "./");
    document.querySelector(".wrapper-two").classList.add("hide");
    document.querySelector(".wrapper-one").classList.remove("hide");
}

document.querySelector(".open").addEventListener("click", showModal)
document.querySelector(".close").addEventListener("click", closeModal)

function controlModal() {
    if(location.hash == "#form") {
        showModal();
    }
    else {
        closeModal();
    }
}

function loadInput(inputEl) {
    inputEl.value = localStorage.getItem(inputEl.id);
}

function saveInput(event) {
    localStorage.setItem(event.target.id, event.target.value);
}

document.addEventListener('DOMContentLoaded', function () {
    if (history.state == null) {
        history.pushState({form: false}, "", "./");
    }
    if (history.state.form) {
        showModal();
    }
    
    let feedbackButtonEl = document.getElementById("feedback-button");    
    feedbackButtonEl.addEventListener('click', showModal);


    let closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", closeModal);

    let inputEls = document.getElementsByClassName("inp");

    [...inputEls].forEach(inputEl => {
        loadInput(inputEl);
    });
    
    [...inputEls].forEach(inputEl => {
        inputEl.addEventListener("input", saveInput);
    });

    window.addEventListener("popstate", controlModal);
});
