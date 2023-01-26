
function _drawTime() {
    let d = new Date()
    let minutes = d.getMinutes()
    if (minutes < 10) {
        document.getElementById('clock').innerText = d.getHours() + ':' + '0' + d.getMinutes()
        return
    }
    document.getElementById('clock').innerText = d.getHours() + ':' + d.getMinutes()
}

function _setInterval() {
    setInterval(_drawTime, 1000)
}

export class DateController {
    constructor() {
        // console.log('hello from the date controller')
        _drawTime()
        _setInterval()
    }


}