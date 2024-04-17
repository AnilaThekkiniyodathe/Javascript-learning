let userRole="Enrolled Member";
let accessLevel;
if (userRole === "Employee") {
    accessLevel = "Access granted to Dietary Services.";
} else if (userRole === "Enrolled Member") {
    accessLevel = "Access granted to Dietary Services and one-on-one interaction with a dietician.";
}
else if (userRole === "Subscriber") {
    accessLevel = "Limited access granted";
}
else {
    accessLevel = "You need to enroll or at least subscribe first to avail this facility.";
}
console.log("Access Level:", accessLevel);
