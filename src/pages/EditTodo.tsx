import { useAtom } from 'jotai';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ITodo } from '../interfaces';
import { todoStoreAtom } from '../store';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IStateEdit {
  title: string;
  details: string;
  completed: boolean;
}

const EditTodo: FC = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStateEdit>();

  const { id } = useParams();
  const navigate = useNavigate();
  const [target, setTarget] = useState<ITodo>();
  const [todos, setTodos] = useAtom(todoStoreAtom);

  useEffect(() => {
    const target = todos.filter((todo) => todo.id === id);
    setTarget(target[0]);
  }, []);

  const onSubmit: SubmitHandler<IStateEdit> = (data) => {
    const newUpdatedAt = new Date().toLocaleString();
    if (target) {
      target.completed = data.completed;
      target.updatedAt = newUpdatedAt;
      target.title = data.title;
      target.details = data.details;
      todos[todos.indexOf(target)] = target;
    }
    navigate('/');
  };

  return (
    <section className='container mx-auto max-w-[1024px] mt-8 text-slate-200'>
      <h1 className='uppercase text-center text-5xl'>Add new todo</h1>
      <div className='px-8 py-16 border border-slate-200 rounded-md mt-8'>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder={target?.title}
            className='text-2xl text-slate-700'
            {...register('title', { required: true })}
          />
          {errors.title && <span>Title is required</span>}
          <input
            type='text'
            placeholder={target?.details}
            className='mt-4 text-2xl text-slate-700'
            {...register('details', { required: true })}
          />
          {errors.details && <span>Details is required</span>}
          <input
            type='checkbox'
            {...register('completed')}
            className='mt-4 text-2xl text-slate-700'
          />
          <label htmlFor='completed'>Completed?</label>
          <button
            type='submit'
            className='mt-8 px-4 py-2 transition duration-500 rounded-md bg-purple-700 text-2xl font-bold border-none outline-none hover:bg-purple-100 hover:text-purple-700'
          >
            Edit
          </button>
        </form>
      </div>
    </section>
  );
};
export default EditTodo;
