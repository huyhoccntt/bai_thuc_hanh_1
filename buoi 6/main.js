document.querySelector("myButton").addEventListener("click", function() {
  alert("thong bao nguoi dung click vao button");
}); 
document.querySelector("#btnchange").addEventListener("mouseover", function() {
    document.querySelector("#mycontent").innerHTML = "thong bao nguoi dung <b>chuoi </b> hover vao button";
});

document.querySelector("#h1").addEventListener("mouseover", function() {
    document.querySelector("#mycontent").innerHTML = "thong bao nguoi dung <b>chuoi </b> hover vao button";
});

const myButton = document.querySelector("#mycontent")
document.querySelector("#mycontent").addEventListener("mouseout", function() {
    document.querySelector("#mycontent").innerHTML = "thong bao nguoi dung <b>chuoi </b> hover vao button";
}  );

    const DomP = document.querySelector("#mycontent");
    DomP.innerHTML = "thong bao nguoi dung <b>chuoi </b> hover vao button";
    DomP.style.backroundColor = "red";
    DomP.style.color = "white";
    //domp.style.fontSize = "200px";

    domp.classList.add("fontsize-20px","font-weight-bold");

