function initializeProject(): void {
  let welcomeMessage = "Team 404 TypeScript Project Initialized.";
  console.log(welcomeMessage);
}

initializeProject();

enum TeamMember {
  Matthew = "Matthew",
  Chloe = "Chloe",
  Harvey = "Harvey",
  Renz = "Renz",
  Guest = "Guest",
}

type Ticket = {
  id: number;
  title: string;
  owner: TeamMember;
  assignee?: TeamMember;
  completed: boolean;
  print: () => void;
};

// --- OBJECTS ---

// Chloe
const chloeTicket: Ticket = {
  id: 3,
  title: "Design database schema",
  owner: TeamMember.Chloe,
  assignee: TeamMember.Harvey,
  completed: false,
  print(): void {
    console.log("Chloe Ticket: ", this);
  },
};

// Harvey
const harveyTicket: Ticket = {
  id: 4,
  title: "Develop frontend layout and styling",
  owner: TeamMember.Harvey,
  assignee: TeamMember.Chloe,
  completed: false,
  print(): void {
    console.log("Harvey Ticket: ", this);
  },
};

// Matthew
const matthewTicket: Ticket = {
  id: 1,
  title: "Set up CI pipeline",
  owner: TeamMember.Matthew,
  assignee: TeamMember.Renz,
  completed: false,
  print(): void {
    console.log("Ticket");
    console.log("  id:        " + this.id);
    console.log("  title:     " + this.title);
    console.log("  owner:     " + this.owner);
    console.log("  assignee:  " + this.assignee);
    console.log("  completed: " + this.completed);
  },
};

// Renz
const renzTicket: Ticket = {
  id: 2,
  title: "Implement authentication and authorization",
  owner: TeamMember.Renz,
  assignee: TeamMember.Matthew,
  completed: false,
  print(): void {
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