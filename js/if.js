console.clear();

/* IF -reiksmiu palyginimas

palyginimo operatoriai:
VISI: >, <, <=, >=, ==, != (nelygu);
NAUDOTINI: >, <, <=, >=, ===, !==, 
NENAUDOTINI: ==, !=, 

sablonai:

if () {}

if () {} else {}

if () {} else if () {}

*/

const a = 9;
const b = 10;

if (a !== b) {
    console.log("A grieztai nelygu B"); 
} else {
    console.log("A grieztai lygu B");
};
 
const c = '6';
const d = 6;

if (a !== b) {
    console.log("C grieztai nelygu D"); 
} else {
    console.log("C grieztai lygu D");
};

const eyeColor = 'juoda';

if (eyeColor === 'zalia') {
    console.log('Zaliaakis');
} else if (eyeColor === 'melyna') {
    console.log('Melynakis');
} else if (eyeColor === 'ruda') {
    console.log('Rudaakis');
} else {
    console.log('Nezinoma akiu spalva');
}


if ('aaa' == 'a') {
    console.log(true);
} else {
    console.log(false);
}

if ('Aaa' == 'Aaa') {
    console.log(true);
} else {
    console.log(false);
}


const day = 8
//kodo nestinimas
if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis');
    } else {
        if (day === 3) {
            console.log('treciadienis'); 
        } else {
            if (day === 4) {
                console.log('ketvirtadienis');
            } 
            else {
                if (day === 5) {
                    console.log('penktadienis');
                }
                else {
                    if (day === 6) {
                        console.log('sestadienis');
                    }
                    else {
                        if (day === 7){
                            console.log('selmadienis');
                        }
                        else {
                            console.log('tokios dienos savaiteje nera');
                        }
                    }
                }
            }
        }
    }   
}