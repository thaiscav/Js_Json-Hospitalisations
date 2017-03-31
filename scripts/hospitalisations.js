//Thais Cavalcanti e Souza

var dadosJason;
var tab,list1 , codeEtab, list2;
var strContentList,strContentList2,strContentTab;

// Fermer table
function fermerTab() {
    document.getElementById("tab").innerHTML = "";
    strContentTab= "";
    document.getElementById("container5-alert").innerHTML = "";
}// fin fermer

function fermerList() {
    document.getElementById("container3-left").innerHTML = "";
    strContentList = "";
    document.getElementById("container3-middle").innerHTML = "";
    strContentList2 = "";
}// fin fermer

//Prendre le click de la table choisie
function getTable(nomTab) {
    tab = nomTab;
    choisirTable();
}// fin getTable

function choisirTable(){
     
    var rows,cols;
    
    fermerTab();
    fermerList();
      
    if (tab == 'patients') {
        
            chargerTablePat();
       
    }// fin patients
    else if (tab == 'etablissements') {
       
            chargerTabEtab();
       
     }// fin etablissements
    else if (tab == 'hospitalisations') {

        chargerTabHosp('hospitalisations');
        
    }// fin hospitalisations
    else if (tab == 'hospit_pat'){
         
        remplirListeDossier();
        
    }//fin hospit_pat
    else if (tab == 'hospit_etab'){
        
        remplirListeEtab();            

    } // fin hospit_etab
    
}//fin function chagerTable

function chargerTablePat(){
   
    tab = tablePatient;
    
    strContentTab += "<tr>" + "<th>" + "Code du Patient" + "<i class= 'fa fa-fw fa-sort'></i>" + "</th>" + "<th>" + "Nom" + "</th>" + "<th>" + "Prènom" + "</th>" + "<th>" + "Date de Naisc." + "</th>" + "<th>" + "Sexe" + "</th>" + "</tr>";
    
    for (j in tab) {

        strContentTab += "<tr>" + "<td>" + tab[j].dossier + "</td>" + "<td>" + tab[j].nom + "</td>" + "<td>" + tab[j].prenom + "</td>" + "<td>" + tab[j].naissance + "</td>" + "<td>" + tab[j].sexe + "</td>" + "</tr>";
            
    } 
    
    document.getElementById("tab").innerHTML = strContentTab;
    
}//fin chargerTablePat

function chargerTabEtab(){
    
        tab = tableEtab;
        
        strContentTab += "<tr>" + "<th>" + "Code d'Étab" + "</th>" + "<th>" + "Nom" + "</th>" + "<th>" + "Adresse" + "</th>" + "<th>" + "Code Postal" + "</th>" + "<th>" + "Ville" + "</th>" + "<th>" + "Province" + "</th>" + "<th>" + "Tel" + "</th>" + "</tr>";
            
        for (j in tab) {
                strContentTab += "<tr>" + "<td>" + tab[j].codeEtab + "</td>" + "<td>" + tab[j].nom + "</td>" + "<td>" + tab[j].adresse + "</td>" + "<td>" + tab[j].codePostal + "</td>" + "<td>" + tab[j].ville + "</td>" + "<td>" + tab[j].province + "</td>" + "<td>" + tab[j].tel + "</td>" + "</tr>";
            }
    
    document.getElementById("tab").innerHTML = strContentTab;
    
}// fin chargerTabEtab

function chargerTabHosp(sel) {
    
        tab = tableHospit;
    
        fermerTab();
    
        strContentTab += "<tr>" + "<th>" + "Code de Hop." + "</th>" + "<th>" + "Code d'Étab" + "</th>" + "<th>" + "Code du Patient" + "</th>" +"<th>" + "Date Admission" + "</th>" + "<th>" + "Data sortie" + "</th>" +"<th>" + "Specialité" + "</th>"+ "</tr>";
 
        for (j in tab) {
            
            //Choix menu HOSPITALISATION =>
            if (sel === 'hospitalisations'){
                 remplirTabHosp();
            }  
            //choix menu HOSPIT PAR DOSSIER =>
            else if ((tab[j].dossier === sel) && (list1==tablePatient)){
                 remplirTabHosp();
            }
            //choix menu HOSPIT par ETAB =>
            else if ((tab[j].codeEtab === sel) && (list1==tableEtab)){
                remplirTabHosp();
            }
            //schoix menu HOSPIT par ETAB et ESPECIALITE =>
            else if ((tab[j].specialite === sel) && (tab[j].codeEtab === codeEtab)){
                 remplirTabHosp();
            }

        }//fin for

    document.getElementById("tab").innerHTML = strContentTab;
       
}// fin remplirTabHosp

function remplirTabHosp(){
    
     strContentTab += "<tr>" + "<td>" + tab[j].codeHop + "</td>" + "<td>" + tab[j].codeEtab + "<td>" + tab[j].dossier + "</td>" + "</td>" + "<td>" + tab[j].date_admission + "</td>" + "<td>" + tab[j].date_sortie + "</td>" + "<td>" + tab[j].specialite + "</td>" + "</tr>";
    
}//fin remplir

function remplirListeDossier() {
    
        list1 = tablePatient;  
               
        strContentList += "<select id='patient' class='form-control' onchange='chargerTabHosp(this.value)'><option selected='selected'>Choisir dossier de patient:</option>";
             
        //console.log(list);//=undefined
        
        for (x in list1) {
           
            strContentList += "<option value="+ list1[x].dossier + ">" + list1[x].dossier + "-" + list1[x].prenom + " " + list1[x].nom +"</option>";    
                     
        }//fin foreach
        
        strContentList += "</select>";
    
        document.getElementById("container3-left").innerHTML = strContentList;
    
} //fin remplirListeD

function remplirListeEtab() {

        list1 = tableEtab;

        strContentList += "<select id='etab' class='form-control' onchange='remplirListeSpecialite(this.value)'><option selected='selected'>Choisir établissement</option>";
        
        for (x in list1) {

            strContentList += "<option value=" + list1[x].codeEtab + ">" + list1[x].codeEtab  + "-" + list1[x].nom + "</option>";
        }
        
        strContentList += "</select>";
    
        document.getElementById("container3-left").innerHTML = strContentList;
} //fin remplirListeE

function remplirListeSpecialite(sel) { //onchange Etab
        
        codeEtab = sel;   
        chargerTabHosp(sel);// tjrs codeEtab

        list2 = tableHospit;  

        strContentList2 = "";
  
        strContentList2 += "<select id='spec' class='form-control' onchange='chargerTabHosp(this.value)'><option selected='selected'>Choisir spécialité</option>";
        
        for (x in list2) {
            
            if (list2[x].codeEtab == sel){
                
// =====> SPECIALITE REPETIDO PQ NAO TENHO TABELA DE SPECIALITES
                   
            strContentList2 += "<option value=" + list2[x].specialite + ">" + list2[x].specialite + "</option>";
                
            }
// ADD ALERTA = NAO TEM ESSA ESPECIALITE    

        }
        
        strContentList2 += "</select>";
    
        document.getElementById("container3-middle").innerHTML = strContentList2;    
            
} //fin remplirListeS


//APAGAR SE NAO FOR FAZER UMA TABELA UNICA--------------------------
function chargerTables(rows, cols) {
    
    var div = document.getElementById("tab");
    div.innerHTML = "";
    var tblBody = document.createElement("tbody");
    var row; 
    var col;
    var cellText;
    //cols = Object.keys(tab[1]).length;      
    console.log(tab);
    
    // rows
    for (i in tab)  {
        row = document.createElement("tr");
        // cols
         for (var j = 0; j <= cols; j++) {
                col = document.createElement("td");
                cellText = document.createTextNode("txt"+j);
                            console.log(tab[i].j);
            }
            col.appendChild(cellText);
            row.appendChild(col);
        } //fin for 2
        // add the row to the end of the table body
        tblBody.appendChild(row);

    // put the <tbody> in the <table>
    div.appendChild(tblBody);
} //fin function chargerTable
