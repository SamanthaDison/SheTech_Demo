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
        <button class="slide-button press-start fs-6" onclick="app.vibesController.getActive('${this.id}')" id="slide-1">${this.name}</button>`
    }

    get PlayerTemplate() {
        return `
    <div class="pe-4 text-shadow">
      <h4 class="pt-3 ps-3"> ${this.name}</h4>
      <p class="ps-4"><b>plays: ${this.plays}</b></p>
    </div>
    <div class="text-end p-3">
    <iframe id="sound-cloud" class="w-100"  height="250" scrolling="no" frameborder="no" allow="autoplay"
    src="${this.musicSource}"></iframe>
    </div>
    `
    }

}


{/* <button onclick="app.vibesController.getActive('${this.id}')">${this.name}</button> */ }
