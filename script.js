    
    let b = document.querySelector(".b")
    let p = document.querySelector(".p")
    let d = document.getElementsByClassName("d")
    let k = document.getElementsByClassName("k")
    const playButton = document.getElementById('play-button');
    console.log(d);
    console.log(k);
    
        // rain---------------------------------------------------------------------------------------------------------------------
        const box = document.getElementById('rainBox');
        let boxHeight = box.clientHeight;
        let boxWidth = box.clientWidth;
        window.addEventListener('resize', function() {
            boxHeight = box.clientHeight;
            boxWidth = box.clientWidth;
        });

        const drops = setInterval(() => {
            const rain = document.createElement('div');
            rain.classList.add('rain');
            rain.style.top = 0;
            rain.style.left = Math.random() * boxWidth + 'px';
            rain.style.opacity = Math.random();
            box.appendChild(rain);
            let race = 1;
            const timer = setInterval(() => {
                if (parseInt(rain.style.top) > boxHeight) {
                    clearInterval(timer);
                    box.removeChild(rain);
                }
                race++;
                rain.style.top = parseInt(rain.style.top) + race + 'px';
            }, 20);
        }, 50);
        // rain---------------------------------------------------------------------------------------------------------------------
        const fullscreenImage = document.getElementById('fullscreen-image');
        const audio = new Audio('data/孤独、梦与奇迹.mp3');
        audio.loop = true;

        playButton.addEventListener('mouseover', () => {
            playButton.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        });

        playButton.addEventListener('mouseout', () => {
            playButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        });

        playButton.addEventListener('click', () => {
            // ------------------rain
            clearInterval(drops);
            const rainElements = document.querySelectorAll('.rain');
            rainElements.forEach(element => {
                element.remove();
            });
            // ------------------rain
            audio.play();
            fullscreenImage.style.transform = 'translateX(-100%)';
            fullscreenImage.style.opacity = '0';
            setTimeout(() => {
            fullscreenImage.style.visibility = 'hidden';
            }, 900);
        });
        // ---------------------------------------------------------------------------------------------------------------------
        
        let a = function () {
            for (let i = 0; i < d.length; i++) {
                d[i].className = "d"
            }
        }

        let s = function () {
            for (let i = 0; i < k.length; i++) {
                k[i].className = "k"
            }
        }
     
        for (let i = 0; i < d.length; i++) {
            
            d[i].onmousemove = function () {
                // k[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                b.style.backgroundImage = "url('data/" + [i + 1] + ".jpg')"
                d[i].addEventListener('click', function() {
                    k[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                  });
                // p.style.backgroundImage = "url('" + [i + 1] + ".jpg')"
                // document.body.style.backgroundImage = "url('" + [i + 1] + ".jpg')";
                update(i);
                a()
            }
        }

        for (let i = 0; i < k.length; i++) {
            
            k[i].onclick = function () {
                d[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                b.style.backgroundImage = "url('data/" + [i + 1] + ".jpg')"
                // p.style.backgroundImage = "url('" + [i + 1] + ".jpg')"
                // document.body.style.backgroundImage = "url('" + [i + 1] + ".jpg')";
                update(i);
                s()
            }
        }

        function update(i) {
            k[i].style.backgroundColor = "rgb(57, 144, 144)"; 
            for (let j = 0; j < k.length; j++) {
            if (j !== i) {
            k[j].style.backgroundColor = "";
            }
            }
            for (let j = 0; j < d.length; j++) {
            let element = document.getElementById(j.toString());
            if (j === i) {
            element.style.display = 'flex';
            } 
            else {
            element.style.display = 'none';
            }
            }
        }