import type { Memo } from '../types/memo';

type DelProperties = {
  memos: Memo[];
  setMemos: (val: Memo[]) => void;
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  setMode: (val: string) => void;
};

const DelForm = (props: DelProperties) => {
  const { memos, setMemos, num, setNum, setMode } = props;

  const doChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNum(Number(e.target.value));
  };

  const doAction = () => {
    const res = memos.filter((item, key) => {
      return key != num;
    });
    setMemos(res);
    setNum(0);
    setMode('default');
  };

  const items = memos.map((value, key) => (
    <option key={key} value={key}>
      {value.message.substring(0, 10)}
    </option>
  ));

  return (
    <form onSubmit={doAction}>
      <div className='form-group row'>
        <select onChange={doChange} className='form-control-sm col' defaultValue='-1'>
          {items}
        </select>
        <input type='submit' value='Del' className='btn btn-primary btn-sm col-2' />
      </div>
    </form>
  );
};

export default DelForm;
