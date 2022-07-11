let keys = document.querySelectorAll('.kkey')
window.addEventListener('keydown', (e) => {
    keys.forEach((key) => {
        let data_key = key.getAttribute('data-key')
        if(e.keyCode === parseInt(data_key) ) {
            let audio = document.querySelectorAll('audio')
            audio.forEach((aud) => {
                if(aud.getAttribute('data-key') == data_key) {
                    aud.currentTime= 0;
                    aud.play()
                    if (data_key == 69) {
                        let crash = document.querySelector('.crash_drums')
                        crash.style.transform='rotate(-10deg)'
                        crash.style.transition='100ms all'
                        setTimeout(()=>{crash.style.transform='rotate(-6deg)'}, 100) 
                    }
                    if (data_key == 82) {
                        let crash = document.querySelector('.crash_drums')
                        crash.style.transform='rotate(4deg)'
                        crash.style.transition='100ms all'
                        setTimeout(()=>{crash.style.transform='rotate(-6deg)'}, 100) 
                    }

                    if (data_key == 73 || data_key==75) {
                        let crash = document.querySelector('.hihat')
                        crash.style.top='193px'
                        crash.style.transition='100ms all'
                        setTimeout(()=>{crash.style.top='188px'}, 100) 
                    }
                    
                    
                }
            })
            
            
        }
    })
})