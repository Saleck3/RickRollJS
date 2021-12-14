window.onload = function trigger() {
    //A catchy phrase to bait unsuspicious people
    console.log("If you're from Konami & see this, please do not sue us for the easter egg");
    //Ad variable to store trigger
    localStorage.setItem("KC", " ");
    //Listen for inputs
    document.addEventListener("keydown", function (e) {
        //Add the new keyPress to stack
        let updated = localStorage.getItem("KC") + e.key;
        //Set the trigger (default, the konami code)
        let trigger = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
        if (updated.includes(trigger)) {
            //If trigger met, execute order 66
            localStorage.removeItem("KC");
            rickRoll();
        } else {
            //Else update stack
            localStorage.setItem("KC", updated);
        }
    });
};

function rickRoll() {

    //Create CSS class
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML =
        '.rick {' +
        '    z-index: 1000;' +
        '    width: 1060px;' +
        '    height: 615px;' +
        '    position: absolute;' +
        '    top: 50%;' +
        '    left: 50%;' +
        '    transform: translate(-50%,-50%);' +
        '    -ms-transform: translate(-50%,-50%);' +
        '}';
    document.getElementsByTagName('head')[0].appendChild(style);

    //Create container
    let Cooldiv = document.createElement("div");
    Cooldiv.setAttribute('id', 'Rick');
    Cooldiv.classList.add("rick");


    //Make the Iframe with the video
    let videoIframe = document.createElement('iframe');
    videoIframe.setAttribute('id', 'Astley');
    videoIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    videoIframe.setAttribute('allowfullscreen', '');
    videoIframe.classList.add("rick");
    //Link to video + '?autoplay=1' (this is important for the video to start on load)
    videoIframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    //Why not another reference
    videoIframe.setAttribute('title', 'Cake is a lie');


    //Put the iframe in the container
    Cooldiv.appendChild(videoIframe);

    //Append container to body
    document.body.appendChild(Cooldiv);
}