
/*| DNA | RNA |
| --- | --- |
| G   | C   |
| C   | G   |
| T   | A   |
| A   | U   |

criar um script que gere essa conversão

*/

let rna = []
class Conversao {
    constructor (baseNitrogenadaRna){
        this.base = baseNitrogenadaRna
    }

    conversao (dna) {
        let baseNitrogenadaDna = dna.split ("")

        for (let letra of baseNitrogenadaDna){
            if (letra == "c"){
                letra = "g"
                rna.push(letra)

            } else if (letra == "g"){
                letra = "c"
                rna.push(letra)

            }else if (letra == "t"){
                letra = "a"
                rna.push(letra)
            }else if (letra == "a"){
                letra = "u"
                rna.push(letra)
            }
           
            }
            let resultado = rna.join("")
            console.log(resultado)
           
        }
        
    }

   

const resultadoFinal = new Conversao("atucgtaagtcc")
console.log("O resultado da convesão é:" +  resultadoFinal.conversao(resultadoFinal.base))
