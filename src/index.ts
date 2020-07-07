const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age} old ${gender}.`;
}

console.log(sayHi("nico", 24, "male"));

export {};