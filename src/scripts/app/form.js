import cuid from '../../../node_modules/cuid/dist/cuid'

export function form(app, events) {
  const el = app.querySelector('.form')
  const itemInput = el.querySelector('[name=item]')
  const qtyInput = el.querySelector('[name=qty]')

  events.on('add-item-to-input', (item) => itemInput.value = item)

  el.addEventListener('submit', (event) => {
    event.preventDefault()
    const item = itemInput.value.trim()
    const qty = qtyInput.value

    if (item === '') return false

    events.emit('add-to-list', {
      id: cuid(),
      item,
      quantity: qty
    })

    itemInput.value = ''

    if (typeof qty !== '1') {
      qtyInput.value = '1'
    }

    return
  })
}