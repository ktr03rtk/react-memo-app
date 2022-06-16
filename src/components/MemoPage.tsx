import Item from './Item';

import type { Memo } from '../types/memo';

type MemoPageProperties = {
  memos: Memo[];
  fmemos: Memo[];
  mode: string;
};

const MemoPage = (props: MemoPageProperties) => {
  const { memos, fmemos, mode } = props;

  let data: JSX.Element[] = [];

  switch (mode) {
    case 'default':
      data = memos.map((value, key) => <Item key={value.message} memo={value} index={key + 1} />);
      break;

    case 'find':
      data = fmemos.map((value, key) => <Item key={value.message} memo={value} index={key + 1} />);
      break;

    default:
      data = memos.map((value, key) => <Item key={value.message} memo={value} index={key + 1} />);
      break;
  }

  return (
    <table className='table mt-4'>
      <tbody>{data}</tbody>
    </table>
  );
};

export default MemoPage;
