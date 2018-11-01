import { create } from 'create-elem'

export const CLASSES = {
  LI: 'grocery__item',
  GRID: 'grid',
  GRID_COL_2: 'grid__column-2 flex-content-h-center',
  GRID_COL_4: 'grid__column-4 flex-content-h-center',
  GRID_COL_6: 'grid__column-6 flex',
  ITEM_QTY: 'grocery__item-quantity text-align-center',
  ITEM_NAME: 'grocery__item-title',
  ACTIONS: 'grocery__list-actions flex',
  BTN_REMOVE: 'grocery__list-button remove',
  BTN_PURCHASE: 'grocery__list-button purchase',
  TIMES_ICON: 'fas fa-times-circle',
  CHECK_ICON: 'fas fa-check-circle'
}

export const ACTIONS = {
  REMOVE: 'remove',
  PURCHASE: 'purchase'
}

export function makeGroceryItem(attributes) {
  const { id, item, quantity } = attributes

  const li = create(`li(class="${CLASSES.LI}" data-id="${id}" data-item="${item}")`)
  const grid = create(`div(class="${CLASSES.GRID}")`)
  const gridCol2 = create(`div(class="${CLASSES.GRID_COL_2}")`)
  const gridCol4 = create(`div(class="${CLASSES.GRID_COL_4}")`)
  const gridCol6 = create(`div(class="${CLASSES.GRID_COL_6}")`) 
  const itemQuantity = create(`p(class="${CLASSES.ITEM_QTY}") ${quantity}`)
  const itemName = create(`p(class="${CLASSES.ITEM_NAME}") ${item}`)
  const actions = create(`div(class="${CLASSES.ACTIONS}")`)
  const buttonRemove = create(`button(type="button" class="${CLASSES.BTN_REMOVE}" data-action="${ACTIONS.REMOVE}")`)
  const buttonPurchase = create(`button(type="button" class="${CLASSES.BTN_PURCHASE}" data-action="${ACTIONS.PURCHASE}")`)  
  const timesIcon = create(`i(class="${CLASSES.TIMES_ICON}" data-action="${ACTIONS.REMOVE}")`)
  const checkIcon = create(`i(class="${CLASSES.CHECK_ICON}" data-action="${ACTIONS.PURCHASE}")`)

  buttonRemove.appendChild(timesIcon)
  buttonPurchase.appendChild(checkIcon)
  actions.appendChild(buttonRemove)
  actions.appendChild(buttonPurchase) 
  gridCol6.appendChild(actions)
  gridCol4.appendChild(itemName)
  gridCol2.appendChild(itemQuantity)
  grid.appendChild(gridCol2)
  grid.appendChild(gridCol4) 
  grid.appendChild(gridCol6) 
  li.appendChild(grid)

  return li
}