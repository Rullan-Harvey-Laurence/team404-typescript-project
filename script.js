"use strict";
function initializeProject() {
    let welcomeMessage = "Team 404 TypeScript Project Initialized.";
    console.log(welcomeMessage);
}
initializeProject();
var TeamMember;
(function (TeamMember) {
    TeamMember["Matthew"] = "Matthew";
    TeamMember["Chloe"] = "Chloe";
    TeamMember["Harvey"] = "Harvey";
    TeamMember["Renz"] = "Renz";
    TeamMember["Guest"] = "Guest";
})(TeamMember || (TeamMember = {}));
// --- OBJECTS ---
// Chloe
// Harvey
// Matthew
const matthewTicket = {
    id: 1,
    title: "Set up CI pipeline",
    owner: TeamMember.Matthew,
    assignee: TeamMember.Renz,
    completed: false,
    print() {
        console.log("Ticket");
        console.log("  id:        " + this.id);
        console.log("  title:     " + this.title);
        console.log("  owner:     " + this.owner);
        console.log("  assignee:  " + this.assignee);
        console.log("  completed: " + this.completed);
    },
};
// Renz
// --- PRINT METHOD INVOCATIONS ---
// Chloe
// Harvey
// Matthew
matthewTicket.print();
// Renz
