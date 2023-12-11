console.log("welcome to the BEAT");

//Initialisation the variables//
let audioIndex = 0;
let audioElement = new Audio("songs/11.mp3");
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gifi = document.getElementById('gifi');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: "Tu jaane Na", filepath: "songs/1.mp3", coverpath: "cover/cover1.jpeg" },
    { songname: "Kala Chashma", filepath: "songs/2.wav", coverpath: "cover/cover2.jpeg" },
    { songname: "Apna Bana Le", filepath: "songs/3.mp3", coverpath: "cover/cover3.jpeg" },
    { songname: "Agar Tum Saath Ho", filepath: "songs/4.mp3", coverpath: "cover/cover4.jpeg" },
    { songname: "Balam Pichkari", filepath: "songs/5.mp3", coverpath: "cover/cover5.jpeg" },
    { songname: "Haseen Raat", filepath: "songs/6.mp3", coverpath: "cover/cover6.jpeg" },
    { songname: "Udta Punjab", filepath: "songs/7.mp3", coverpath: "cover/cover7.jpeg" },
    { songname: "Teri-meri-Bodyguard", filepath: "songs/8.mp3", coverpath: "cover/cover8.jpeg" },
    { songname: "Humsafar", filepath: "songs/9.mp3", coverpath: "cover/cover9.jpg" },
    { songname: "Badtameez Dil", filepath: "songs/10.mp3", coverpath: "cover/cover10.jpeg" },
    { songname: "Kabira", filepath: "songs/11.mp3", coverpath: "cover/cover11.jpeg" },
    { songname: "Gerua", filepath: "songs/12.mp3", coverpath: "cover/cover12.jpeg" },
    { songname: "One Bottle Down", filepath: "songs/13.mp3", coverpath: "cover/cover13.jpeg" },
    { songname: "Lahore", filepath: "songs/14.mp3", coverpath: "cover/cover14.jpeg" },
    { songname: "Blue Eyes", filepath: "songs/15.mp3", coverpath: "cover/cover15.jpeg" },
    { songname: "Desi Kalakaar", filepath: "songs/16.mp3", coverpath: "cover/cover16.jpeg" },
    { songname: "Ankhon Mein Teri ", filepath: "songs/17.mp3 ", coverpath: "cover/cover17.jpeg" },
    { songname: "Soniyo", filepath: "songs/18.mp3", coverpath: "cover/cover18.jpeg" },
    { songname: "Subhanallah", filepath: "songs/19.mp3", coverpath: "cover/cover19.jpeg" },
    { songname: "Tera Deedar Hua", filepath: "songs/20.mp3", coverpath: "cover/cover20.jpeg" },
    { songname: "Sooraj Dooba Hain", filepath: "songs/21.mp3", coverpath: "cover/cover21.jpeg" },
    { songname: "Dope Shope", filepath: "songs/22.mp3", coverpath: "cover/cover22.jpeg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

//audioElement.play()//

//handle play/pause buttons//
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gifi.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gifi.style.opacity = 0;
    }
})

//listen to event//
audioElement.addEventListener('timeupdate', () => {
    //update seekbar//
    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = Progress;
})

    myprogressbar.addEventListener('change', () => {
        audioElement.currentTime = audioElement.duration * myprogressbar.value / 100;
    
})

