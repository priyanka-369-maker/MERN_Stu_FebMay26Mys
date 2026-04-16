//Main file from where the project begins
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

// Start session
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

            // CREATE PROFILE
            case "1":
                rl.question("Name: ", (name) => {
                    rl.question("Headline: ", (headline) => {
                        const u = createUser(name, headline);
                        emitter.emit("profileCreated", u);
                        menu();
                    });
                });
                break;

            // LOGIN
            case "2":
                console.log(getAllUsers());
                rl.question("ID: ", (id) => {
                    loginUser(Number(id));
                    menu();
                });
                break;

            // VIEW PROFILE
            case "3":
                if (!currentUser) {
                    console.log(chalk.red("Please login first"));
                } else {
                    console.log(currentUser);
                }
                menu();
                break;

            // EDIT PROFILE (Add Skill)
            case "4":
                if (!currentUser) {
                    console.log(chalk.red("Please login first"));
                    return menu();
                }
                rl.question("Skill: ", (s) => {
                    addSkill(currentUser, s);
                    console.log(chalk.green("Skill added"));
                    menu();
                });
                break;

            // VIEW OTHER PROFILES
            case "5":
                const allUsers = getAllUsers();

                const otherUsers = allUsers.filter(
                    u => u.id !== currentUser?.id
                );

                if (otherUsers.length === 0) {
                    console.log(chalk.red("No other users found"));
                } else {
                    console.log(chalk.blue("\nAll Profiles:"));
                    otherUsers.forEach(u => {
                        console.log(
                            `ID: ${u.id} | Name: ${u.name} | Headline: ${u.headline}`
                        );
                    });
                }
                menu();
                break;

            // SEND REQUEST
            case "6":
                if (!currentUser) {
                    console.log("Please login first");
                    return menu();
                }
                rl.question("User ID: ", async (id) => {
                    const receiver = getAllUsers().find(u => u.id == id);
                    if (!receiver) {
                        console.log("User not found");
                    } else {
                        await sendRequest(currentUser, receiver);
                        console.log("Request sent");
                    }
                    menu();
                });
                break;

            // VIEW REQUESTS
            case "7":
                console.log(requests);
                menu();
                break;

            // VIEW CONNECTIONS
            case "8":
                if (!currentUser) {
                    console.log("Please login first");
                } else {
                    console.log(currentUser.connections);
                }
                menu();
                break;

            // CREATE POST
            case "9":
                if (!currentUser) {
                    console.log("Please login first");
                    return menu();
                }
                rl.question("Post: ", async (content) => {
                    await createPost(currentUser, content);
                    console.log("Post created");
                    menu();
                });
                break;

            // VIEW FEED
            case "10":
                if (!currentUser) {
                    console.log("Please login first");
                    return menu();
                }

                const feed = await getFeed(currentUser);

                if (feed.length === 0) {
                    console.log("No posts in feed");
                } else {
                    console.log(chalk.green("\n--- FEED ---"));
                    feed.forEach(p => {
                        console.log(`PostID: ${p.id} | User: ${p.userId}`);
                        console.log(`Content: ${p.content}`);
                        console.log(`Likes: ${p.likes.length}`);
                        console.log(`Time: ${p.createdAt}`);
                        console.log("----------------------");
                    });
                }
                menu();
                break;

            // LIKE POST
            case "11":
                if (!currentUser) {
                    console.log("Please login first");
                    return menu();
                }
                rl.question("Post ID: ", (id) => {
                    const p = posts.find(x => x.id == id);
                    if (!p) {
                        console.log("Post not found");
                    } else {
                        likePost(currentUser.id, p);
                        console.log("Post liked");
                    }
                    menu();
                });
                break;

            // EXIT
            case "12":
                console.log(chalk.yellow("Exiting..."));
                rl.close();
                break;

            default:
                console.log("Invalid choice");
                menu();
        }
    });
}

menu();