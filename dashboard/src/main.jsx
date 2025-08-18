import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [backendUrl, setBackendUrl] = useState('')
  const [token, setToken] = useState('')
  const [connected, setConnected] = useState(false)
  const [log, setLog] = useState([])
  const wsRef = useRef(null)

  const append = (msg) => setLog((l) => [msg, ...l].slice(0, 200))

  const connect = () => {
    if (!backendUrl) return
    const ws = new WebSocket(backendUrl.replace(/^http/, 'ws') + '/ws')
    wsRef.current = ws
    ws.onopen = () => {
      setConnected(true)
      append('Connected')
    }
    ws.onmessage = (ev) => {
      append(ev.data)
    }
    ws.onclose = () => {
      setConnected(false)
      append('Disconnected')
    }
  }

  const send = (obj) => {
    if (!wsRef.current) return
    wsRef.current.send(JSON.stringify(obj))
  }

  const doAudit = async () => {
    try {
      const res = await fetch(backendUrl + '/audit/resources', {
        headers: token ? { Authorization: 'Bearer ' + token } : {},
      })
      const data = await res.json()
      append(JSON.stringify(data))
    } catch (e) {
      append('audit failed: ' + e.message)
    }
  }

  const doPingTrade = async () => {
    try {
      const res = await fetch(backendUrl + '/trade/ping', {
        method: 'POST',
        headers: token ? { Authorization: 'Bearer ' + token } : {},
      })
      const data = await res.json()
      append(JSON.stringify(data))
    } catch (e) {
      append('ping trade failed: ' + e.message)
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Free Cloud Bot</h1>
      <p>Browser-only control center. Enter your backend URL and optional token to manage the bot.</p>
      <div style={{ display: 'grid', gap: 8 }}>
        <input placeholder="Backend URL e.g. https://bot.example.com" value={backendUrl} onChange={(e) => setBackendUrl(e.target.value)} />
        <input placeholder="Auth token (optional)" value={token} onChange={(e) => setToken(e.target.value)} />
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={connect} disabled={connected || !backendUrl}>Connect WS</button>
          <button onClick={() => send({ cmd: 'ping' })} disabled={!connected}>Ping</button>
          <button onClick={() => send({ cmd: 'audit' })} disabled={!connected}>Audit (WS)</button>
          <button onClick={doAudit} disabled={!backendUrl}>Audit (HTTP)</button>
          <button onClick={doPingTrade} disabled={!backendUrl}>Trigger Trade</button>
        </div>
      </div>
      <h3>Log</h3>
      <pre style={{ background: '#111', color: '#0f0', padding: 12, minHeight: 200 }}>{log.join('\n')}</pre>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

