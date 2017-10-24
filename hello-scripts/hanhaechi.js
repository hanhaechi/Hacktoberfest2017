
// LANGUAGE: JS/Es6
// AUTHOR: Safeer Hayat
// GITHUB: https://github.com/saf94

// A simple arrow function example with template string to show a Hello World
HelloWorld = name => {
  return console.log(`
            ------------
            Labas, pasauli!Labas ir tau, ${name}. Programuokim kartu!
            ------------
          `);
};

HelloWorld("Han Haechi");