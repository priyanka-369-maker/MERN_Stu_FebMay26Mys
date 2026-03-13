const getRoute = function(role, isLoggedIn) {

    // Login check using if-else
    if (!isLoggedIn) {
        return "/login";
    }

    // Role routing using switch
    switch (role) {
        case "admin":
            return "/admin";

        case "student":
            return "/student";

        case "college":
            return "/college";

        case "proctor":
            return "/proctor";

        default:
            return "/denied";
    }
};
console.log(getRoute("admin", true));
console.log(getRoute("student", true));
console.log(getRoute("admin", false));
console.log(getRoute("guest", true));