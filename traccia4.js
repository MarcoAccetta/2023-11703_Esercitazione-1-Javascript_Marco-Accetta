
while(true) {
    let drinks = parseInt(prompt('Inserisci il numero corrispondente alla bevanda desiderata: \n1 Acqua \n2 Coca-Cola \n3 Birra \n4 Thè'));

switch (drinks) {
    case 1:
        alert('Hai scelto l\'Acqua');
        break;
    case 2:
        alert('Hai scelto la Coca-Cola');
        break;
    case 3:
        alert('Hai scelto la Birra');
        break;
    case 4:
        alert('Hai scelto il Thè');
        break;
        default:
        alert('Prodotto non erogabile');
        
}
}



