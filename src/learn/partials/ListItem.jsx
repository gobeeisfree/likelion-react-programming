import { useContext } from 'react';
import { DemoAppContext } from '../11-context-problem';
import { shape, string } from 'prop-types';
import { useListStore } from '@/store/list';

function ListItem({ item }) {
  const { list, count } = useContext(DemoAppContext);

  const listStoreList = useListStore((state) => state.list);

  console.log('ListItem', listStoreList);

  const handleDeleteItem = (id) => () => {
    list.deleteItem(id);
    count.decrementCount(1);
  };

  return (
    <li data-id={item.id}>
      {item.title}
      <button
        type="button"
        className="button"
        onClick={handleDeleteItem(item.id)}
      >
        삭제
      </button>
    </li>
  );
}

ListItem.propTypes = {
  item: shape({
    id: string,
    title: string,
  }),
};

export default ListItem;
