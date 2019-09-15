export interface Action<T = any> {
  type: T
}
interface ExtAction extends Action {
  [extendedProps: string]: any
}
export declare type Reducer<S, A> = (state: S, action: A) => S
export declare type Handlers<S, A extends Action = ExtAction> = {
  [K in A['type']]: Reducer<S, A extends Action<K> ? A : never>
}

export declare function createReducer<S, A extends Action = ExtAction>(
  initialState: S,
  handlers: Handlers<S, A>
): (state: S | undefined, action: A) => any
