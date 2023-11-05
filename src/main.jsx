import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ConverterProvider } from './providers/ConverterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConverterProvider>
      <App />
    </ConverterProvider>
  </React.StrictMode>,
)
