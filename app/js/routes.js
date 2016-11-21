import Empresas from './components/empresas/Empresas.js'
import Lancamentos from './components/lancamentos/Lancamentos.js'

module.exports = [
  ['/', Empresas],
  ['/lancamentos/:empresa', Lancamentos]
]