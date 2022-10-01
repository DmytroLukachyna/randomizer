import React, { useEffect, useState } from 'react';
import { ContainerMain } from 'components/UI/ContainerMain';
import { Checkbox } from 'components/UI/Checkbox';
import { Container } from 'components/UI/Container';
import { Button } from 'components/UI/Button';
import useSelect from 'hooks/useSelect';
import { Input } from 'components/UI/Input';
import { Text } from 'components/UI/Text';

type Mode = 'input' | 'checkbox';

const App: React.FC = () => {
  const [result, setResult] = useState<number>();
  const [mode, setMode] = useState<Mode>('checkbox');
  const setModeHandler = () => {
    if (mode === 'checkbox') {
      setMode('input');
    } else {
      setMode('checkbox');
    }
  };
  const { selected, handleSelect, handleUnselect } = useSelect<number | string>([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);
  const handleToggle = (id: string | number) => () => {
    if (selected.includes(id)) handleUnselect(id);
    else handleSelect(id);
  };
  const [startValue, setStartValue] = useState('1');
  const [endValue, setEndValue] = useState('12');
  const startInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartValue(event.target.value);
  };
  const endInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndValue(event.target.value);
  };
  const updateResult = () => {
    if (mode === 'checkbox') {
      setResult(() => +selected[Math.floor(Math.random() * selected.length)] + 1);
    }
    if (mode === 'input') {
      if (startValue >= endValue) {
        setResult(Math.floor(Math.random() * (+startValue - +endValue + 1) + +endValue));
      } else {
        setResult(Math.floor(Math.random() * (+endValue - +startValue + 1) + +startValue));
      }
    }
  };
  useEffect(() => updateResult(), [selected, startValue, endValue]);
  return (
    <ContainerMain>
      <Text type="title">Рандомизатор</Text>
      {mode === 'checkbox' && (
        <Container gap="8">
          {Array.from(Array(8)).map((_, index) => (
            <Checkbox
              key={index}
              name={index.toString()}
              checked={selected.includes(index)}
              onChange={handleToggle(index)}
            >
              {index + 1}
            </Checkbox>
          ))}
        </Container>
      )}
      {mode === 'input' && (
        <Container gap="8">
          <Input value={startValue} onChange={startInputHandler} />
          <Input value={endValue} onChange={endInputHandler} />
        </Container>
      )}
      <h2>Случайное число: {result || '😉'}</h2>
      <Container gap="20">
        <Button onClick={updateResult}>Обновить</Button>
        <Button onClick={setModeHandler}>Сменить режим</Button>
      </Container>
    </ContainerMain>
  );
};

export default App;
