import React from 'react'
import AbstractDialog from './AbstractDialog.js'
import FlatButton from 'material-ui/FlatButton'

export default class AbstractFormDialog extends AbstractDialog {
  constructor(props) {
    super(props)

    if (typeof this.save != "function") {
      throw new TypeError("Must implement save")
    }

    this.state.model = {}
  }

  updateForm(data, fields) {
    let form = this.refs.form

    fields.forEach(field => {
      form.elements[field].value = data[field]
    })
  }

  extractForm(fields) {
    let form = this.refs.form

    return fields.reduce((acc, field) => {
      acc[field] = form.elements[field].value
      return acc
    }, {})
  }

  renderInputs() {
    return this.inputs().map((input, index) => <div key={index}>{input}</div>)
  }

  dialogContent() {
    return (
      <div>
        <form ref={"form"}>
          {this.renderInputs()}
        </form>
      </div>
    )
  }

  dialogActions() {
    return [
      <FlatButton
        label="Cancelar"
        secondary={true}
        onClick={() => this.dismiss()}
      />,
      <FlatButton
        label="Salvar"
        primary={true}
        onClick={() => this.save()}
      />
    ]
  }
}