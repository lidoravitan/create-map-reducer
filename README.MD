
# Create Map Reducer (TypeScript support:fire:)
A common utility to create high performance reducer, super lightweight without any dependencies. :rocket::fire: [Github](https://github.com/lidoravitan/create-map-reducer)
## Installation :floppy_disk:

    npm install create-map-reducer
    yarn add create-map-reducer

## Motivation :muscle:
**As mentioned in redux documentations:**

>  "since many people don't like switch statements, it's very common to
> use a function that creates a lookup table of action types to case
> functions. We'll use the createReducer function described in Reducing
> Boilerplate."

[reference](https://redux.js.org/recipes/structuringreducers/refactoringreducersexample#reducing-boilerplate)

## Benefits :gift:
* Reducing Boilerplate
* Leads developers for good practice
* Instead of declare createReducer utility function for each project and import from local folder (utility folder path).

## Usage :guitar: (TypeScript)
```js
import { createReducer, Action } from 'create-map-reducer'

type State = { counter: number }

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

class Increment implements Action {
  readonly type = INCREMENT
  constructor(public readonly increment: number) {}
}

class Decrement implements Action {
  readonly type = DECREMENT
  constructor(public readonly decrement: number) {}
}

type Actions = Increment | Decrement

export default createReducer<State, Actions>({ counter: 0 },
  {
    [INCREMENT]: (state, action) => ({ counter: state.counter + action.increment }),
    [DECREMENT]: (state, action) => ({ counter: state.counter + action.decrement })
  }
)
```

## Usage (vanila)
```js
import { createReducer } from 'create-map-reducer'
const initialState = // initial state 
const actionMaps = {
    ['ACTION_TYPE']: (prevState, action) => // return updated state
}
export default createReducer(initialState, actionMaps)
```
### License 
MIT