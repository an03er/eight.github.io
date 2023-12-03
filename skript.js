 let button=document.getElementById("Button");
 let p=1;
 let name=document.getElementById("name");
 let mail=document.getElementsByName("email")
 let tel=document.getElementsByName("tel")
 let massage=document.getElementsByName("massage")
 const handleEditClick = () => {
    if(p==1){
        document.querySelector(".wrapper-two").classList.remove("hide")
        localStorage.setItem("name",name);
        localStorage.setItem("mail",mail);
        localStorage.setItem("tel",tel);
        localStorage.setItem("massage",massage);
        history.pushState({}, '', '/form/')
    }
    else{
        document.querySelector(".wrapper-two").classList.add("hide")
        document.querySelector(".wrapper-one").classList.remove("hide")
        p=1
        window.history.go(-1)
    }
}
document.querySelector(".open").addEventListener("click", handleEditClick)
document.querySelector(".close").addEventListener("click", handleEditClick)