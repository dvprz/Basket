import { loadStorage } from '../store/localStorage'
import { makeSuggestedItem, ACTIONS } from './suggested-item'
import { create } from 'create-elem'

export function suggested(app, events) {
  const el = app.querySelector('.suggested')
  const list = el.querySelector('.suggested__list')

  el.addEventListener('click', (event) => {
    const target = event.target

    if (target.dataset.action !== ACTIONS.ADD) {
      return false
    } else {
      events.emit('add-item-to-input', target.dataset.item)
      return
    }
  })

  events.on('app.load-data', () => {
    const state = loadStorage()

    if (state.purchased.length > 0) {
      const title = create('h2(class="suggested__title text-align-center") Past purchased items')
      el.insertBefore(title, el.firstChild)

      const frag = document.createDocumentFragment()
      state.purchased.forEach(item => {
        frag.appendChild(makeSuggestedItem(item))
      })
      list.appendChild(frag)
    }
  })
}