import type { Reducer } from "react";

export type ActionReducerMap<S, A> = A extends { type: infer Types }
  ? Types extends string // ? Record<Types, (state: S, action: A) => S>
    ? { [P in Types]: (state: S, action: A) => S }
    : never
  : never;

export function createReducer<S, A extends { type: string }>(
  map: ActionReducerMap<S, A>,
): Reducer<S, A> {
  const reducer: Reducer<S, A> = (currentState, action) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (action.type == null)
      throw new TypeError(
        `Expected an action with a type, got "${JSON.stringify(action)}"`,
      );

    const actionReducer = map[action.type];

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (actionReducer == null) {
      throw new Error(`Action type "${action.type}" doesn't exist.`);
    }

    const nextState = actionReducer(currentState, action);
    return nextState;
  };

  return reducer;
}
