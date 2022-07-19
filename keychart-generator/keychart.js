class keychart {
   constructor() {
      this.keycombos = {}
   }

   add(keycombo, octave, note) {
      if (this.keycombos[keycombo] == undefined) {
         this.keycombos[keycombo] = [octave, note]
      } else {
         throw {"exception": "Duplicate Key in Keychart", "conflict":this.keycombos[keycombo]}
      }
   }

   get(keycombo) {
      return this.keycombos[keycombo]
   }

   fetch(octave, note) {
      let a = Object.keys(this.keycombos)
      return a.filter(combo => ((this.keycombos[combo][0] == octave) && (this.keycombos[combo][1] == note)))
   }
}
