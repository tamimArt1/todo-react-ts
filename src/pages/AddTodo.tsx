import { useAtom } from 'jotai';
import { nanoid } from 'nanoid';
import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../interfaces';
import { todoStoreAtom } from '../store';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IState {
  title: string;
  details: string;
  deadline: string;
}

const AddTodo: FC = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IState>();

  const navigate = useNavigate();
  const [todos, setTodos] = useAtom(todoStoreAtom);

  const onSubmit: SubmitHandler<IState> = (data) => {
    const id = nanoid();
    const createdAt = new Date().toLocaleString();
    const updatedAt = new Date().toLocaleString();
    const completed: boolean = false;
    const newTodo: ITodo = { ...data, id, createdAt, updatedAt, completed };
    setTodos([...todos, newTodo]);
    navigate('/');
  };

  return (
    <section className='container mx-auto max-w-[1024px] mt-8 text-slate-200'>
      <h1 className='uppercase text-center text-5xl'>Add new todo</h1>
      <div className='px-8 py-16 border border-slate-200 rounded-md mt-8'>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='Todo title'
            className='text-2xl text-slate-700'
            {...register('title', { required: true })}
          />
          <input
            type='text'
            placeholder='Todo details'
            className='mt-4 text-2xl text-slate-700'
            {...register('details', { required: true })}
          />
          <input
            type='date'
            {...register('deadline', { required: true })}
            className='mt-4 text-2xl text-slate-700'
          />
          <button
            type='submit'
            className='mt-8 px-4 py-2 transition duration-500 rounded-md bg-purple-700 text-2xl font-bold border-none outline-none hover:bg-purple-100 hover:text-purple-700'
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};
export default AddTodo;
