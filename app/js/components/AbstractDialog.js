import AbstractComponent from './AbstractComponent.js'
import Dialog from 'material-ui/Dialog'

export default class AbstractDialog extends AbstractComponent {
  constructor(props) {
    super(props)

    if (typeof this.dialogActions != "function") {
      throw new TypeError("Must implement dialogActions")
    }

    if (typeof this.dialogContent != "function") {
      throw new TypeError("Must implement dialogActions")
    }

    this.state = {open: false}
  }

  close(params) {
    if (typeof this.props.onClose == "function")
      this.props.onClose(params)

    this.dismiss()
  }

  dismiss() {
    this.setState({open: false})
  }

  show() {
    this.setState({open: true})
  }

  render() {
    return (
      <Dialog
        title={this.dialogTitle()}
        open={this.state.open}
        modal={true}
        actions={this.dialogActions()}
      >
        {this.dialogContent()}
      </Dialog>
    )
  }
}