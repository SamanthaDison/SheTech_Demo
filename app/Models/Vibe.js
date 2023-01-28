export class Vibe {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.imgUrl = data.imgUrl
        this.musicSource = data.musicSource
        this.plays = data.plays
    }

    get VibesTemplate() {
        return `  
        <button onclick="app.vibesController.getActive('${this.id}')" id="slide-1">${this.name}</button>`

        
    }

}


{/* <button onclick="app.vibesController.getActive('${this.id}')">${this.name}</button> */}
        