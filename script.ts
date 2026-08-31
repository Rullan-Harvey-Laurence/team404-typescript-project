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

// Renz

// --- PRINT METHOD INVOCATIONS ---

// Chloe

// Harvey

// Matthew

// Renz
