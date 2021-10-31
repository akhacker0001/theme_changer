
(function(){
    let bodyTheme1 = document.querySelector('body')
    bodyTheme1.style.fontFamily = 'Fruktur'
    let h1Theme1 = document.querySelectorAll('h1,h2,h3')
    h1Theme1.forEach(ele=>{
        ele.style.fontSize = '30px';
        ele.style.color = 'darkviolet'
        ele.style.fontFamily = 'sans-serif'
        
    })
    
    let psTheme1 = document.querySelectorAll('p,span')
    psTheme1.forEach(el=>{
        el.style.color = 'mediumvioletred'
        el.style.fontSize = '16px'
    })

    let divs = document.querySelectorAll('div')
    divs.forEach(ele=>{
        ele.style.color = 'mediumslateblue'
    })
}())
