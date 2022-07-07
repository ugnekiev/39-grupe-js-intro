
/* 
SWITCH

*/

console.clear();

const day = 9;

switch (day) {
    case 1: console.log('pirmadienis');
    break;

    case 2: console.log('antradienis');
    break;

    case 3: console.log('treciadienis');
    break;

    case 4: console.log('ketvirtadienis');
    break;

    case 5: console.log('penktadienis');
    break;

    case 6: console.log('sestadienis');
    break;

    case 7: console.log('sekmadienis');
    break;

    default: 
        console.log('tokios dienos savaiteje nera');
        break;
}

console.log('--------------------------');
const weekday = 1;

switch (weekday) {
    case 1:     
    case 2:     
    case 3:     
    case 4:     
    case 5: console.log('darbo diena');
            break;

    case 6:
    case 7: console.log('savaitgalis');
            break;

    default: 
        console.log('tokios dienos savaiteje nera');
        break;
}

console.log('--------------------------');

const stotele = "Parko ziedas1";

switch (stotele) {
    case "Parko ziedas1": 
        console.log("parko ziedas1");
    

    case "Geniu1":
        console.log("Geniu1");
        
    case "Tremtiniu1":
        console.log("Tremtiniu1");
            
    
    case "Rudens1":
        console.log("Rudens1");
        
    case "Mindaugo tiltas":
        console.log("Mindaugo tiltas");
       
        
    case "Zaliasis tiltas":
        console.log("Zaliasis tiltas");
           
        
    case "Lvovo":
        console.log("Lvovo");
        break;     
    
    case "Tuskulenai":
        console.log("Tuskulenai");
        break; 
            
    case "Vasaros":
        console.log("Vasaros");
        break;  

    case "Rudens2":
        console.log("Rudens2");
        break;     
    
    case "Tremtiniu2":
        console.log("Tremtiniu2");
        break; 
            
    case "Geniu2":
        console.log("Geniu2");
        break;     
            
    case "Parko ziedas2":
        console.log("Parko ziedas2");
        break;     
    
    default:
        break;
}
/* pvz.: ilipus Geniu1 stotelej, man reikia consilej pamatyti visas stoteles iki Lvovo.
istrynus break, vykdo logika iki sekancio break.
*/
