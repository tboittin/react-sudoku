import reducer from './reducer'

import * as actions from './actions'
import * as interfaces from './interfaces'

export type IReducer = ReturnType<typeof reducer>
export default reducer
