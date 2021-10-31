
(function(){
    let body = document.querySelector('body')
    body.style.fontFamily = 'Fruktur'
    let hTags = document.querySelectorAll('h1,h2,h3')
    hTags.forEach(ele=>{
        ele.style.fontSize = '32px';
        ele.style.color = 'green'
        ele.style.fontFamily = 'sans-serif'
        
    })
    
    let pTags = document.querySelectorAll('p,span')
    pTags.forEach(el=>{
        el.style.color = 'aquamarine'
        el.style.fontSize = '15px'
    })

    let divs = document.querySelectorAll('div')
    divs.forEach(ele=>{
        ele.style.color = 'crimson'
    })
}())
