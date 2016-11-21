import React from 'react'
import AbstractFormDialog from '../AbstractFormDialog.js'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import db from '../../db.js'

const fields = ["nome", "cnpj", "endereco", "administrador", "contador"];

export default class EmpresaDialog extends AbstractFormDialog {
  save() {
    let empresa = this.extractForm(fields)

    if (empresa.nome && empresa.cnpj) {
      if (this.state.editando)
        db.empresas.update({_id: this.state.editando}, empresa, () => this.close())
      else
        db.empresas.insert(empresa, () => this.close())
    }
  }

  show(empresa) {
    if (empresa) {
      this.setState({editando: empresa._id})
      setTimeout(() => this.updateForm(empresa, fields))
    } else {
      this.setState({editando: null})
    }

    super.show()
  }

  dialogTitle() {
    return (this.state.editando ? "Editar" : "Adicionar") + " empresa"
  }

  inputs() {
    let inputStyle = {
      width: '44%',
      marginLeft: '3%',
      marginRight: '3%',
      float: 'left'
    }

    return [
      <TextField
        floatingLabelText="Nome"
        floatingLabelFixed={true}
        style={inputStyle}
        name="nome" />,
      <TextField
        floatingLabelText="CNPJ"
        floatingLabelFixed={true}
        style={inputStyle}
        name="cnpj" />,
      <TextField
        floatingLabelText="Sócio administrador"
        floatingLabelFixed={true}
        style={inputStyle}
        name="administrador" />,
      <TextField
        floatingLabelText="Contador"
        floatingLabelFixed={true}
        style={inputStyle}
        name="contador" />,
      <TextField
        floatingLabelText="Endereço"
        floatingLabelFixed={true}
        style={Object.assign({}, inputStyle, {width: '94%'})}
        multiLine={true}
        rowsMax={2}
        rows={2}
        name="endereco" />
    ]
  }
}