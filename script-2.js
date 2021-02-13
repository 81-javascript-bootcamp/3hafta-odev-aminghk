const petsModule = (function() {
    const _data = [{
            image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
            name: "Sam",
            type: "Golden Retriever/St. Bernard Mix",
            sound: "bark",
            soundText: "Bark - type b",
            keyCode: "66"
        },

        {
            image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
            name: "Mellie",
            type: "Domestic Shorthair",
            sound: "meow",
            soundText: "Meow - type m",
            keyCode: "77"

        }
    ];
    const $tbodyEl = document.querySelector("tbody");
    const $buttons = document.querySelectorAll("button");

    const getButtons = function() {
        return document.querySelectorAll("button");
    }

    const createPetElement = function(pet) {
        return "<tr><td><img class='pet-image' src='" + pet.image + "' /></td><td>" + pet.name + "</td><td>" + pet.type + "</td><td><button data-sound='" + pet.sound + "'>" + pet.soundText + "</button></td></tr>"
    };

    const addToTable = function(content) {
        $tbodyEl.innerHTML += content;
    }


    const putPetsInHtml = function() {
        for (let i = 0; i < _data.length; i++) {
            addToTable(createPetElement(_data[i]));
        }
    }

    function selectedRow() {

        let index,
            table = document.getElementById("table");
        const image = document.getElementsByClassName("main-image")[0];
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].onclick = function() {

                if (typeof index !== "undefined") {
                    table.rows[index].classList.toggle("selected");

                }

                index = this.rowIndex;
                console.log(image)

                document.getElementsByClassName("main-image")[0].src = table.rows[index].cells[0].getElementsByClassName("pet-image")[0].src;


                this.classList.toggle("selected");

            };
        }

    }

    const bindEvents = function() {

        const buttons = getButtons();
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function(event) {
                const soundId = this.dataset.sound;
                const soundElement = document.getElementById(soundId);
                if (soundElement) {
                    soundElement.play();
                }
            });
        }


        window.addEventListener("keydown", function(event) {

            if (event.keyCode == 66) {
                const soundElement = document.getElementById("bark");
                if (soundElement) {
                    soundElement.play();
                }
            } else if (event.keyCode == 77) {
                const soundElement = document.getElementById("meow");
                if (soundElement) {
                    soundElement.play();
                }
            }
        })


        selectedRow();



    }

    const init = function() {
        putPetsInHtml();
        bindEvents();
    }

    return {
        init: init
    }
})();