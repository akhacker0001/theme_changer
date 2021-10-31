(function(){

    let bodyTheme2 = document.querySelector('body')
    bodyTheme2.style.fontFamily = 'Fruktur'
    let h1Theme2 = document.querySelectorAll('h1,h2,h3')
    h1Theme2.forEach(ele=>{
        ele.style.fontSize = '25px';
        ele.style.color = 'blue'
        ele.style.fontFamily = 'sans-serif'
        
    })
    
    let psTheme2 = document.querySelectorAll('p,span')
    psTheme2.forEach(el=>{
        el.style.color = 'lightseagreen'
        el.style.fontSize = '16px'
    })
    let divs = document.querySelectorAll('div')
    divs.forEach(ele=>{
        ele.style.color = 'wheat'
    })
}());

