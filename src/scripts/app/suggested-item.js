import { create } from 'create-elem'

export const CLASSES = {
  LI: 'suggested__item',
  BUTTON: 'suggested__button'
}

export const ACTIONS = {
  ADD: 'add'
}

export function makeSuggestedItem(item) {
  const li = create(`li(class="${CLASSES.LI}")`)
  const button = create(`button(type="button" class="${CLASSES.BUTTON}" 
    data-action="${ACTIONS.ADD}" data-item="${item}") ${item}`)

  li.appendChild(button)

  return li
}