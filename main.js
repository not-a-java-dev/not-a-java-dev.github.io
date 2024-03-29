let button = document.getElementById("very-fucking-epic-button");
let input = document.getElementById("very-fucking-epic-input");
let result = document.getElementById("result");
button.onclick = ()=>{
    console.log("h");
    let f = fetch(`https://raw.githubusercontent.com/cdc-sys/level-thumbnails/main/thumbs/${input.value}.png`);
    f.then((idk, idk2)=>{
        if (idk.status == 404) {
            result.innerText = "The result is: no"
        } else {
            result.innerText = "The result is: yeahh"
        }
    })
}