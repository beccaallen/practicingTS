"use strict";
var Header = /** @class */ (function () {
    function Header(myName, myJob, myDescription) {
        this.name = myName.toUpperCase();
        this.job = myJob;
        this.description = myDescription;
    }
    Header.prototype.createHeader = function () {
        console.log("Name: " + this.name);
        console.log("Career: " + this.job);
        console.log("Description: " + this.description);
    };
    return Header;
}());
var mainHeader = new Header("Becca Allen", "Full Stack Developer", "I can code a lil");
mainHeader.createHeader();
var experience = [
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
];
var madSkills = [
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
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + companyName + ", " + jobTitle + ", " + jobDescription);
}
;
displayPosition(experience[0].companyName, experience[0].jobTitle, experience[0].jobDescription);
displayPosition(experience[1].companyName, experience[1].jobTitle, experience[1].jobDescription);
displayPosition(experience[2].companyName, experience[2].jobTitle, experience[1].jobDescription);
console.log(" ");
console.log("My Skills");
function displaySkill(skills, cool) {
    if (cool) {
        console.log("* BAM: " + skills);
    }
    else {
        console.log("* " + skills);
    }
}
for (var i_1 = 0; i_1 < madSkills.length; i_1++) {
    displaySkill(madSkills[i_1].skills, madSkills[i_1].cool);
}
