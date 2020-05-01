// t char code is 116

const h1 = document.querySelectorAll('h1');
const h5 = document.querySelectorAll('h5');

const fix = (text) => {
    let updated = '';
    for(i = 0; i < text.length; i++){
        var code = text.charCodeAt(i);
        if(code === 116){
            updated = updated.concat('<span>t</span>');
        } else {
            updated = updated.concat(text[i]);
        }
    }
    return (updated)
};


h1.forEach( heading => {
    heading.innerHTML = fix(heading.innerText)
})

if(h5){
    h5.forEach( heading => {
        heading.innerHTML = fix(heading.innerText);
    })
}


