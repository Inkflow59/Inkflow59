// Language : TypeScript
const name :string = "Tom";
const pseudo :string = "Inkflow";
var age :number = 20;

function languagesMastered() :string[] {
    var masteredTechnos :string[] = [
        "Clickteam Fusion",
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "PHP",
        "MySQL",
        "SQLite",
        "Java",
        "Python"
    ];
    return masteredTechnos;
}

var hosTeam :boolean = true
function isOrganizationPresident(hosTeam :boolean) :boolean {
    if (hosTeam==true) {
        return true;
    }   else {
        return false;
    }
}

function currentStatus() :string[] {
    var formations :any[] = [
        ["2023 - 2025",
        "BTS SIO (SLAM)",
        "Gaston Berger"]
    ];

    var workplace :any[] = [
        "Student"
    ];

    if(workplace[0]=="Student") {
        return formations;
    }   else {
        return workplace;
    }
}

function currentProjects() :any[] {
    var projects :any[] = [
        "CreaSQL",
        "Mailforce",
        "PortInkFolio",
        "RolePlay Game: Character Creator",
        "HoS Website",
        "Heroes of Songs : J.V",
        "Mysterious Bot: Reinitialized",
        "Relics of Sokal: The Divine Call"
    ];
    return projects;
}

languagesMastered();
isOrganizationPresident(hosTeam);
currentStatus();
currentProjects();
