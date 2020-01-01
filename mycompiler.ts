import * as fs from "fs";
import {compileOutput} from "./utils";

const inputFilename: string = process.argv[2];
const outputFilename: string = process.argv[3];

if (outputFilename && inputFilename) {
    const data: string = fs.readFileSync(inputFilename, {encoding: "utf8"});
    fs.writeFileSync(outputFilename, compileOutput(data), {encoding: "utf8"});
} else {
    console.log("Args:", process.argv);
}
