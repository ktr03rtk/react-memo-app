import usePersist from '../Persist';
import Item from './Item';

import type { Memo } from '../types/memo';

const MemoPage = () => {
  const [memo, setMemo] = usePersist<Memo[]>('memo', []);
  const [fmemo, setFMemo] = usePersist<Memo[]>('findMemo', []);
  const [mode, setMode] = usePersist<string>('mode', 'default');

  let data: JSX.Element[] = [];

  switch (mode) {
    case 'default':
      data = memo.map((value, key) => <Item key={value.message} memo={value} index={key + 1} />);
      break;

    case 'find':
      data = fmemo.map((value, key) => <Item key={value.message} memo={value} index={key + 1} />);
      break;

    default:
      data = memo.map((value, key) => <Item key={value.message} memo={value} index={key + 1} />);
      break;
  }

  return (
    <table className='table mt-4'>
      <tbody>{data}</tbody>
    </table>
  );
};

export default MemoPage;
