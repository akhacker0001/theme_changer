
if (document.querySelector('.popup')) {
const buttons = document.querySelectorAll('button');
buttons.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        switch(index){
            case 0:
                chrome.tabs.executeScript({
                    file:'themes/theme1.js'
                })
                break;
            case 1:
                chrome.tabs.executeScript({
                    file:'themes/theme2.js'
                })
                break;
    
            case 2:
                chrome.tabs.executeScript({
                    file:'themes/theme3.js'
                })
                break;

            case 3:
                chrome.tabs.executeScript({
                    file:'themes/theme4.js'
                })
                break;
            case 4:
                chrome.tabs.executeScript({
                    file:'themes/theme5.js'
                })
                break; 
        }
    })
   
})
}
