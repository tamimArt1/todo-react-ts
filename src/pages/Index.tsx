import { FC, ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAtomValue } from 'jotai';
import { todoStoreAtom } from '../store';
import Todo from '../components/Todo';

const Index: FC = (): ReactElement => {
  const todos = useAtomValue(todoStoreAtom);

  if (todos.length < 1) {
    return (
      <h1 className='text-center text-4xl text-white mt-8'>
        No Todo Yet. Add Some Todos.
      </h1>
    );
  }

  return (
    <>
      <section className='flex flex-col justify-center items-center'>
        <AnimatePresence>
          {todos.map((todo, i) => (
            <Todo key={todo.id} todo={todo} i={i} />
          ))}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Index;
