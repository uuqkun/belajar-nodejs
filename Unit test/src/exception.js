export class myException extends Error {}


export function callMe(name) { 
    if (name === "Uqie") {
        throw new myException("Error");
    } else {
        return "OK";
    }
}