import { createReducer } from './utilities';

describe('Redux Utilities', () => {
  describe('createReducer', () => {
    describe('when I run the reducer', () => {
      it('should update the state correctly', () => {
        const initialState = { a: 1 };

        const fn = jest.fn((state, payload) => ({
          ...payload,
        }));

        const atoms = {
          SAY_HI: fn,
        };

        const reducer = createReducer({
          initialState,
          atoms,
        });

        const action = { type: 'SAY_HI', payload: { a: 2 } };

        const received = reducer(initialState, action);
        const expected = { a: 2 };

        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenCalledWith(initialState, expected);
        expect(received).toMatchObject(expected);
      });

      it('should NOT update the state when the action is NOT recognised', () => {
        const initialState = { a: 1 };

        const fn = jest.fn((state, payload) => ({
          ...payload,
        }));

        const atoms = {
          SAY_HI: fn,
        };

        const reducer = createReducer({
          initialState,
          atoms,
        });

        const action = { type: 'GOODBYE', payload: { a: 2 } };
        const received = reducer(initialState, action);
        const expected = { a: 1 };

        expect(received).toMatchObject(expected);
      });
    });
  });
});
