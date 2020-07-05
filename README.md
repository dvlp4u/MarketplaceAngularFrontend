# MarketplaceAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

Il progetto è un integrazione al progetto "Marketplace" per gestire la parte frontend attraverso un Angular e consumare i dati tramite servizio REST.

## Installazione progetto

1 - Prima di tutto assicurarsi di avere scaricato e seguito le istruzione del progetto Marketplace presente al seguente indirizzo "https://github.com/dvlp4u/marketplace".
2 - Scaricare il file Zip di questo progetto e unzipparlo in una cartella a scelta del proprio dispositivo.
3 - Scaricare un IDE per Angular secondo preferenza, io utilizzero Visual Studio Code(VSC). Per scaricarlo e installarlo andare sul sito "https://code.visualstudio.com/", selezionare la voce download e seguire le procedure di installazione in base al vostro sistema operativo.
4 - Una volta installato, scarichiamo ed installiamo Angular, seguendo le istruzioni riportate all'indirizzo "https://angular.io/guide/setup-local". (non dimentichiamo di installare anche node.js, come indicato nel sito di angular e Angular-cli).
5 - Ora apriamo VSC e trasciniamo dentro ad esso la cartella del progetto che avevamo dezippato in precedenza.
6 - Successivamente apriamo una nuova finestra del terminale (CTRL+SHIFT+ò) e collochiamoci nella cartella del progetto "MarketplaceAngularFrontend". 
7 - Digitiamo il comando "npm install" e attendiamo qualche minuto che l'istallazione sia terminata.

## Utilizzo dell'applicazione

Possiamo utilizzaere l'applicazione dopo aver seguito i passi per l'installazione, digitando nel terminale il comando "ng serve --open" che automaticamente farà partire l'applicazione e ci aprirà il browser predefinito.
Per consumare i dati dal server bisognerà aver fatto partire anche il progetto "Marketplace" e il database "Mysql" come indicato nel file README diponibile all'indirizzo "https://github.com/dvlp4u/marketplace".

L'applicazione non è ancora completa, al momento sono disponibili solo le sezione di visualizzazione Utenti e Prodotti (filtrati oer nome o categoria).
Non è ancora possibile aggiungere, modificare e cancellare Utenti e prodotti dal database.


