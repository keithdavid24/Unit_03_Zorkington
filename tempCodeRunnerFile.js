 if (command === 'enter' && currentRoom.exits.includes(argument)) {
        currentRoom = roomState[argument]
        return currentRoom.description
    } else if (command === 'pickup' && currentRoom.items.includes(argument)) {
        currentRoom.items.splice(currentRoom.items.indexOf(argument), 1)
        player.inventory.push(argument)
        return `You picked up the ${argument}.`
    } else if (command === 'drop') {
        if (player.inventory.includes(argument)) {
            const currentRoom = roomState[argument]
            player.drop(argument)
            currentRoom.dropItem(argument)
            return 'You dropped the ${argument}';
        } else {
            return `You don't have ${argument} in your inventory.`
        }