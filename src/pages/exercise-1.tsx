import axios from 'axios';
import React from 'react';

import Button from '../components/button';
import BaseLayout from '../layouts/base-layout';

interface Item {
  id: string;
  value: string;
}

const Exercise1: React.FC = () => {
  const [items, setItems] = React.useState(new Array<Item>());
  const [selectedItems, setSelectedItems] = React.useState(new Array<Item>());

  const addItem = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    const newSet = [...selectedItems];
    const itemToAdd = items.find(item => !selectedItems.includes(item));
    if (itemToAdd) {
      newSet.push(itemToAdd);
    }
    setSelectedItems(newSet);
  };

  const removeItem = (itemToRemove: Item): void => {
    setSelectedItems(selectedItems.filter(item => item !== itemToRemove));
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<Array<Item>>('/api/v1/fruits');
      setItems(data);
      setSelectedItems(data);
    };

    fetchData();
  }, []);

  return (
    <BaseLayout>
      <h1 className="text-center text-3xl underline">Items don't match1</h1>
      <p className="mt-2 text-xl">
        When removing an item from the list then other items no longer match
        their input{' '}
      </p>
      <div className="flex-col bg-cover p-6 rounded pt-8 pb-8">
        <Button styleType="primary" color="primary" onClick={addItem}>
          add item
        </Button>
        <ul className="list-none p-4 pl-0">
          {selectedItems.map(item => (
            <li className="m-2 flex flex-row">
              <Button
                styleType="secondary"
                color="error"
                onClick={() => removeItem(item)}
              >
                remove
              </Button>
              <label className="mx-2" htmlFor={`${item.value}-input`}>
                {item.value}
              </label>{' '}
              <input
                className="text-black mx-2 p-2 border border-gray-300"
                id={`${item.value}-input`}
                defaultValue={item.value}
              />
            </li>
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Exercise1;
