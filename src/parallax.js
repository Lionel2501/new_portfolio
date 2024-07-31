(function() {
    if (typeof window !== 'undefined') {
        var o = document.querySelector(".parallax_card");

        document.getElementById("parallax_main").addEventListener("mousemove", function (t) {
            var e = -(window.innerWidth / 2 - t.pageX) / 28,
                n = (window.innerHeight / 2 - t.pageY) / 28;
            o.style.transform = "rotateY(" + e + "deg) rotateX(" + n + "deg)";
            o.style.webkitTransform = "rotateY(" + e + "deg) rotateX(" + n + "deg)";
            o.style.mozTransform = "rotateY(" + e + "deg) rotateX(" + n + "deg)";
        });
    }
}());
