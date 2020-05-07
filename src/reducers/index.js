import { combineReducers } from 'redux'
export events from './events'
import operationLogs from './operationLogs'
export default combineReducers({ events })

export default combineReducers({
 events,
operationLogs
})
