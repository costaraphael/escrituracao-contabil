import ReactDOM from 'react-dom'
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Router from './components/Router.js'
import routes from './routes.js'

injectTapEventPlugin()
window.React = React

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="Escrituração contábil" showMenuIconButton={false} zDepth={2} />
      <div style={{padding: "15px"}}>
        <Router routes={routes} />
      </div>
    </div>
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('content')
)
