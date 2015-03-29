function writeTime () {
    var locator = document.getElementById('time');
    var date = new Date();

    locator.textContent = date.toTimeString().split(' ')[0];
}
writeTime();
setInterval(writeTime, 1000);