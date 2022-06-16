import { useState } from 'react';

import usePersist from '../Persist';

import type { Memo } from '../types/memo';

const FindForm = () => {
  const [memo, setMemo] = usePersist<Memo[]>('memo', []);
  const [fmemo, setFMemo] = usePersist<Memo[]>('findMemo', []);
  const [message, setMessage] = useState('');
  const [mode, setMode] = usePersist<string>('mode', 'find');

  const doChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const doAction = () => {
    if (message == '') {
      setMode('default');
      return;
    }

    const res = memo.filter((item, key) => {
      return item.message.includes(message);
    });
    setFMemo(res);
    setMode('find');
    setMessage('');
  };

  return (
    <form onSubmit={doAction}>
      <div className='form-group row'>
        <input type='text' onChange={doChange} value={message} className='form-control-sm col' />
        <input type='submit' value='Find' className='btn btn-primary btn-sm col-2' />
      </div>
    </form>
  );
};

export default FindForm;
