//-- Slideshow --//
var destination = document.getElementById("slideshow");
console.log(destination);
var imgs = [' ./static/img/cast-1.jpg',
            ' ./static/img/cast-2.jpg',
            ' ./static/img/cast-3.jpg',
            ' ./static/img/cast-4.jpg',
            ' ./static/img/cast-5.jpg',
            ' ./static/img/cast-6.jpg',
            ' ./static/img/cast-7.jpg',
            ' ./static/img/cast-8.jpg',
            ' ./static/img/cast-9.jpg',
            ' ./static/img/cast-10.jpg',
            ' ./static/img/cast-11.jpg',
            ' ./static/img/cast-12.jpg',
            ' ./static/img/cast-13.jpg',
            ' ./static/img/cast-14.jpg',
            ' ./static/img/cast-15.jpg',
            ' ./static/img/cast-16.jpg',
            ' ./static/img/cast-17.jpg',
            ' ./static/img/cast-18.jpg',
            ' ./static/img/cast-19.jpg',
            ' ./static/img/cast-20.jpg',
];

var hrefs = [];
var nextIndex = 0;
destination.src = imgs[nextIndex];
// destination.src = imgs[nextIndex];
var href = hrefs[nextIndex];
setTimeout(fadeimg, 4000);

function showimg() {
  nextIndex = (nextIndex + 1) % imgs.length;
  destination.src = imgs[nextIndex];

//   destination.src = imgs[nextIndex];
  href = hrefs[nextIndex];
  destination.style.opacity = "1"
  setTimeout(fadeimg, 7000)
}

function fadeimg() {
  destination.style.opacity = "0"
  setTimeout(showimg, 2000);
}

function openNav() {
document.getElementById("mobNav").style.height = "100%";
}

function closeNav() {
document.getElementById("mobNav").style.height = "0%";
}