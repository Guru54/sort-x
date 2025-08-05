import { useState, useEffect } from 'react'
import CustomArrayInput from './CustomArrayInput'
import AlgorithmSelect from './AlgorithmSelect'
import PresetButtons from './PresetButtons'

export default function InputPanel({ array, algorithm, onArrayChange, onAlgorithmChange }) {
  const getArrayString = arr =>
    arr.map(item => (typeof item === 'object' ? item.value : item)).join(', ');

  const [inputValue, setInputValue] = useState(getArrayString(array));
  const [isValid, setIsValid] = useState(true);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    setInputValue(getArrayString(array));
    setIsApplied(false);
  }, [array]);

  const validateInput = (value) => {
    const numbers = value.split(',')
      .map(item => item.trim())
      .filter(item => item !== '');
    return numbers.every(item => !isNaN(Number(item)));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(validateInput(value));
    setIsApplied(false);
  };

  const handleApply = () => {
    if (!isValid) return;
    const newArray = inputValue.split(',')
      .map(item => parseInt(item.trim()))
      .filter(item => !isNaN(item));
    if (newArray.length > 0) {
      onArrayChange(newArray);
      setIsApplied(true);
      setTimeout(() => setIsApplied(false), 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleApply();
    }
  };

  const presetArrays = {
    'Random 10': Array.from({length: 10}, () => Math.floor(Math.random() * 46) + 1),
    'Nearly Sorted': [1, 3, 2, 4, 6, 5, 7, 9, 8, 10],
    'Reversed': [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    'Few Unique': [5, 3, 5, 1, 3, 2, 5, 2, 1, 3]
  };

  const applyPreset = (preset) => {
    onArrayChange(presetArrays[preset]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomArrayInput
            inputValue={inputValue}
            isValid={isValid}
            isApplied={isApplied}
            handleInputChange={handleInputChange}
            handleKeyPress={handleKeyPress}
            handleApply={handleApply}
          />
          <AlgorithmSelect
            algorithm={algorithm}
            onAlgorithmChange={onAlgorithmChange}
          />
        </div>
        <PresetButtons
          presetArrays={presetArrays}
          applyPreset={applyPreset}
        />
      </div>
    </div>
  )
}