//Main file from where the project begins

const readline = require("readline");
const chalk = require("chalk");

const {
  createUser,
  loginUser,
  getCurrentUser,
  getAllUsers
} = require("./user");

const { addSkill, addExperience, addEducation } = require("./profile");

const {
  sendRequest,
  acceptRequest,
  rejectRequest,
  getRequests
} = require("./connections");

const { createPost, posts, likePost } = require("./posts");
const { getFeed } = require("./feed");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log(chalk.yellow("\n--- MENU ---"));
  console.log("1. Create Profile");
  console.log("2. Login");
  console.log("3. View My Profile");
  console.log("4. Edit Profile");
  console.log("5. View Other Profiles");
  console.log("6. Send Request");
  console.log("7. View Requests");
  console.log("8. View Connections");
  console.log("9. Create Post");
  console.log("10. View Feed");
  console.log("11. Like Post");
  console.log("12. Exit");

  rl.question("Choose: ", async (choice) => {
    const currentUser = getCurrentUser();

    switch (choice) {

      case "1":
        rl.question("Name: ", (n) => {
          rl.question("Headline: ", (h) => {
            createUser(n, h);
            menu();
          });
        });
        break;

      case "2":
        console.log(getAllUsers());
        rl.question("Enter ID: ", (id) => {
          loginUser(Number(id));
          menu();
        });
        break;

      case "3":
        console.log(currentUser || "Login first");
        menu();
        break;

      case "4":
        rl.question("1.Skill 2.Exp 3.Edu: ", (o) => {
          rl.question("Enter: ", (val) => {
            if (o === "1") addSkill(currentUser, val);
            if (o === "2") addExperience(currentUser, val);
            if (o === "3") addEducation(currentUser, val);
            menu();
          });
        });
        break;

      case "5":
        getAllUsers()
          .filter(u => u.id !== currentUser.id)
          .forEach(u => console.log(u));
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
        const req = getRequests(currentUser.id);
        req.forEach(r => console.log(`From: ${r.sender}`));

        rl.question("Accept ID or r<ID>: ", async (inp) => {
          if (inp.startsWith("r")) {
            await rejectRequest(currentUser, Number(inp.slice(1)));
          } else {
            await acceptRequest(currentUser, Number(inp));
          }
          menu();
        });
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
        const f = await getFeed(currentUser);
        f.forEach(p =>
          console.log(`${p.authorName}: ${p.content} | Likes:${p.likes.length}`)
        );
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
        menu();
    }
  });
}

menu();