let passwords = document.querySelectorAll(".showPassword")
for(let i =0 ; i < passwords.length; i++)
{
    passwords[i].addEventListener('click',()=>{
        let changed = false
        if(passwords[i].parentElement.children[1].type === "password")
            {
                passwords[i].parentElement.children[1].type = "text"
                changed=true
            }
            else
            {
                passwords[i].parentElement.children[1].type = "password"
                changed=false
            }
    })
}

    