import React from 'react'
import page from 'page'
import db from '../db.js'

export default class AbstractComponent extends React.Component {
  constructor(props) {
    super(props)

    this.db = db
  }

  navigate(url) {
    return () => page(url)
  }
}
