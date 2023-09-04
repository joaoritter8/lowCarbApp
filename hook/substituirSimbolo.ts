
  // Função para substituir o símbolo em uma string
  function substituirSimboloEmString(string: string, simboloOriginal: string, novoSimbolo: string): string {
    return string.replace(new RegExp(simboloOriginal, 'g'), novoSimbolo);
  }

  // Função para substituir o símbolo em um objeto JSON
 export default function substituirSimboloEmObjeto(obj: any, simboloOriginal: string, novoSimbolo: string): any {
    if (typeof obj === 'string') {
      return substituirSimboloEmString(obj, simboloOriginal, novoSimbolo);
    } else if (Array.isArray(obj)) {
      return obj.map(item => substituirSimboloEmObjeto(item, simboloOriginal, novoSimbolo));
    } else if (typeof obj === 'object') {
      const novoObjeto: { [key: string]: any } = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          novoObjeto[key] = substituirSimboloEmObjeto(obj[key], simboloOriginal, novoSimbolo);
        }
      }
      return novoObjeto;
    } else {
      return obj;
    }
  }
