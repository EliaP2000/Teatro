# angular-ivy-xheuby

Elia Pappalardo 596506

Il codice è strutturato su tre pagine differenti contenute all'interno della cartella app: app.component.css, app.component.html e app.component.ts. 

Per quanto riguarda il css non ci sono molte cose da dire tranne per il fatto di aver stabilito il font del tag html p (paragrafo). 

Gli elementi più interessanti sono Typescript e HTML. 

Il codice Typescript è tutto concentrato all'interno della classe AppComponent ed è strutturato su più funzioni pubbliche e su un costruttore per la creazione del Teatro. In quest'ultimo, appunto, ho inserito due array: uno per la platea e uno per i palchi. Le funzioni sono molteplici: due per l'inserimento nell'array del nominativo della persona che sta prenotando un determinato posto, cliccando sul bottone di riferimento dell'array (rispettivamente una per la platea e una per i palchi); tre per l'accesso al teatro ed in particolar modo una per la get e una per la set della chiave per poter accedere al database dove risiede il teatro, su cui si andrà a prenotare i posti; due rispettivamente per la conclusione della prenotazione dei posti e per il reset totale del teatro e, quindi, la cancellazione dei nominativi presenti nei due array del Teatro. 
Per l'inserimento negli array vi è la possibilità di immettere il nome quante volte lo si volesse, a patto che il posto non fosse già stato occupato da un'altra persona in precedenza. E' possibile prenotare anche con diversi nomi dallo stesso utente, ma una volta inserito, il nome non può più essere modificato. Nella funzione dei palchi, inoltre, sono presenti una serie di If perché, essendo un array di 24 posti (che non vengono rappresentati tutti di seguito, in maniera lineare, ma ogni 6 posti con una nuova riga), l'inserimento riusciva difficile. Ciò non riuscendo a trovare perfettamente le celle dell'array dato dall'utilizzo di due *ngFor in HTMTL affinché si potesse disporre l'array su più righe e colonne.

Nel codice HTML, invece, sono presenti una serie di div che suddividono la pagina e che, attraverso il Typescript, viene resa dinamica mostrando o non mostrando a video il div che deve essere utilizzato (o non utilizzato). Il primo riguarda l'accesso nel teatro che può essere eseguito solo attraverso la chiave di accesso al database. Inserendola il div di accesso viene "spento" e viene "acceso" quello del teatro con all'interno la casella di inserimento per il nominativo, il teatro (platea e palchi). Vengono mostrati a video successivamente: il testo di avvenuta/non avvenuta/errore prenotazione con il relativo posto e il nominativo (inserito anche come indice nell'array) e il pulsante per concludere la prenotazione, che rimanda alla pagina di accesso del teatro.
Si ritorna al div iniziale con il pulsante di conclusione che mostra nuovamente a video l'accesso e nasconde il teatro all'utente. 
Per il teatro sono stati utilizzati, rispettivamente per la platea e per i palchi, 2 *ngFor affinché si potesse distribuire un singolo array su più righe e colonne in base alle specifiche del progetto stesso.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-xheuby)