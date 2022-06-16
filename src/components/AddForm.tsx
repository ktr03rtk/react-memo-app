import { useState } from 'react';

import type { Memo } from '../types/memo';

type AddProperties = {
  memos: Memo[];
  setMemos: (val: Memo[]) => void;
  setMode: (val: string) => void;
};

const AddForm = (props: AddProperties) => {
  const { memos, setMemos, setMode } = props;
  const [message, setMessage] = useState('');

  const doChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const doAction = () => {
    const data: Memo = {
      message: message,
      createdAt: Date(),
    };
    memos.unshift(data);
    setMemos(memos);
    setMessage('');
    setMode('default');
  };

  return (
    <form onSubmit={doAction} action=''>
      <div className='form-group row'>
        <input type='text' className='form-control-sm col' onChange={doChange} value={message} required />
        <input type='submit' value='Add' className='btn btn-primary btn-sm col-2' />
      </div>
    </form>
  );
};

export default AddForm;
