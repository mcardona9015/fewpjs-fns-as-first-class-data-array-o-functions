function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
    console.log(`Walk ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw frisbee to ${dogName} the ${dogBreed}`)
}

function walkHome(dogName, dogBreed) {
    console.log(`Walk home ${dogName} the ${dogBreed}`)
}

function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`)
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function excerciseDog(dogName, dogBreed) {
    let excercises = []
    for (let index = 0; index < routine.length; index++) {
        excercises.push(routine[index](dogName, dogBreed))
        
    }
    return excercises
}

