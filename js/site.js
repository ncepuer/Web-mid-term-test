// 控制背景音乐播放器
a = function() {
    var audio = document.getElementById('player');
    if (audio.paused) {
        audio.play();//audio.play();// 播放
    }
    else {
        setTimeout(function(){
            audio.pause();// 暂停
        },200);
        
    }
}