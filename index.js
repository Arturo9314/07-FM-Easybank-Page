(()=>{
    const menuButton = document.querySelector('#toggle')
    const showmenu = document.querySelector('#menu')
    const xmenu = document.querySelector('#icon-menu')
    menuButton.addEventListener('change', (e)=>{
        if(e.target.checked){
            showmenu.style.display = "flex"
            xmenu.setAttribute('src', 'img/assets/x-lg.svg')
        }
        else{
            showmenu.style.display = "none"
            xmenu.setAttribute('src', 'img/assets/list.svg')
        }
    })
})()