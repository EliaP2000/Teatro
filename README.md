# Elia Pappalardo 596506

Elia Pappalardo 596506

Il codice cerca di riprodurre un teatro al quale l'utente puà accedere attraverso una chiave già predefinita. L'utente, dopo aver eseguito l'accesso, è in grado di poter visualizzare la struttura del teatro con i posti. Per poter prenotare un posto bisogna inserire il proprio nome nella barra in alto, premere sul bottone "prenota" ed infine scegliere il posto. L'utente può scegliere più posti e anche con più nomi diversi ma una volta scelto non è possibile modificare la scelta. Per terminare la prenotazione basta premere il bottone "concludi prenotazione". 

Il codice di accesso al teatro è tutto inserito all'interno di accessTeatro dove sono richiamati i moduli get e set (presenti in teatro.service.ts) che ricevono la chiave inserita in input dall'utente e, se corretta, aprono la prenotazione del posto a teatro. Il codice invece di inserimento del nome è tutta presente in add_nome che con un semplice EventEmitter rimanda il codice htmtl richiamato poi in AppComponent. Proprio in questo ultimo componente sono presenti le funzioni e il codice HTML per la costruzione del teatro (con un costrutture, due array con due *ngFor), la prenotazione del posto (con due funzioni per la platea e i palchi che rimandano ad una sola funzione di prenotazione) e la conclusione della prenotazione (una funzione che rimanda alla schermata principale di accesso del teatro). 


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-xheuby)