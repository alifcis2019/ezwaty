let changed = false

document.querySelector(".showPassword").addEventListener('click',()=>{
    if(!changed)
    {
        document.querySelector(".showPassword").parentElement.children[1].type = "text"
        changed=true
    }
    else
    {
        document.querySelector(".showPassword").parentElement.children[1].type = "password"
        changed=false
    }
})