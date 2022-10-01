import { useCallback, useState } from 'react';

interface UseSelect<T> {
  selected: Array<T>;
  handleSelect(arg: T): void;
  //   handleSelectAll(array: Array<T>): void;
  handleUnselect(arg: T): void;
  //   handleUnselectAll(): void;
}

const useSelect = <T>(init?: Array<T>): UseSelect<T> => {
  const [selected, setSelect] = useState<Array<T>>(init || []);

  const handleSelect = useCallback(
    (arg: T) => setSelect([...selected, arg]),
    [setSelect, selected],
  );
  //   const handleSelectAll = useCallback(
  //     (array) => setSelect(array), [setSelect],
  //   );
  const handleUnselect = useCallback(
    (arg: T) => setSelect(selected.filter((id) => arg !== id)),
    [setSelect, selected],
  );
  //   const handleUnselectAll = useCallback(
  //     () => setSelect([]), [setSelect],
  //   );

  return {
    selected,
    handleSelect,
    // handleSelectAll,
    handleUnselect,
    // handleUnselectAll,
  };
};

export default useSelect;
