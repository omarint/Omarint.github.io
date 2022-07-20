//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close")

//recorrelos
links.forEach(function (link) {

    
    link.addEvenListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');
        content.classList.remove(animate__fadeInTopRight);
        content.classList.remove(animate__animated);

        content.classList.add("animate__fadeUutup");
        content.classList.add("animate__animated");


        setTimeout(function () {
            window.history.go(-1);

        } ,600);
        setInterval
        return false
    });
});