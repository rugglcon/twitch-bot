import { Client } from 'tmi.js'

export interface Commands {
  [key: string]: () => void
}

function executeCommand (client: Client, target: string, command: string): void {
  const commands: Commands = {
    d20: () => {
      client.say(target, `You rolled a ${20}.`)
    }
  }

  if (Object.prototype.hasOwnProperty.call(commands, command)) {
    commands[command]()
    console.log(`* Executed !${command} command`)
  } else {
    console.log(`* Unknown command !${command}`)
  }
}

export default executeCommand
