import AbstractComponent from '../AbstractComponent.js'

export default class Lancamentos extends AbstractComponent {
  constructor(props) {
    super(props)

    this.db.empresas.findOne({_id: props.params.empresa}, (err, empresa) => {
      this.setState({empresa: empresa})
    })

    this.state = {empresa: {}}
  }

  render() {
    return (
      <div>{this.state.empresa.nome}</div>
    )
  }
}