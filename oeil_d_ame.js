var liste = {
    "Chihuahua": [2,3,2,2,3,3,2],
    "Malinois" : [4,4,2,2,1,4,3],
    "Renard roux" : [3,1,3,2,3,4,2],
    "Renard polaire" : [3,1,4,2,3,3,1],
    "Basenji" : [1,3,4,2,3,3,2],
    "Kangourou" : [2,3,2,2,1,2,3],
    "Singe" : [3,4,1,2,1,4,2],
    "Pangolin" : [2,2,3,2,4,2,2],
    "Caracal" : [3,1,2,2,4,3,2],
    "Chat abyssin" : [2,2,1,2,3,4,3],
    "Guépard" : [3,2,4,2,3,4,1],
    "Lion" : [3,3,4,2,3,2,2],
    "Guêpe" : [4,4,2,2,2,1,4],
    "Abeille" : [4,4,3,2,1,4,4],
    "Dauphin" : [2,4,2,2,1,4,4],
    "Orque" : [3,4,2,2,3,2,2],
    "Morse" : [2,3,3,2,2,1,3],
    "Hippocampe" : [3,2,4,2,3,3,2],
    "Baleine" : [4,3,4,2,1,2,3],
    "Genette" : [2,2,2,2,1,4,4],
    "Raton-Laveur" : [2,3,1,2,4,4,4],
    "Faisan doré" : [1,2,2,2,3,1,3],
    "Pie bavarde" : [3,2,2,2,4,3,2],
    "Perruche" : [4,4,1,2,2,4,4],
    "Aigrette" : [2,2,3,2,2,1,2],
    "Pélican" : [2,4,3,2,3,3,2],
    "Héron cendré" : [3,1,4,2,1,2,1],
    "Grue Royale" : [2,3,4,2,3,2,3],
    "Chèvre" : [3,3,2,2,1,4,4],
    "Cheval" : [2,4,3,2,1,1,1],
    "Daim" : [2,4,4,2,3,2,1],
    "Caracara austral" : [4,1,2,2,4,1,1],
    "Message Sagittaire" : [3,1,3,2,3,3,1],
    "Cobra royal" : [1,1,1,2,4,2,4],
    "Crocodile du nil" : [1,2,4,2,1,1,1],
    "Lièvre" : [2,3,2,2,3,3,1],
    "Rat" : [3,3,2,2,1,4,3],
    "Husky" : [2,3,2,1,1,3,3],
    "Border Collie" : [4,4,1,1,1,4,3],
    "Beauceron" : [4,4,3,1,1,3,2],
    "Hyène tachetée" : [2,4,2,1,3,4,2],
    "Lama" : [2,3,3,1,4,2,4],
    "Tortue (terre)" : [2,1,4,1,1,1,1],
    "Tigre" : [3,1,3,1,3,2,1],
    "Mante religieuse" : [1,1,1,1,1,2,4],
    "Moufette" : [2,2,2,1,2,3,1],
    "Hermine" : [1,2,1,1,4,4,2],
    "Blaireau" : [4,1,3,1,2,2,2],
    "Pétrel" : [2,2,2,1,4,2,2],
    "Oie" : [1,3,2,1,1,4,3],
    "Coq" : [4,3,2,1,4,1,4],
    "Paon" : [1,2,1,1,4,2,1],
    "Cacatoès" : [2,4,3,1,3,4,2],
    "Ara" : [3,4,3,1,1,4,4],
    "Dindon" : [3,2,2,1,1,2,3],
    "Mouflon" : [2,3,2,1,1,2,3],
    "Hippopotame" : [2,2,3,1,1,2,1],
    "Chameau" : [1,3,3,1,3,2,2],
    "Bison" : [4,4,3,1,1,2,1],
    "Elan" : [2,3,4,1,2,1,3],
    "Elephant" : [4,4,4,1,4,3,1],
    "Varan de comodo" : [2,2,3,1,2,2,1],
    "Souris" : [2,3,1,1,1,4,3],
    "Ours noir" : [3,1,3,1,1,3,4],
    "Chacal doré" : [3,2,2,3,4,4,2],
    "Dhole" : [3,3,2,3,4,3,2],
    "Beagle" : [3,3,2,3,1,3,3],
    "Chien viverrin" : [3,2,3,3,4,4,4],
    "Chow2chow" : [2,3,3,3,1,2,2],
    "Lycaon" : [4,4,3,3,2,3,1],
    "Labrador" : [3,4,4,3,1,4,3],
    "Castor" : [3,4,1,3,3,4,3],
    "Lémurien" : [3,4,1,3,1,4,3],
    "Hérisson" : [2,2,3,3,2,1,1],
    "Fourmi" : [4,4,1,3,1,4,3],
    "Papillon de nuit" : [3,2,3,3,4,2,3],
    "Pieuvre" : [2,2,2,3,2,4,3],
    "Otarie" : [3,3,2,3,2,4,4],
    "Narval" : [3,3,3,3,3,2,3],
    "Phoque" : [4,3,3,3,2,3,4],
    "Tortue (mer)" : [1,4,3,3,1,2,1],
    "Grenouille" : [1,4,4,3,2,3,2],
    "Zibeline" : [2,2,1,3,1,4,4],
    "Loutre" : [3,4,1,3,3,4,4],
    "Suricate" : [4,4,3,3,2,4,3],
    "Pic-vert" : [1,2,2,3,4,3,2],
    "Cormoran" : [3,3,2,3,2,3,2],
    "Geai bleu" : [4,4,2,3,4,3,2],
    "Colibri" : [4,3,1,3,1,3,2],
    "Sitelle" : [2,2,3,3,3,2,2],
    "Martin pêcheur" : [1,2,3,3,4,4,1],
    "Diamant mandarin" : [3,4,3,3,3,3,2],
    "Pinguin" : [2,4,4,3,2,1,3],
    "Rhinocéros" : [2,2,2,3,1,1,1],
    "Zèbre" : [1,4,2,3,2,2,2],
    "Girafe" : [2,3,3,3,2,2,2],
    "Gnou" : [4,4,3,3,2,1,1],
    "Vache" : [3,4,4,3,1,1,1],
    "Pygargue à tête blanche" : [2,2,2,3,3,2,4],
    "Faucon pèlerin" : [3,1,2,3,2,2,1],
    "Faucon crécerelle" : [3,1,1,3,2,3,3],
    "Chevêchette d'Athéna" : [2,2,4,3,4,3,3],
    "Buse variable" : [3,1,4,3,2,2,3],
    "Gekko" : [2,2,4,3,2,3,2],
    "Lapin" : [1,4,2,3,2,4,3],
    "Ecureuil" : [2,2,1,3,1,4,3],
    "Panda roux" : [3,2,4,3,3,3,3],
    "Terrier" : [2,3,1,4,1,4,4],
    "Lévrier" : [2,4,1,4,4,2,4],
    "Fennec" : [3,2,3,4,3,3,2],
    "Otocyon" : [3,3,3,4,4,4,1],
    "Loup à crinière" : [2,4,3,4,2,3,3],
    "Loup Gris" : [3,4,3,4,1,3,2],
    "Berger australien" : [3,4,3,4,1,4,3],
    "Chauve-souris" : [3,2,2,4,4,3,3],
    "Koala" : [1,4,4,4,3,1,2],
    "Papillon" : [3,2,2,4,2,3,4],
    "Libellule" : [2,2,1,4,2,3,4],
    "Luciole" : [2,4,1,4,4,4,4],
    "Sauterelle" : [2,3,3,4,3,3,2],
    "Scarabée" : [2,2,4,4,3,1,1],
    "Araignée" : [1,1,4,4,4,1,1],
    "Cigale" : [2,3,4,4,4,2,4],
    "Béluga" : [2,4,3,4,1,4,3],
    "Manchot" : [3,4,3,4,2,3,4],
    "Furet" : [3,3,1,4,4,4,4],
    "Hirondelle" : [2,3,2,4,2,4,3],
    "Rossignol" : [3,3,2,4,4,2,3],
    "Mésange" : [3,4,2,4,1,4,3],
    "Etourneau" : [4,4,2,4,2,3,4],
    "Oiseau-lyre" : [2,2,3,4,4,4,1],
    "Colombe" : [2,4,4,4,4,3,2],
    "Flamant rose" : [4,4,4,4,3,2,2],
    "Anguille" : [1,1,1,4,3,2,2],
    "Ane" : [2,3,1,4,2,4,4],
    "Antilope" : [1,4,1,4,2,3,2],
    "Cerf élaphe" : [3,4,3,4,4,3,1],
    "Mouton" : [2,4,4,4,1,1,1],
    "Salamandre" : [2,2,2,4,4,4,4],
    "Lézard" : [1,2,1,4,3,2,1],
    "Caméléon" : [1,2,3,4,4,1,1],
    "Panda géant" : [3,2,4,4,1,3,4],
    "Lynx Boréal" : [2,1,2,2,4,3,2],
    "Ocelot" : [2,1,2,4,3,4,3],
    "Chat persan" : [1,1,2,1,3,2,2],
    "Chat siamois" : [1,1,2,1,2,3,2],
    "Léopard" : [2,1,3,3,1,2,3],
    "Panthère Nébuleuse" : [2,1,3,3,2,3,2],
    "Maine Coon" : [1,1,3,2,3,3,2],
    "Puma" : [1,1,3,1,3,2,1],
    "Serval" : [2,1,4,4,4,4,3],
    "Once" : [2,1,4,2,3,3,1],
    "Chat pêcheur" : [2,1,4,4,2,3,3],
    "Chat européen" : [1,1,4,1,1,4,4],
    "Corbeau" : [3,3,3,1,3,4,3],
    "Cygogne" : [3,3,3,2,2,2,2],
    "Corneille" : [4,3,3,1,4,3,3],
    "Ibis rouge" : [3,3,4,4,3,2,2],
    "Cygne" : [3,3,4,2,2,1,1],
    "Gypaète barbu" : [2,1,2,3,3,3,3],
    "Vautour percnoptère" : [2,1,2,3,1,2,2],
    "Faucon Gerfault" : [2,1,2,4,2,3,4],
    "Harpie Féroce" : [1,1,2,1,4,1,3],
    "Vautour fauve" : [3,2,3,4,1,2,4],
    "Vautour moine" : [3,2,3,2,1,2,3],
    "Buse aiguia" : [2,1,3,3,3,3,3],
    "Busard des roseaux" : [2,1,3,2,1,3,2],
    "Autour des palombes" : [2,1,3,3,3,2,3],
    "Elanion blanc" : [2,1,3,1,4,4,4],
    "Pygargue vocifer" : [2,1,3,2,3,2,1],
    "Aigle royal" : [1,1,3,1,3,3,3],
    "Condor des andes" : [1,1,3,1,1,2,2],
    "Chouette harfrang" : [1,1,3,4,3,3,3],
    "Chouette hulotte" : [1,1,3,3,4,2,3],
    "Balbusard pêcheur" : [2,1,4,1,2,1,3],
    "Epervier" : [2,1,4,3,1,2,2],
    "Hibou grand2duc" : [1,1,4,2,4,2,1],
    "Chouette effraie" : [1,1,4,3,3,3,3],
    "Buse de Harris" : [3,3,4,4,1,2,2],
    "Serpent des blés" : [1,1,2,4,2,3,1],
    "Crotal" : [1,1,2,1,1,1,3],
    "Python réticulé" : [1,1,3,2,3,2,2],
    "Couleuvre à collier" : [1,1,3,4,2,2,2],
    "Vipère" : [1,1,4,3,3,1,3],
    "Boa constrictor" : [1,1,4,3,1,1,1],
    "Grizzly" : [2,1,3,2,1,3,3],
    "Ours polaire" : [2,1,4,1,3,4,1]
};

test = [4,4,4,4,4,4,4];

function compare(test, liste) {
    var ret = {};
    for (const [key, value] of Object.entries(liste)) {
        var score = 0;
        for (let i = 0; i < 7; i++) {
            score += Math.abs(value[i] - test[i]);
        }
        ret[key] = score;
    };
    const entries = Object.entries(ret);
    entries.sort((a, b) => a[1] - b[1]);
    console.log(entries);
    return entries[0];;
}

function logSubmit(event) {
    event.preventDefault();
    var car1 = 1;
    var car2 = 1;
    var car3 = 1;
    var car4 = 1;
    var car5 = 1;
    var car6 = 1;
    var car7 = 1;
    for (e of document.getElementsByName('car1')) {
        if (e.checked) car1 = e.value;
    }
    for (e of document.getElementsByName('car2')) {
        if (e.checked) car2 = e.value;
    }
    for (e of document.getElementsByName('car3')) {
        if (e.checked) car3 = e.value;
    }
    for (e of document.getElementsByName('car4')) {
        if (e.checked) car4 = e.value;
    }
    for (e of document.getElementsByName('car5')) {
        if (e.checked) car5 = e.value;
    }
    for (e of document.getElementsByName('car6')) {
        if (e.checked) car6 = e.value;
    }
    for (e of document.getElementsByName('car7')) {
        if (e.checked) car7 = e.value;
    }
    var test = [car1, car2, car3, car4, car5, car6, car7];
    var res = compare(test, liste);
    var pourcentage = Math.round(100 - (res[1] * 100 / 12));
    alert(res[0] + " (correspondant à " + pourcentage + "%)");

}


