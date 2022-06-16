import { useState } from 'react';

import usePersist from '../Persist';
import AddForm from './AddForm';
import DelForm from './DelForm';
import FindForm from './FindForm';
import MemoPage from './MemoPage';

import type { Memo } from '../types/memo';

const MainPage = () => {
  const [memos, setMemos] = usePersist<Memo[]>('memo', []);
  const [fmemos, setFMemos] = usePersist<Memo[]>('findMemo', []);
  const [num, setNum] = useState(0);
  const [mode, setMode] = usePersist<string>('mode', 'default');

  return (
    <div>
      <h5 className='my-3'>mode: {mode}</h5>
      <div className='alert alert-primary pb-2'>
        <AddForm memos={memos} setMemos={setMemos} setMode={setMode} />
        <FindForm memos={memos} setFMemos={setFMemos} setMode={setMode} />
        <DelForm memos={memos} setMemos={setMemos} num={num} setNum={setNum} setMode={setMode} />
      </div>
      <MemoPage memos={memos} fmemos={fmemos} mode={mode} />
    </div>
  );
};

export default MainPage;
