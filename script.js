document.addEventListener("DOMContentLoaded", function() { startPlayer(); }, false);
// creating variable for video player setting
let player;

function startPlayer() 
{
 player = document.getElementById('video_player');
 player.controls = false;
}

function playVideo()
{
 player.play();
}

function pauseVideo()
{
 player.pause();
}

function stopVideo() 
{
 player.pause();
 player.currentTime = 0;
}

function changeVolume()
{
 player.volume = document.getElementById("change_vol").value;
}

