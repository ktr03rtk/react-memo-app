import usePersist from '../Persist';
import AddForm from './AddForm';
import DelForm from './DelForm';
import FindForm from './FindForm';
import MemoPage from './MemoPage';

const MainPage = () => {
  const [mode, setMode] = usePersist<string>('mode', 'default');

  return (
    <div>
      <h5 className='my-3'>mode: {mode}</h5>
      <div className='alert alert-primary pb-2'>
        <AddForm />
        <FindForm />
        <DelForm />
      </div>
      <MemoPage />
    </div>
  );
};

export default MainPage;
