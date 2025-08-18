export interface Env {
  STATE: DurableObjectNamespace
  BOT_URL?: string
  AUTH_TOKEN?: string
}

export class StateDO {
  state: DurableObjectState
  last: number
  constructor(state: DurableObjectState, env: Env) {
    this.state = state
    this.last = Date.now()
  }
  async fetch(request: Request) {
    const url = new URL(request.url)
    if (url.pathname === '/last') {
      return new Response(JSON.stringify({ last: this.last }), { headers: { 'content-type': 'application/json' }})
    }
    if (url.pathname === '/ping') {
      this.last = Date.now()
      return new Response('ok')
    }
    return new Response('not found', { status: 404 })
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url)
    if (url.pathname === '/trade') {
      const stateId = env.STATE.idFromName('global')
      const stub = env.STATE.get(stateId)
      await stub.fetch('https://do/ping')

      const botUrl = env.BOT_URL
      if (!botUrl) return new Response('BOT_URL not set', { status: 500 })
      const res = await fetch(botUrl + '/trade/ping', {
        method: 'POST',
        headers: env.AUTH_TOKEN ? { Authorization: 'Bearer ' + env.AUTH_TOKEN } : undefined,
      })
      return new Response(await res.text(), { status: res.status, headers: { 'content-type': 'application/json' } })
    }

    if (url.pathname === '/state') {
      const stateId = env.STATE.idFromName('global')
      const stub = env.STATE.get(stateId)
      const r = await stub.fetch('https://do/last')
      return new Response(await r.text(), { headers: { 'content-type': 'application/json' }})
    }

    return new Response('ok')
  }
}

