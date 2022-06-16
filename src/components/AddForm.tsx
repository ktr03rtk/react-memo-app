import { useState } from 'react';

import usePersist from '../Persist';

import type { Memo } from '../types/memo';

const AddForm = () => {
  const [memo, setMemo] = usePersist<Memo[]>('memo', []);
  const [message, setMessage] = useState('');
  const [mode, setMode] = usePersist<string>('mode', 'find');

  const doChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const doAction = () => {
    const data: Memo = {
      message: message,
      createdAt: Date(),
    };
    memo.unshift(data);
    setMemo(memo);
    setMessage('');
    setMode('default');
  };

  return (
    <form onSubmit={doAction} action=''>
      <div className='form-group row'>
        <input
          type='text'
          className='form-control-sm col'
          onChange={doChange}
          value={message}
          required
        />
        <input type='submit' value='Add' className='btn btn-primary btn-sm col-2' />
      </div>
    </form>
  );
};

export default AddForm;
