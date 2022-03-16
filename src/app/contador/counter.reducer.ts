import { createReducer, on, Action } from '@ngrx/store';
import { decrement, increment, multiply, reset, divide } from './contador.actions';

export const initialState:number = 0;

const _counterReducer = createReducer<number,Action>(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(multiply, (state) => state * 2),
    on(divide, (state) => state / 2),
    on(reset, (state) => 0)
)

export const counterReducer = (state: any, action:Action) => {
    return _counterReducer(state, action);
}