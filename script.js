window.addEventListener("mousemove",function(details){
    var rect= document.querySelector("#rect")
    var x = gsap.utils.mapRange(0,window.innerWidth,window.innerWidth/3+rect.getBoundingClientRect().width/2,window.innerWidth-(window.innerWidth/3+rect.getBoundingClientRect().width/2),details.clientX)
    var y = gsap.utils.mapRange(0,window.innerHeight,window.innerHeight/3+rect.getBoundingClientRect().height/2,window.innerHeight-(window.innerHeight/3+rect.getBoundingClientRect().height/2),details.clientY)
    gsap.to("#rect",{
        left:x,
        top:y,
        ease:Power3
    })
})
    window.addEventListener("mousemove",function(details){
    var e1 = document.querySelector("#e1")
    var b1 = document.querySelector("#b1")
    const ex = gsap.utils.mapRange(0, window.innerWidth, 0, e1.getBoundingClientRect().width-b1.getBoundingClientRect().width, details.clientX);
    const ey = gsap.utils.mapRange(0, window.innerHeight, 0, e1.getBoundingClientRect().height-b1.getBoundingClientRect().height, details.clientY);
    
    gsap.to("#b1",{
        left:ex,
        top:ey,
        ease:"power4"
    })

})
    window.addEventListener("mousemove",function(details){
    var e2 = document.querySelector("#e2")
    var b2 = document.querySelector("#b2")
    const ex1 = gsap.utils.mapRange(0, window.innerWidth, 0, e2.getBoundingClientRect().width-b2.getBoundingClientRect().width, details.clientX);
    const ey1 = gsap.utils.mapRange(0, window.innerHeight, 0, e2.getBoundingClientRect().height-b2.getBoundingClientRect().height, details.clientY);

    gsap.to("#b2", {
        left: ex1,
        top: ey1,
        ease: "power4",
    });

})
window.addEventListener("mousemove", function (det) {
    var x = det.clientX;
    var y = det.clientY;
    var rect=document.querySelector("#rect")
    rect.addEventListener("move",function(details){
        var recx=rect.details.clientX
        var recy=rect.details.clientX
        console.log("recx")
    })
    
    // var className = "imgha";
    // var existingDiv = document.querySelector("." + className);
    // if (x <= 150 || x >= 1700 || y <= 200 || y >= 800) {
    //     if (!existingDiv) {
    //         var div = document.createElement("div");
    //         div.classList.add(className);
    //         var img = document.createElement("img");
    //         img.src = "http://clipart-library.com/images_k/transparent-cartoon-mouth/transparent-cartoon-mouth-9.png";
    //         div.appendChild(img);
    //         rect.appendChild(div);
    //         document.body.appendChild(rect);

    //         div.style.position = "absolute";
    //         div.style.left = `${rect.clientX}px`;
    //         div.style.top = `${rect.clientX}px`;
    //     } else {
    //         existingDiv.style.left = `${x}px`;
    //         existingDiv.style.top = `${y}px`;
    //     }
    // } else {
    //     if (existingDiv) {
    //         existingDiv.remove();
    //     }
    // }
});
