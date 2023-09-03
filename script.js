/*
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {
    title: 'ZORK',
    desc: 'Welcome to the world of MI:3 here are some quick rules & concepts. You are currently standing in front yard of a house. The objective is to find a note and make your way out of the house. Use the commands listed at the bottom of the screen to move and interact with the game. For example: you COMMANDS like "enter garden" to enter the garden ',
    author: 'Keith David',
    cohort: 'JUNEPT-2023',
    startingRoomDescription: 'What you see before you is a spy game that lets you go through the house and find a way out with information to a secret mission. Should you choose to accept it. You are currently standing in the yard in front of the house! ',
    playerCommands: [
        // replace these with your games commands as needed
        'enter', 'lookup', 'pickup', 'inspect'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference.
    // This shouldn't be more than 6-8 different commands.
}

// Your code here
// Here I create classes, methods and dictionary
class Room {
    constructor(name, description, items, exits) {
        this.name = name;
        this.description = description;
        this.items = items;
        this.exits = exits;

    }
    addItems(item) {
        this.items.push(item);
    }
    addExit(direction, destination) {
        this.availableExits[direction] = destination;
    }
    // dropItem(itemName) {
    //     this.items.push(itemName);
    // }
}
class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
class Player {
    constructor(name, inventory) {
        this.name = name;
        this.inventory = [inventory];
    }
    pickup(item) {
        this.inventory.push(item);
    }
    drop(item) {
        this.inventory.pop(item);
    }

}



// // Room object constructors
const yard = new Room('yard', 'You are in a small, dark yard. You see a entrance to the garden to the north.', [], ['garden'], {

});
const garden = new Room('garden', 'You are in a large, bright garden full of pretty flowers. Pick up a key to enter the house. You see a door to the south. Looks like a "kitchen".', ['key'], ['kitchen', 'yard'], {

});
const kitchen = new Room('kitchen', 'You are in a large, dark kitchen. You see doors to the "garden", "living room" and the "hallway". Pick up a knife to protect yourself!!', ['knife'], ['garden', 'livingroom', 'hallway'], {

});
const livingRoom = new Room('living room', 'You are in a large, bright living room. You see a door to the "hallway" and one back to the "kitchen". Pick up scotch if thristy!', ['scotch'], ['hallway', 'kitchen'], {

});
const office = new Room('office', 'You are in a large, dark office. You see a door back to the "hallway". You see a book.', ['book'], ['hallway'], {

});
const hallway = new Room('hallway', 'You are in a large, dark hallway. You see doors back to "kitchen" and the "office". But you also see a door towards the back of the house it looks like a secret door leading to the "basement". In the office you see and note that has information to your next mission!"Should you choose to accept it"', ['note'], ['basement', 'kitchen', 'office'], {

});
const basement = new Room('basement', 'You are in a large, dark basement. Looks like the basement has a secret tunnel that leads you back to the "yard". Pick up the bag in the basement to help you on your mission', ['bag'], ['yard'], {

});

// // // Set initial room
// let currentRoom = yard;

// // //Use state machine to create rooms so that you can move between them.
// let rooms = {
//     yard: {
//         goTo: { north: 'garden' },
//     },
//     garden: {
//         goTo: { south: 'yard' },
//     },
//     kitchen: {
//         goTo: { east: 'livingRoom', west: 'hallway', south: 'office' },
//     },
//     office: {
//         goTo: { west: 'kitchen' },
//     },
//     livingRoom: {
//         goTo: { east: 'kitchen', west: 'hallway' },
//     },
//     hallway: {
//         goTo: { north: 'livingRoom', south: 'hallway' },
//     },
//     basement: {
//         goTo: { south: 'basement' },
//     },
// };
// console.log(rooms);

let roomState = {
    'yard': yard,
    'garden': garden,
    'kitchen': kitchen,
    'office': office,
    'livingroom': livingRoom,
    'hallway': hallway,
    'basement': basement

}

// const playerInput = {
//     north: 'go north',
//     south: 'go south',
//     east: 'go east',
//     west: 'go west',
//     inspect: 'inspect',
//     look: 'look',
//     pickup: 'pickup',
//     drop: 'drop', 'leave': 'leave',
// }
// console.log(playerInput);

// const items = {
//     key: new Item('key', 'A small key'),
//     knife: new Item('knife', 'A small knife'),
//     scotch: new Item('potion', 'A small potion'),
//     book: new Item('book', 'A small book'),
//     note: new Item('note', 'A small note'),
// }

// Item constructor
const key = new Item('key', 'A small key', {

});
const knife = new Item('knife', 'A small knife', {

});
const scotch = new Item('potion', 'A small potion', {

});
const book = new Item('book', 'A small book', {

});
const note = new Item('note', 'A small note', {
});
const bag = new Item('bag', 'A small bag', {

})


// let playerInventory = [];

// // const playerInput = handlePlayerInput(playerInput);


// const player = {
//     inventory: [],
//     location: null,
// }

let itemLookup = {
    'key': key,
    'knife': knife,
    'scotch': scotch,
    'book': book,
    'note': note,
    'bag': bag
}
console.log(itemLookup);
// // let currentRoom = rooms.yard;

let currentRoom = yard;

export const domDisplay = (playerInput) => {
    // console.log(playerInput);
    // let splitInput = playerInput.split(' ')
    // // console.log(splitInput)
    // const [a, b] = splitInput
    // console.log(a)
    // console.log(b)
    // // console.log(rState[b])
    // console.log(currentRoom)
    // if (a === 'enter' && currentRoom.exits.includes(b)) {
    //     currentRoom = rState[b]
    //     return currentRoom.description
    // }

    //     /*
    // TODO: for students
    // - This function must return a string.
    // - This will be the information that is displayed within the browsers game interface above the users input field.

    // - This function name cannot be altered.
    // - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
    // - test this out with a console log.

    // What your player should be able to do (checklist):
    // - move between rooms
    // - view current room
    // - pickup moveable items
    // - there should be at least 2 items that cannot be moved.
    // - view player inventory

    // Stretch Goals:
    // - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
    // - create win/lose conditions.
    // - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

    // HINTS:
    // - consider the various methods that are available to use.
    // - arrays are a great way to hold "lists".
    // - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
    // - Review notes!
    // - Have them open as you build.
    // - break down each problem into small chunks
    // - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items...
    // */

    let splitInput = playerInput.split(' ')
    const [command, argument] = splitInput
    console.log(command)
    console.log(argument)

    console.log(currentRoom)

    if (command === 'enter' && currentRoom.exits.includes(argument)) { // Player will use enter command to enter to fullfill #03_4
        currentRoom = roomState[argument]
        return currentRoom.description
    } else if (command === 'pickup' && currentRoom.items.includes(argument)) { // Picking up item to fullfill ticket #3_03
        currentRoom.items.splice(currentRoom.items.indexOf(argument), 1)
        player.inventory.push(argument)
        return `You picked up the ${argument}.`
        // } else if (command === 'drop' && player.inventory.includes(argument)) { //Able to figure out how to drop item but not how to drop it in anoter location.
        //     currentRoom.items.push(argument)
        //     player.inventory.splice(player.inventory.indexOf(argument), 1)
        //     return `You dropped the ${argument}.`
        // }
    } else if (command === 'drop') {                        // For conor: what i tried to do to drop item in another location.
        if (player.inventory.includes(argument)) {
            const currentRoom = roomState[argument]
            player.drop(argument)
            currentRoom.dropItem(argument)
            return 'You dropped the ${argument}';
        } else {
            return `You don't have ${argument} in your inventory.`
        }
    }
    else if (command === 'lookup' && argument === 'inventory') { // unable to figure out how not to let the player remove an item from the inventory.
        if (player.inventory.length === 0) {
            return "You have no items in your inventory."
        } else {
            // const itemNames = player.inventory.map(item => itemLookup[item])
            // return `You have: ${itemNames.join(", ")}`
            const itemNames = player.inventory.join(" , ")
            return `You have: ${itemNames}`
        }

    } else { return `Invalid command: I dont know how to ${command}. Try something else` }

    // console.log(currentRoom)

    // if (playerInput === 'north') {
    //     currentRoom = rooms.garden;
    //     return currentRoom.description;
    // } else if (playerInput === 'south') {
    //     currentRoom = rooms.yard;
    //     return currentRoom.description;
    // } else if (playerInput === 'east') {
    //     currentRoom = rooms.kitchen;
    //     return currentRoom.description;
    // } else if (playerInput === 'west') {
    //     currentRoom = rooms.livingRoom;
    //     return currentRoom.description;
    // } else if (playerInput === 'inspect' || playerInput === 'look') {
    //     if (currentRoom.items.length === 0) {
    //         return "There are no items in this room.";
    //     } else {
    //         const itemNames = currentRoom.items.map(item => item.name);
    //         return `Items in this room: ${itemNames.join(", ")}`;
    //     }
    // } else if (playerInput === 'pickup') {
    //     if (currentRoom.items.length === 0) {
    //         return "There are no items to pick up in this room.";
    //     } else {

    //         const itemNames = currentRoom.items.map(item => item.name);
    //         return `Items in this room: ${itemNames.join(", ")}`;
    //     }

    // } else {
    //     // return invaild command message
    //     return `Invalid command: I dont know how to ${playerInput}. Try something else`
    //     // Your code here
    // }
}

const player = new Player();