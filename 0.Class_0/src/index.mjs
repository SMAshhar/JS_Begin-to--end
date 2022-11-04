import PromptSync from "prompt-sync"

let name = "Asghar";
console.log(name)

const prompt = PromptSync()


let name1 = prompt("Enter your lovely name: ")
console.log(`Hello and welcome, our dearest ${name1}`)