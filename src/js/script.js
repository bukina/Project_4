"use strict";

var map = L.map('map', {
    center: [40.69932116188504, -73.99307457731362],
    zoom: 13
});

L.marker([40.69932116188504, -73.99307457731362]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

var customicon = L.icon({
    iconUrl: 'markerm.png',
    iconSize: [38, 40], // size of the icon
    iconAnchor: [38, 60],
});

L.marker([40.72696946650543, -74.18514826493904], { icon: customicon }).addTo(map);



function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',

    })

}

let projectsMenu = document.querySelector('.projectsMenu');
let newsMenu = document.querySelector('.newsMenu');
let contactMenu = document.querySelector('.contactMenu');


let projects = document.querySelector('.projects');
let news = document.querySelector('.news');
let contact = document.querySelector('.contact');


projectsMenu.addEventListener('click', () => {
    scrollTo(projects);
})

newsMenu.addEventListener('click', () => {
    scrollTo(news);
})

contactMenu.addEventListener('click', () => {
    scrollTo(contact);
})




$(document).ready(function () {
    $('.slider-cards').slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3

    });
});