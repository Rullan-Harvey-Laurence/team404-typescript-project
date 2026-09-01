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
const chloeTicket = {
    id: 3,
    title: "Design database schema",
    owner: TeamMember.Chloe,
    assignee: TeamMember.Harvey,
    completed: false,
    print() {
        console.log("Chloe Ticket: ", this);
    },
};
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
const renzTicket = {
    id: 2,
    title: "Implement authentication and authorization",
    owner: TeamMember.Renz,
    assignee: TeamMember.Matthew,
    completed: false,
    print() {
        console.log("Renz Ticket: ", this);
    },
};
// --- PRINT METHOD INVOCATIONS ---
// Chloe
chloeTicket.print();
// Harvey
harveyTicket.print();
// Matthew
matthewTicket.print();
// Renz
renzTicket.print();
