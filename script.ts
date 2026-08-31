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

// Harvey

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

// --- PRINT METHOD INVOCATIONS ---

// Chloe

// Harvey

// Matthew
matthewTicket.print();

// Renz
