import tmi, { Client } from 'tmi.js'

interface Options {
  identity: {
    username: string,
    password: string
  },
  channels: string[]
}

const opts: Options = {
  identity: {
    username: process.env.BOT_USERNAME as string,
    password: process.env.OAUTH_TOKEN as string
  },
  channels: [
    process.env.CHANNEL_NAME as string
  ]
}

const MyClient = tmi.client as any as { new (layerName: Options): Client; }

const myclient = new tmi.client(opts) as Client

export default myclient
