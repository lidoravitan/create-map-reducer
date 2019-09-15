export interface Action<T = any> {
    type: T;
}

interface ExtendedAction extends Action {
    [props: string]: any;
}

export declare type Reducer<S, A> = (state: S, action: A) => S;
export declare type Handlers<S, A extends Action = ExtendedAction> = {
    [K in A['type']]: Reducer<S, A extends Action<K> ? A : never>;
};

export declare function createReducer<S, A extends Action = ExtendedAction>(
    initialState: S,
    handlers: Handlers<S, A>,
): (state: S | undefined, action: A) => any;