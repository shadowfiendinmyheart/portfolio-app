import React from "react";
import { useAppSelector } from "../../hooks/useRedux";

import styles from "./Select.module.css";

interface SelectProps {
  options: string[];
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const { currentMode } = useAppSelector((state) => state.cardSlice);

  const handleChangeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      onChange={handleChangeValue}
      value={currentMode}
      className={styles.select}
    >
      {options.map((option, index) => {
        return (
          <option value={option} key={option + index}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
