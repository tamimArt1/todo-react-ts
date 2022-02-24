import { ITodo } from './interfaces';
import { atomWithStorage } from 'jotai/utils';

export const todoStoreAtom = atomWithStorage<ITodo[]>('todo-store', []);
