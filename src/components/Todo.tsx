import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ITodo } from '../interfaces';
import { todoStoreAtom } from '../store';

interface ITodoProp {
  todo: ITodo;
  i: number;
}

const Todo: FC<ITodoProp> = ({
  todo: { id, title, createdAt, updatedAt, completed, details, deadline },
  i,
}): ReactElement => {
  const [todos, setTodos] = useAtom(todoStoreAtom);

  function deleteMe(): void {
    const afterDelete = todos.filter((todo) => todo.id !== id);
    setTodos(afterDelete);
  }

  return (
    <motion.div
      key={id}
      initial={{ x: '-100%' }}
      animate={{ x: '0px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.4 }}
      whileHover={{ scale: 1.05 }}
      exit={{ x: '100%', transition: { duration: 0.7, ease: 'easeOut' } }}
      className='text-white flex justify-between px-4 py-2 border border-purple-600 rounded-md w-[700px] mt-4'
    >
      <div className='divide-y'>
        <h1 className='text-xl'>Title : {title}</h1>
        <h2 className='text-lg my-4'>Details : {details}</h2>
        <h3 className='text-lg my-4'>Deadline : {deadline}</h3>
        <p className={completed ? 'text-green-500' : 'text-red-500'}>
          {completed ? 'Completed' : 'Incomplete'}
        </p>
      </div>
      <div>
        <p>Created : {createdAt}</p>
        <p className='my-4'>Updated : {updatedAt}</p>
        <button
          className='px-4 py-2 rounded-full bg-red-600 text-slate-200 text-xl'
          onClick={deleteMe}
        >
          X
        </button>
        <br />
        <Link to={`/edit/${id}`}>
          <button className='bg-purple-700 px-4 py-2 rounded-md text-gray-200 text-xl mt-4'>
            Edit Todo
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Todo;
