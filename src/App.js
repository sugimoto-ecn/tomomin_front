import React from 'react'
import Router from './Router'
import Button from '@material-ui/core/Button';

const App = () => {
  return (
  <div>

    <Button variant="contained" color="primary" float="right">
      ログイン
    </Button>
    <Router/>

  </div>
  )
}

export default App
