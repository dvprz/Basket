import { form } from './form'
import { list } from './list'
import { suggested } from './suggested'
import { EventEmitter } from 'events'
import { saveItem, removeItem, savePurchasedItem } from '../store/localStorage'

export function main() {
  const app = document.getElementById('app')
  const events = new EventEmitter()

  events.on('app.add-item-to-basket', (payload) => saveItem(payload))
  events.on('app.add-purchased-item-to-basket', (payload) => savePurchasedItem(payload))  
  events.on('app.remove-item-from-basket', (id) => removeItem(id))

  list(app, events)
  form(app, events)
  suggested(app, events)

  events.emit('app.load-data')
}