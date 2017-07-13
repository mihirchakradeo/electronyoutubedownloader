var fs = require('fs');
var youtubedl = require('youtube-dl');

var link = document.getElementById('link');
var button = document.getElementById('button');
var label = document.getElementById('label');
var name = '';

button.addEventListener('click', function(){
  alert("Downloading "+link.value);
  var video = youtubedl(link.value,
    // Optional arguments passed to youtube-dl.
    ['--format=18'],
    // Additional options can be given for calling `child_process.execFile()`.
    { cwd: __dirname });
    move();
    // Will be called when the download starts.
    video.on('info', function(info) {
      //alert('Downloaded '+info.filename);
      name = info.filename;

      video.pipe(fs.createWriteStream(name+'.mp4'));
    });

});

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
