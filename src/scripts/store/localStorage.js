export function loadStorage() {
  return JSON.parse(localStorage.getItem('basket')) || {
    list: [],
    purchased: []
  }
}

export function saveItem(payload) {
  const state = loadStorage()
  const newState = { ...state, list : [ ...state.list, { ...payload } ]}

  localStorage.setItem('basket', JSON.stringify(newState))
}

export function savePurchasedItem(item) {
  const state = loadStorage()

  if (state.purchased.includes(item)) {
    return 
  }
  
  const newState = { ...state, purchased: [ ...state.purchased, item ]}

  localStorage.setItem('basket', JSON.stringify(newState))
}

export function removeItem(id) {
  const state = loadStorage()

  const newList = state.list.filter(item => item.id !== id)
  const newState = { ...state, list : [ ...newList ] }

  localStorage.setItem('basket', JSON.stringify(newState))
}