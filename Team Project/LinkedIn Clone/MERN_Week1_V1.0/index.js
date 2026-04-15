const readline = require("readline");
const chalk = require("chalk");

const {
    createUser,
    loginUser,
    getCurrentUser,
    getAllUsers
} = require("./user");

const {
    addSkill,
    addExperience,
    addEducation
} = require("./profile");

const {
    sendRequest,
    acceptRequest,
    requests
} = require("./connection");

const {
    createPost,
    posts,
    likePost
} = require("./posts");

const { getFeed } = require("./feed");

const emitter = require("./events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

emitter.emit("sessionStarted");

function menu() {
    console.log(chalk.yellow("\n--- MENU ---"));
    console.log("1.Create Profile");
    console.log("2.Login");
    console.log("3.View Profile");
    console.log("4.Edit Profile");
    console.log("5.View Other Profiles");
    console.log("6.Send Request");
    console.log("7.View Requests");
    console.log("8.View Connections");
    console.log("9.Create Post");
    console.log("10.View Feed");
    console.log("11.Like Post");
    console.log("12.Exit");

    rl.question("Choose: ", async (choice) => {

        const currentUser = getCurrentUser();

        switch (choice) {

            case "1":
                rl.question("Name: ", (name) => {
                    rl.question("Headline: ", (headline) => {
                        const u = createUser(name, headline);
                        emitter.emit("profileCreated", u);
                        menu();
                    });
                });
                break;

            case "2":
                console.log(getAllUsers());
                rl.question("ID: ", (id) => {
                    loginUser(Number(id));
                    menu();
                });
                break;

            case "3":
                console.log(currentUser);
                menu();
                break;

            case "4":
                rl.question("Skill: ", (s) => {
                    addSkill(currentUser, s);
                    menu();
                });
                break;

            case "5":
                console.log(getAllUsers());
                menu();
                break;

            case "6":
                rl.question("User ID: ", async (id) => {
                    const r = getAllUsers().find(u => u.id == id);
                    await sendRequest(currentUser, r);
                    menu();
                });
                break;

            case "7":
                console.log(requests);
                menu();
                break;

            case "8":
                console.log(currentUser.connections);
                menu();
                break;

            case "9":
                rl.question("Post: ", async (c) => {
                    await createPost(currentUser, c);
                    menu();
                });
                break;

            case "10":
                console.log(await getFeed(currentUser));
                menu();
                break;

            case "11":
                rl.question("Post ID: ", (id) => {
                    const p = posts.find(x => x.id == id);
                    likePost(currentUser.id, p);
                    menu();
                });
                break;

            case "12":
                rl.close();
                break;

            default:
                console.log("Invalid");
                menu();
        }
    });
}

menu();