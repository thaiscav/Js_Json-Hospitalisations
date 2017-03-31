var tableEtab = [
        {
            "codeEtab": "1",
            "nom": "Centre hospitalier Sud",
            "adresse": "1234 boul. Sud",
            "codePostal": "H2M 3Y6",
            "ville": "	Montréal",
            "province": "QC",
            "tel": "(514)123-1234"
        },
        {
            "codeEtab": "2",
            "nom": "Hôpital Nord",
            "adresse": "7562 rue du Souvenir",
            "codePostal": "J4R 2Z5",
            "ville": "	Nordville",
            "province": "QC",
            "tel": "(450)222-3333"
        },
        {
            "codeEtab": "3",
            "nom": "Hôpital Centre",
            "adresse": "4637 boul. de l'Église",
            "codePostal": "H3J 4K8",
            "ville": " Montréal",
            "province": "QC",
            "tel": "(514)123-5678"
        },
        {
            "codeEtab": "4",
            "nom": "Centre hospitalier Est",
            "adresse": "12 rue Bernard",
            "codePostal": "J8R 3K5",
            "ville": "	Repentigey",
            "province": "QC",
            "tel": "(450)589-2345"
        },
        {
            "codeEtab": "5",
            "nom": "Hôpital du salut",
            "adresse": "11 rue de la Rédemption	",
            "codePostal": "J8H 2D4",
            "ville": "St-Basile",
            "province": "QC",
            "tel": "(450)345-6789"
        },
        {
            "codeEtab": "6",
            "nom": "Dernier recours",
            "adresse": "999 rue St-Pierre",
            "codePostal": "J7B 3J5",
            "ville": "Longueuil",
            "province": "QC",
            "tel": "(450)555-6741"
        }
    ];

var tablePatient = patients = [
        {
            "dossier": "1",
            "nom": "Léger",
            "prenom": "Émile",
            "naissance": "1936-03-17",
            "sexe": "M"
        },
        {
            "dossier": "2",
            "nom": "Bernard",
            "prenom": "Marie",
            "naissance": "1965-03-17",
            "sexe": "F"
        },
        {
            "dossier": "3",
            "nom": "Ctartrarel",
            "prenom": "Guy",
            "naissance": "1979-03-17",
            "sexe": "M"
        },
        {
            "dossier": "4",
            "nom": "Côté",
            "prenom": "André",
            "naissance": "1955-03-17",
            "sexe": "M"
        },
        {
            "dossier": "5",
            "nom": "Lavoie",
            "prenom": "Carde",
            "naissance": "1976-03-17",
            "sexe": "F"
        },
        {
            "dossier": "6",
            "nom": "Martin",
            "prenom": "Diane",
            "naissance": "1982-03-17",
            "sexe": "F"
        },
        {
            "dossier": "7",
            "nom": "Lacroix",
            "prenom": "Pauline",
            "naissance": "2000-03-17",
            "sexe": "F"
        },
        {
            "dossier":"8",
            "nom": "St-Jean",
            "prenom": "Arthur",
            "naissance": "1999-03-17",
            "sexe": "M"
        },
        {
            "dossier": "9",
            "nom": "Bechard",
            "prenom": "Marc",
            "naissance": "1986-03-17",
            "sexe": "M"
        },
        {
            "dossier": "10",
            "nom": "Chartrand",
            "prenom": "Maria",
            "naissance": "1926-03-17",
            "sexe": "M"
        }
    ];

var tableHospit = [
        {   
            "codeHop": "1",
            "codeEtab": "2",
            "dossier": "5",
            "date_admission": "2014-08-02",
            "date_sortie": "2014-08-11",
            "specialite": "ORL(Oto-rhino-laryngologie)"
        },
        {
            "codeHop": "2",
            "codeEtab": "1",
            "dossier": "10",
            "date_admission": "2012-12-02",
            "date_sortie": "2012-12-02",
            "specialite": "Chirurgie"
        },
        {
            "codeHop": "3",
            "codeEtab": "5",
            "dossier": "8",
            "date_admission": "2003-03-03",
            "date_sortie": "2005-03-05",
            "specialite": "Médecine"
        },
        {
            "codeHop": "4",
            "codeEtab": "4",
            "dossier": "1",
            "date_admission": "2011-11-17",
            "date_sortie": "2012-11-17",
            "specialite": "Orthopédie"
        },
        {
            "codeHop": "5",
            "codeEtab": "2",
            "dossier": "3",
            "date_admission": "2012-04-05",
            "date_sortie": "2015-05-05",
            "specialite": "Médecine"
        },
        {
            "codeHop": "6",
            "codeEtab": "6",
            "dossier": "7",
            "date_admission": "2014-02-10",
            "date_sortie": "2014-03-10",
            "specialite": "Chirurgie"
        },
        {
            "codeHop": "7",
            "codeEtab": "1",
            "dossier": "8",
            "date_admission": "2001-02-01",
            "date_sortie": "2001-02-01",
            "specialite": "ORL(Oto-rhino-laryngologie)"
        },
        {
            "codeHop": "8",
            "codeEtab": "6",
            "dossier": "3",
            "date_admission": "2003-04-05",
            "date_sortie": "2003-04-05",
            "specialite": "Orthopédie"
        },
        {
            "codeHop": "9",
            "codeEtab": "3",
            "dossier": "3",
            "date_admission": "2012-04-05",
            "date_sortie": "2015-05-05",
            "specialite": "Médecine"
        },
        {
            "codeHop": "10",
            "codeEtab": "5",
            "dossier": "5",
            "date_admission": "2014-02-10",
            "date_sortie": "2014-03-10",
            "specialite": "Ophtalmologie"
        },
        {
            "codeHop": "11",
            "codeEtab": "3",
            "dossier": "10",
            "date_admission": "2001-02-01",
            "date_sortie": "2001-02-01",
            "specialite": "Chirurgie"
        },
        {
            "codeHop": "12",
            "codeEtab": "6",
            "dossier": "2",
            "date_admission": "2003-04-05",
            "date_sortie": "2003-04-05",
            "specialite": "Ophtalmologie"
        },
                {
            "codeHop": "12",
            "codeEtab": "4",
            "dossier": "4",
            "date_admission": "2012-04-05",
            "date_sortie": "2015-05-05",
            "specialite": "Médecine"
        },
        {
            "codeHop": "13",
            "codeEtab": "3",
            "dossier": "2",
            "date_admission": "2014-02-10",
            "date_sortie": "2014-03-10",
            "specialite": "Ophtalmologie"
        },
        {
            "codeHop": "14",
            "codeEtab": "2",
            "dossier": "6",
            "date_admission": "2001-02-01",
            "date_sortie": "2001-02-01",
            "specialite": "Gynécologie"
        },
        {
            "codeHop": "15",
            "codeEtab": "1",
            "dossier": "9",
            "date_admission": "2003-04-05",
            "date_sortie": "2003-04-05",
            "specialite": "Orthopédie"
        }
    ]