import AbstractComponent from '../AbstractComponent.js'
import {List, ListItem} from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import EditIcon from 'material-ui/svg-icons/image/edit'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'
import EmpresaDialog from './EmpresaDialog.js'

export default class Empresas extends AbstractComponent {
  constructor(props) {
    super(props)

    this.state = {
      empresas: []
    }

    this.loadEmpresas()
  }

  loadEmpresas() {
    this.db.empresas.find({}, (err, docs) => {
      this.setState({empresas: docs})
    })
  }

  addEmpresa() {
    this.refs.empresaDialog.show()
  }

  editEmpresa(empresa) {
    this.refs.empresaDialog.show(empresa)
  }

  deleteEmpresa(empresa) {
    this.db.empresas.remove({ _id: empresa._id }, {}, () => this.loadEmpresas())
  }

  render() {
    return (
      <div>
        <RaisedButton label="Adicionar empresa" primary={true} onClick={() => this.addEmpresa()} />

        <List>
          {this.renderEmpresas()}
        </List>

        <EmpresaDialog ref={"empresaDialog"} onClose={() => this.loadEmpresas()}/>
      </div>
    )
  }

  renderEmpresas() {
    return this.state.empresas.map(e => {
      return (
        <ListItem
          key={e._id}
          primaryText={e.nome}
          secondaryText={e.cnpj}
          rightIconButton={this.renderContextMenu()}
        />
      )
    })
  }

  renderContextMenu() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        animated={false}
        children={[
          <MenuItem key="um" primaryText="Um" />,
          <MenuItem key="dois" primaryText="Dois" />,
          <MenuItem key="tres" primaryText="Três" />,
        ]}
      />
    )
  }
}
