import { useEffect, useState } from 'react';
import useSelect from 'hooks/useSelect';

type Mode = 'input' | 'checkbox';

const useCalculateValue = () => {
  const [result, setResult] = useState<number>(1);
  const [mode, setMode] = useState<Mode>('checkbox');
  const handleMode = () => {
    if (mode === 'checkbox') {
      setMode('input');
    } else {
      setMode('checkbox');
    }
  };
  const { selected, handleSelect, handleUnselect } = useSelect<number>([]);
  const handleToggle = (id: number) => () => {
    if (selected.includes(id)) handleUnselect(id);
    else handleSelect(id);
  };
  const [startValue, setStartValue] = useState<number>(1);
  const [endValue, setEndValue] = useState<number>(12);
  const startInputHandler = ({
    target: { valueAsNumber: value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (value <= endValue) {
      setStartValue(value);
    }
  };
  const endInputHandler = ({
    target: { valueAsNumber: value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (value >= startValue) {
      setEndValue(value);
    }
  };
  const updateResult = () => {
    if (mode === 'checkbox') {
      setResult(() => +selected[Math.floor(Math.random() * selected.length)] + 1);
    }
    if (mode === 'input') {
      if (startValue >= endValue) {
        setResult(Math.floor(Math.random() * (startValue - endValue + 1) + endValue));
      } else {
        setResult(Math.floor(Math.random() * (endValue - startValue + 1) + startValue));
      }
    }
  };
  useEffect(() => updateResult(), [selected, startValue, endValue, mode]);

  return {
    result,
    mode,
    handleMode,
    handleToggle,
    selected,
    startValue,
    endValue,
    startInputHandler,
    endInputHandler,
    updateResult,
  };
};

export default useCalculateValue;
