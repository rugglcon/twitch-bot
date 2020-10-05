export type Command = {
  text?: string | string[]
  say?: string
  gif?: string
  sound?: string
}

export type Commands = {
  [key: string]: Command
}

export const commands: Commands = {
  donate: {
    text: 'https://streamlabs.com/advolkit/tip'
  },
  salt: {
    text: 'SALTY SALTY'
  },
  github: {
    text: 'https://github.com/patomation/'
  },
  discord: {
    text: 'https://discord.gg/ttbJuve'
  },
  freehosting: {
    text: 'https://app.netlify.com'
  },
  twitter: {
    text: 'https://twitter.com/advolkit'
  },
  youtube: {
    text: 'https://www.youtube.com/channel/UC3awU4-KQM65bgqjeKc2fCA'
  },
  instagram: {
    text: 'https://www.instagram.com/advolkit/'
  },
  theme: {
    text: 'SynthWave 84 | https://github.com/robb0wen/synthwave-vscode'
  },
  match3hell: {
    text: 'Match3hell dev: https://match3hell.com/ itch: https://advolkit.itch.io/match3hell?dev=true '
  },
  game: {
    text: 'The game is match3Hell: https://advolkit.itch.io/match3hell'
  },
  botsource: {
    text: 'See my insides: https://github.com/patomation/twitch-bot'
  },
  hype: {
    say: 'HYPE HYPE HYPE HYPE HYPE HYPE HYPE HYPE HYPE HYPE HYPE HYPE HYPE HYPE HYPE HYPE'
  },
  laugh: {
    say: ':e: :e: :e: :o: :o: :o: :a: :a: :a: :a:'
  },
  hacktober: {
    text: 'https://hacktoberfest.digitalocean.com'
  },
  bw: {
    text: 'Im on to you @vision_of_jarvis',
    say: 'Bot War. AAAAAAAAAAAAAAAAAAAAAAAAAAAAA!'
  },
  botwar: {
    text: 'this means war... bot war that is',
    say: 'activating laser turrets'
  },
  developers: {
    gif: 'steve-balmer-developers.gif',
    sound: 'steve-balmer-developers.mp3'
  },
  hack: {
    gif: 'typing-cat.gif',
    sound: 'access-granted.mp3'
  },
  cheers: {
    gif: 'cheers.gif',
    sound: 'cheers.mp3'
  },
  starfish: {
    gif: 'no-this-is-patrick.gif',
    sound: 'no-this-is-patrick.mp3'
  },
  purplestar: {
    gif: 'snoop.gif',
    sound: 'inception.mp3'
  },
  f: {
    gif: 'f.gif',
    sound: 'access-denied.mp3'
  },
  resucks: {
    gif: 'this-is-fine.gif',
    sound: 're-sucks.mp3'
  },
  our: {
    sound: 'USSR.mp3'
  },
  twitch: {
    sound: 'i-love-this-company.mp3'
  },
  leeroy: {
    sound: 'leeroy-jenkins.mp3'
  },
  nacho: {
    gif: 'nacho-man.gif',
    sound: 'nacho-man.mp3'
  }
}
