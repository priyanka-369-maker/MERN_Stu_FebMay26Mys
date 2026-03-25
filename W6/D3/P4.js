// Reading & writing files asynchronously with fs/Promises 
const fs = require("fs/promises");
const path = require("path");

async function runPromiseBasedFileFlow() {
    const filepath = path.join(__dirname, "Promises-note.txt");

    try {
        await fs.appendFile(
            filepath,
            "written using fs/promises. This works with async/await"
        );
        console.log("file written using fs/promises");

        const content = await fs.readFile(filepath, "utf-8");
        console.log(content);

    } catch (error) {
        console.log("Promises-based fs error:", error.message);
    }
}

runPromiseBasedFileFlow();