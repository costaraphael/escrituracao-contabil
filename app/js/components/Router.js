import React from 'react'
import page from 'page'

export default class Router extends React.Component {
  constructor(props) {
    super(props)

    this.state = { component: <div />}
  }

  componentDidMount() {
    const self = this

    this.props.routes.forEach(route => {

      let [url, Component] = route

      page(url, ctx => {
        self.setState({
          component: <Component
                       router={self}
                       params={ctx.params}
                       querystring={ctx.querystring}
                     />
        })
      })

    })

    page.start()

    page('/')
  }

  render() {
    return this.state.component
  }

  navigate(url) {
    return () => page(url)
  }
}