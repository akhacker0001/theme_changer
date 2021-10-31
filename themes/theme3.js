
(function(){
    let bodyTheme1 = document.querySelector('body')
    bodyTheme1.style.fontFamily = 'serif'
    let h1Theme1 = document.querySelectorAll('h1,h2,h3')
    h1Theme1.forEach(ele=>{
        ele.style.fontSize = '28px';
        ele.style.color = 'bisque'
        ele.style.fontFamily = 'sans-serif'
        
    })
    
    let psTheme1 = document.querySelectorAll('p,span')
    psTheme1.forEach(el=>{
        el.style.color = 'chocolate'
        el.style.fontSize = '14px'
    })

    let divs = document.querySelectorAll('div')
    divs.forEach(ele=>{
        ele.style.color = 'darkgoldenrod'
    })
}())
