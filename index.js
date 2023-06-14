// $("button").click((e) => {
//   alert('I git clicked')
// });

const btn = document.querySelectorAll(".drum");
console.log(btn);
for (let i = 0; i < btn.length; i++) {
  $(btn[i]).mouseover((e) => {
    btn[i].style.color = "green";

    const tom1 = new Audio("/sounds/tom-1.mp3");
    const tom2 = new Audio("/sounds/tom-2.mp3");
    const tom3 = new Audio("/sounds/tom-3.mp3");
    const tom4 = new Audio("/sounds/tom-4.mp3");
    const snare = new Audio("/sounds/snare.mp3");
    const crash = new Audio("/sounds/crash.mp3");
    const kick = new Audio("/sounds/kick-bass.mp3");

    switch (i) {
      case 0:
        tom1.play();
        break;
      case 1:
        tom2.play();
        break;
      case 2:
        tom3.play();
        break;
      case 3:
        tom4.play();
        break;
      case 4:
        snare.play();
        break;
      case 5:
        crash.play();
        break;
      case 6:
        kick.play();
        break;
      default:
        break;
    }
  });
}
