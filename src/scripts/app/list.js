import { makeGroceryItem } from './grocery-item'
import { loadStorage } from '../store/localStorage'
import getParents from 'dom-parents'

export function list(app, events) {
  const el = app.querySelector('.grocery__list')

  const ITEM = '.grocery__item'

  el.addEventListener('click', (event) => {
    const target = event.target

    switch (target.dataset.action) {
      case 'remove':
        let [ item ] = getParents(target, ITEM, true)
        el.removeChild(item)
        events.emit('app.remove-item-from-basket', item.dataset.id)
        break;
      case 'purchase':
        let [ item2 ] = getParents(target, ITEM, true)
        el.removeChild(item2)
        events.emit('app.remove-item-from-basket', item2.dataset.id)        
        events.emit('app.add-purchased-item-to-basket', item2.dataset.item)
        break;
      default: break;
    }

    return
  })

  events.on('add-to-list', (payload) => {
    const li = makeGroceryItem(payload)
    el.appendChild(li)

    events.emit('app.add-item-to-basket', payload)
  })

  events.on('app.load-data', () => {
    const state = loadStorage()

    if (state.list.length > 0) {
      const frag = document.createDocumentFragment()
      state.list.forEach(item => frag.appendChild(makeGroceryItem(item)))
      el.appendChild(frag)
    }
  })
}