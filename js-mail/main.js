const emailVerificate = [  //Dichiarazione Array con elementi predefiniti
 "pinco.pallino@boolean.com",
 "carlo.conti@boolean.com",
 "gerry.scotti@boolean.com",
 "checcozalone86@boolean.com"
];
console.log("[LOG] Il vettore è:" + emailVerificate);

const bottoneVerifica = document.getElementById('bottone-verifica');
bottoneVerifica.addEventListener('click', //Evento sul bottone di Verifica
    function(){
        let y = 0; // Variabile inizializzata a zero il cui valore cambierà solo se l'email risulterà verificata
        let utenteEmail = document.getElementById('campo-mail').value;
        console.log("[LOG]L'email inserita dall'utente è: " + utenteEmail);
        for(let i=0 ; i < emailVerificate.length ; i++ ){
            if( utenteEmail === emailVerificate[i] ){ 
               y = 1; //il valore di 'y' diventa 1 poichè l'email risulta verificata
            }
        }
        if(y === 1){ //terminato il for si controlla il valore della variabile 'y'
            const successMsg = document.getElementById('result-msg');
            successMsg.classList.remove( 'bg-danger-subtle' , 'd-none' ); // viene mostrato a display il box d'errore
            successMsg.classList.add('bg-success-subtle'); // il box d'errore viene colorato di verde
            const successMsgP = document.getElementById('result-msg-p');
            console.log(successMsgP);
            successMsgP.innerHTML = `L'email inserita risulta verificata `; //viene inserito il messaggio di testo nel box d'errore: ESITO POSITIO
            console.log("[LOG] Email presente nel sistema"); //se y = 1 l'email risulta verificata
        }
        else{
            const successMsg = document.getElementById('result-msg');
            successMsg.classList.remove( 'bg-success-subtle' , 'd-none' ); // viene mostrato a display il box d'errore
            successMsg.classList.add('bg-danger-subtle'); //il box d'errore viene colorato di rosso
            const successMsgP = document.getElementById('result-msg-p');
            console.log(successMsgP);
            successMsgP.innerHTML = `L'email inserita NON risulta verificata `; //viene inserito il messaggio di testo nel box d'errore: ESITO NEGATIVO
            console.log("[LOG] Email NON verificata nel sistema");//se y = 0 l'email non risulta verificata
        }
    }
);

const bottoneReset = document.getElementById('bottone-reset');
console.log(bottoneReset);
bottoneReset.addEventListener('click', //evento in ascolto sul bottone "Reset";
    function(){
        window.location.reload(); //la finestra viene ricaricata
    }
)