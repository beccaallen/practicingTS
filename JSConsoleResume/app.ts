
class Header {

    name: string;
    job: string;
    description: string;

    constructor(myName: string, myJob: string, myDescription: string ){
        this.name = myName.toUpperCase();
        this.job = myJob;
        this.description = myDescription
    }

    createHeader() {
        console.log(`Name: ${this.name}`);
        console.log(`Career: ${this.job}`);
        console.log(`Description: ${this.description}`);
    }
    
}
let mainHeader = new Header("Becca Allen", "Full Stack Developer", "I can code a lil")
mainHeader.createHeader()

let experience = [
    {
        companyName: "Anthropologie",
        jobTitle: "Sales Assoc",
        jobDescription: "Fold, relocate, checkout"

    }, {
        companyName: "Warby Parker",
        jobTitle: "Optical Manager",
        jobDescription: "Create phenomenal experiences"
    }, {
        companyName: "IB",
        jobTitle: "Learner",
        jobDescription: "Code the most"
    }
]
let madSkills = [
    {
        skills: "Reading",
        cool: false
    }, {
        skills: "Writing",
        cool: false
    }, {
        skills: "Arithmetic",
        cool: true
    },
    {
        skills: "Illustrating",
        cool: true
    }
];


console.log(" ");

console.log("My Interests");
console.log("* Books");
console.log("* TV");
console.log("* Movies");

console.log(" ");

console.log("My Previous Experience");

function displayPosition(companyName: string, jobTitle: string, jobDescription: string) {
    console.log("* " + companyName + ", " + jobTitle + ", " + jobDescription);
};

displayPosition(experience[0].companyName, experience[0].jobTitle, experience[0].jobDescription);
displayPosition(experience[1].companyName, experience[1].jobTitle, experience[1].jobDescription);
displayPosition(experience[2].companyName, experience[2].jobTitle, experience[1].jobDescription);

console.log(" ");

console.log("My Skills");

function displaySkill(skills:string, cool: boolean) {

    if (cool) {
        console.log("* BAM: " + skills)
    }  else {
        console.log("* " + skills);
    }

}

for (let i = 0; i < madSkills.length; i++) {
    displaySkill(madSkills[i].skills, madSkills[i].cool)
}
