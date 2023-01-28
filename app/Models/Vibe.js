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

    get PlayerTemplate() {
        return `
    <div class="pe-4 text-shadow">
      <h1> ${this.name}</h1>
      <p class="w-100 text-end"><b>plays ${this.plays}</b></p>
    </div>
    <iframe id="sound-cloud" width="250" height="300" scrolling="no" frameborder="no" allow="autoplay"
    src="${this.musicSource}"></iframe>
    `
    }

}


{/* <button onclick="app.vibesController.getActive('${this.id}')">${this.name}</button> */ }
