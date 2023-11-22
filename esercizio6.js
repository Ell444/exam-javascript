/*Esercizio 6 - Clonazione di oggetti*/

const devTeam = {
    lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"]
    },
    testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] }
    ],
    projectName: "WebApp"
};

/*Gli oggetti presenti nell'espressione sono 8. DevTeam(1), Lead(2), Skills(3),
Testers(4), con al suo interno due oggetti persona(5,6) e le loro skills(7,8)*/

const teamLead = devTeam.lead;
teamLead.skills.push('GraphQL');

const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = 'MobileApp';

const createTester = (name) =>{
    const tester = {name};
    tester.skill = [];
    const randomSkills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django", "PostgreSQL"];
    for (let i=0; i < 3; i++){
        const randomSkill = Math.floor(Math.random() * randomSkills.length);
        tester.skill.push(randomSkills[randomSkill])
    }
    return tester;
};

const newTester = createTester('Selene');
devTeamCopy.testers.push(newTester);

console.log(devTeam, devTeamCopy);

/*Essendo che ho fatto una deepcopy del primo oggetto, ho automaticamente creato 8 nuovi oggetti. Con la funzione ho poi 
aggiunto un tester, che è un altro oggetto con le sue skills, che è un altro oggetto ancora. Ho quindi creato 10 nuovi oggetti.*/ 