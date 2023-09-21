// const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "start.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "second.txt"),
      "How you doing ?'"
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "second.txt"),
      " \n \n Doing Great"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "second.txt"),
      path.join(__dirname, "files", "info2.txt")
    );

    await fsPromises.unlink(path.join(__dirname, "files", "info2.txt"));
  } catch (err) {
    console.log(err);
  }
};
fileOps();

// fs.readFile(
//   path.join(__dirname, "files", "start.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// fs.writeFile(
//   path.join(__dirname, "files", "second.txt"),
//   "How you doin'",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Completed");
// fs.appendFile(
//   path.join(__dirname, "files", "second.txt"),
//   " \n \n Doing Great",
//   (err) => {
//     if (err) throw err;
//     console.log("Update Completed");
//         fs.rename(
//           path.join(__dirname, "files", "second.txt"),
//           path.join(__dirname, "files", "info.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Completed");
//           }
//         );
//       }
//     );
//   }
// );

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
