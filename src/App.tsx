import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-center mb-8">DaisyUI Test Page</h1>

        {/* Button Test */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="card-title mb-4">Buttons</h2>
          <div className="flex gap-2 flex-wrap">
            <button className="btn">Default</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
          </div>
        </div>

        {/* Counter Test */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="card-title mb-4">Counter</h2>
          <div className="flex items-center gap-4">
            <button className="btn btn-circle btn-primary" onClick={() => setCount(count - 1)}>-</button>
            <span className="text-2xl font-bold">{count}</span>
            <button className="btn btn-circle btn-primary" onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>

        {/* Alert Test */}
        <div className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>DaisyUI is working! If you see styled components, everything is configured correctly.</span>
        </div>

        {/* Badge Test */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="card-title mb-4">Badges</h2>
          <div className="flex gap-2 flex-wrap">
            <div className="badge">default</div>
            <div className="badge badge-primary">primary</div>
            <div className="badge badge-secondary">secondary</div>
            <div className="badge badge-accent">accent</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
