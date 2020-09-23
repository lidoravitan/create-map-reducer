# Create Map Reducer
A common utility to create high performance reducer, super lightweight without any dependencies. [Github](https://github.com/lidoravitan/create-map-reducer)

## Installation
```
npm install create-map-reducer or
yarn add create-map-reducer
```

## Usage

```ts
export enum ActionTypes {
  INCREMENT_BY = 'INCREMENT_BY',
  DECREMENT_BY = 'DECREMENT_BY',
  SET_COUNTER_NAME = 'SET_COUNTER_NAME',
}

export const incrementByAction = (value: number) =>
  <const>{
    type: ActionTypes.INCREMENT_BY,
    value,
  }

export const decrementByAction = (value: number) =>
  <const>{
    type: ActionTypes.DECREMENT_BY,
    value,
  }

export const setCounterNameAction = (title: string) =>
  <const>{
    type: ActionTypes.SET_COUNTER_NAME,
    title,
  }

export type Actions = ReturnType<
  | typeof setCounterNameAction
  | typeof incrementByAction
  | typeof decrementByAction
>

type Actions = Increment | Decrement
```

```ts
import { createReducer } from 'create-map-reducer'
import { Actions, ActionTypes } from './actions'

type CounterState = Readonly<{
  title: string
  value: number
}>

const initialState: CounterState = {
  title: 'my-counter',
  value: 0,
}

export const counterReducer = createReducer<CounterState, Actions>(
  initialState,
  {
    [ActionTypes.DECREMENT_BY]: (state, action) => ({
      ...state,
      value: action.value,
    }),
    [ActionTypes.INCREMENT_BY]: (state, action) => ({
      ...state,
      value: action.value,
    }),
    [ActionTypes.SET_COUNTER_NAME]: (state, action) => ({
      ...state,
      title: action.title,
    }),
  }
)
```

### License 
MIT