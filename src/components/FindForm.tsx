import { useState } from 'react';

import type { Memo } from '../types/memo';

type FindProperties = {
  memos: Memo[];
  setFMemos: (val: Memo[]) => void;
  setMode: (val: string) => void;
};

const FindForm = (props: FindProperties) => {
  const { memos, setFMemos, setMode } = props;
  const [message, setMessage] = useState('');

  const doChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const doAction = () => {
    if (message == '') {
      setMode('default');
      return;
    }

    const res = memos.filter((item) => {
      return item.message.includes(message);
    });
    setFMemos(res);
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
