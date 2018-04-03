class Spacecraft {
    //examplo simplificado de construção de uma classe 
      constructor (public propulsor: string ){}
      
      jumpIntoHyperspace(){
          console.log(`Entering hyperspace with ${this.propulsor}`)
          
      }
    }
interface Containership{

    cargoContainers: number
}    
// exportando a classe Spacecraft e Containership
export{Spacecraft, Containership}