var users = [
    {
        proffilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displaypic: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
        pandingmeg: 4,
        location: "Delhi ,India",
        name: "Aanya",
        age: "19",
        interests: [
            {
                icon: '<i class="music ri-music-2-fill "></i>',
                interest: "music"
            },
            {
                icon: '<i class="ri-paint-fill"></i>',
                interest: "painting"
            },
            {
                icon: '<i class="ri-movie-fill"></i>',
                interest: "movie"
            },

        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae expedita nobis fugit sapiente consequuntur?",
        Isfriend: null,
    },

    {
        proffilePic: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displaypic: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
        pandingmeg: 15,
        location: "Mumbai ,India",
        name: "Aasu",
        age: "23",
        interests: [

            {
                icon: '<i class="ri-paint-fill"></i>',
                interest: "painting"
            },
            {
                icon: '<i class="music ri-music-2-fill "></i>',
                interest: "music"
            },
            {
                icon: '<i class="ri-camera-switch-fill"></i>',
                interest: "photography"
            },

        ], bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae expedita nobis fugit sapiente consequuntur?",
        Isfriend: null,
    },
    {
        proffilePic: "https://images.unsplash.com/photo-1578774296842-c45e472b3028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        displaypic: 'https://images.unsplash.com/photo-1518157542428-1be9739022f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        pandingmeg: 14,
        location: "Himachal ,India",
        name: "Siboo",
        age: "23",
        interests: [
            {
                icon: '<i class="ri-book-fill"></i>',
                interest: "reading book"
            },
            {
                icon: '<i class="ri-paint-fill"></i>',
                interest: "painting"
            },
            {
                icon: '<i class="ri-movie-fill"></i>',
                interest: "movie"
            },

        ], bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae expedita nobis . Lorem ipsum dolor sit amet consectetur adipisicing elit",
        Isfriend: null,
    },


    {
        proffilePic: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        displaypic: 'https://images.unsplash.com/photo-1535660873036-52da99758297?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        pandingmeg: 40,
        location: "Surat ,India",
        name: "Aanu",
        age: "21",
        interests: [
            {
                icon: '<i class="ri-book-fill"></i>',
                interest: "Read noval"
            },

            {
                icon: '<i class="ri-gamepad-fill"></i>',
                interest: "game"
            },

        ],
        bio: "Fugiat quae expedita nobis . Lorem ipsum dolor sit amet consectetur ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae expedita nobis fugit sapiente consequuntur?",
        Isfriend: null,
    },

]
function select(elem) {
    return document.querySelector(elem)
}
function setdata(index) {
    select(".profileimg img").src = users[index].proffilePic
    select(".badge h5").textContent = users[index].pandingmeg
    select(".location h3").textContent = users[index].location
    select(".profilename .name").textContent = users[index].name
    select(".profilename .age").textContent = users[index].age
    var clutter = ""
    users[index].interests.forEach((interests) => {
        clutter += `
      <div class="tag flex gap-2 bg-white/50 rounded-full px-4 py-2 items-center">
     ${interests.icon}
      <h3 class="musictext text-sm tracking-tight font-semibold ">${interests.interest}</h3> 
     </div>`
    })
    select(".tags").innerHTML = clutter
    select(".bio p").innerText = users[index].bio
}

let curr = 0;
(function setInItial() {
    select(".maincard img").src = users[curr].displaypic
    select(".incomingcard img").src = users[curr + 1]?.displaypic

    setdata(curr)
    curr = 2;
})();

var isAnimating = false

function imageChange() {
    if (!isAnimating) {
        isAnimating = true
        var tl = gsap.timeline({
            onComplete: function () {
                isAnimating = false
                let main = select(".maincard")
                let incoming = select(".incomingcard")
                incoming.classList.remove('z-[2]')
                incoming.classList.add('z-[3]')
                incoming.classList.remove("incomingcard")
                main.classList.remove('z-[3]')
                main.classList.add('z-[2]')
                gsap.set(main,
                    {
                        scale: 1,
                        opacity: 1
                    })
                if (curr === users.length) curr = 0
                select(".maincard img").src = users[curr].displaypic
                curr++
                main.classList.remove("maincard")
                incoming.classList.add("maincard")
                main.classList.add("incomingcard")

            }

        })
        tl.to('.maincard', {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
            .from('.incomingcard', {
                scale: 0.9,
                opacity: 0,
                ease: Circ,
                duration: 1.2
            }, "a")

    }


};
let deny = select(".deny")
let accept = select(".accept")

deny.addEventListener("click", function () {
    imageChange()
    setdata(curr - 1)
    gsap.from(".details .element",
        {
            y: '100%',
            opacity: 0,
            stagger: .06,
            ease: Power4.easeInOut,
            duration: 1.5
        })
});

accept.addEventListener("click", function () {
    imageChange()
    setdata(curr - 1)
    gsap.from(".details .element",
        {
            y: '100%',
            opacity: 0,
            stagger: .06,
            ease: Power4.easeInOut,
            duration: 1.5
        })
});

(function containerCreator() {
    var element = document.querySelectorAll(".element")
    element.forEach((elem) => {
        var div = document.createElement("div")
        div.classList.add(`${elem.classList[1]}container`, 'overflow-hidden');
        div.appendChild(elem);
        select('.details').appendChild(div)
    })
})();




