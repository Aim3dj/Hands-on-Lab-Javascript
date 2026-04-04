let userRole = "Employee";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;


if (userRole === "Employee") {
    accessLevel = "Full access granted to Dietary Services";
} else if (userRole === "Enrolled Member") {
    accessLevel = "Limited access granted to Dietary Services and one-on-one interaction with a dietician";
} else if (userRole === "Subscriber") {
    accessLevel = "Limited access granted to Dietary Services on";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

if (isLoggedIn) {
    if (userRole === "Employee") {
        userMessage = "Welcome, Employee!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

switch (userType) {
    case "admin":
        userCategory = "Employee";
        break;
    case "manager":
        userCategory = "Enrolled Member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Non-Subscriber";
}

console.log("User Category:", userCategory);

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);
