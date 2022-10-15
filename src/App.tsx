import React from 'react';
import { ContainerMain } from 'components/UI/ContainerMain';
import { Checkbox } from 'components/UI/Checkbox';
import { Container } from 'components/UI/Container';
import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { Text } from 'components/UI/Text';
import useCalculateValue from 'hooks/useCalculateValue';
import { RandomNumber } from 'components/UI/RandomNumber';

const App: React.FC = () => {
  const {
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
  } = useCalculateValue();
  const notRandom =
    (mode === 'input' && startValue === endValue) || (mode === 'checkbox' && selected.length < 2);
  return (
    <ContainerMain>
      <Text type="title">Randomizer</Text>
      <RandomNumber randomNumber={result} notRandom={notRandom} />
      {mode === 'checkbox' && (
        <Container gap="8" wrap justifyContent="center">
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
        <Container gap="8" alignItems="center">
          <Text>from</Text>
          <Input value={startValue.toString()} onChange={startInputHandler} />
          <Text>to</Text>
          <Input value={endValue.toString()} onChange={endInputHandler} />
        </Container>
      )}
      <Text type="result"></Text>
      <Container gap="20" wrap justifyContent="center" alignItems="center">
        <Button onClick={updateResult}>Update</Button>
        <Button onClick={handleMode}>Change mode</Button>
      </Container>
    </ContainerMain>
  );
};

export default App;
