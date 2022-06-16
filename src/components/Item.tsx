import type { Memo } from '../types/memo';

type ItemPropsType = {
  memo: Memo;
  index: number;
};

const Item = (props: ItemPropsType) => {
  const th = {
    width: '100px',
  };
  const td = {
    textAlign: 'right' as const,
    width: '150px',
  };

  const d = new Date(Date.parse(props.memo.createdAt));
  console.log(typeof d);
  const date = d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();

  return (
    <tr>
      <th style={th}>No, {props.index}</th>
      <td>{props.memo.message}</td>
      <td style={td}>{date}</td>
    </tr>
  );
};

export default Item;
