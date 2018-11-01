# Basket

Basket lets you add food items to a list. 

## Install
Download the repo and cd into it:
```
git clone https://github.com/dvprz/Basket && cd Basket
```

Install dependencies:
```
npm install
```

Fire up a localhost by running:
```
npm start
```

## Functionality

* Can add a food item and its quantity to the list
* Food items will persist to your browsers local storage

Once the food item appears on the list you can interact with it in two ways:

* If you click the red x, the item is removed from the list and from local storage
* If you click the blue checkmark, the item is removed from the list and from local storage but it is stored in a 'purchased' array in local storage

After you have completed a couple of these actions with Basket refresh your browser. 

If you had items active on your list they will still be there. If you had 'purchased' any items on your list, now they'll appear below the form in button form. If you click on these buttons, the form's input value will be filled with the item.