
(function(){
    let body = document.querySelector('body')
    body.style.fontFamily = 'serif'
    let hTags = document.querySelectorAll('h1,h2,h3')
    hTags.forEach(ele=>{
        ele.style.fontSize = '28px';
        ele.style.color = 'bisque'
        ele.style.fontFamily = 'sans-serif'
        
    })
    
    let pTags = document.querySelectorAll('p,span')
    pTags.forEach(el=>{
        el.style.color = 'chocolate'
        el.style.fontSize = '14px'
    })

    let divs = document.querySelectorAll('div')
    divs.forEach(ele=>{
        ele.style.color = 'darkgoldenrod'
    })
}())
