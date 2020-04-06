/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 */

const rl = require("readline");
const fs = require("fs");
const {
  findCarByPlate,
  findPlatesByColor,
  findSlotsByColor,
  getData,
  init,
  leave,
  park,
  status,
} = require("./parking");

const rli = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let s;

const prompt = () => rli.question("\x1b[34m>\x1b[0m ", promptInput);
const promptInput = (i) => {
  if (i === "exit") {
    console.log("Node Craft Exit");
    rli.close();
    process.exit(0);
  } else {
    const params = i.split(" ");
    runCommand(params);
    prompt();
  }
};

const runCommand = (params) => {
  let commandResult;

  switch (params[0]) {
    case "create_parking_lot":
      commandResult = init(parseInt(params[1]));
      break;

    case "status":
      if (params[1] && params[1] === "true") status(true);
      else status(false);
      break;

    case "park":
      if (getData().length > 0 && params && params.length > 1) {
        commandResult = park(params[1], params[2]);
      }
      break;

    case "leave":
      commandResult = leave(parseInt(params[1]));
      break;

    case "slot_number_for_registration_number":
      commandResult = findCarByPlate(params[1]);
      break;

    case "registration_numbers_for_cars_with_colour":
      commandResult = findPlatesByColor(params[1]);
      break;

    case "slot_numbers_for_cars_with_colour":
      commandResult = findSlotsByColor(params[1]);
      break;

    default:
      console.log("\x1b[31mPlease input\x1b[0m");
      console.log("");
      break;
  }

  if (commandResult) console.log(commandResult);
};

const greeting = "\x1b[36m" + "-Node Craft- \n" + "-Type exit for quit-";
("\x1b[0m\n");

if (process.argv.length < 3) {
  console.log(greeting);
  prompt();
} else {
  const filename = process.argv[2];
  if (!filename) {
    console.log("\x1b[31mYou must provide a filename.\x1b[0m");
    process.exit(1);
  }
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.log("\x1b[31mAn Erorr read the file.\x1b[0m");
      console.log(err);
    }

    if (data) {
      const lines = data.split(/\r?\n/);
      lines.forEach((l) => {
        const params = l.split(" ");
        runCommand(params);
      });
    }

    process.exit(1);
  });
}
