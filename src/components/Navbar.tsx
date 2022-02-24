import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <section className='container mx-auto max-w-[1024px] text-gray-200 flex justify-between py-8 px-4 bg-gradient-to-r from-purple-700 to-purple-500'>
      <Link to='/'>
        <motion.h1
          initial={{ x: '-400%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-bold'
        >
          Todo App
        </motion.h1>
      </Link>
      <Link to='/add'>
        <motion.div
          initial={{ x: '400%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <button className='px-4 py-2 transition duration-500 rounded-md bg-slate-700 text-xl font-bold border-none outline-none hover:bg-slate-100 hover:text-slate-700'>
            Add Todo
          </button>
        </motion.div>
      </Link>
    </section>
  );
};
export default Navbar;
