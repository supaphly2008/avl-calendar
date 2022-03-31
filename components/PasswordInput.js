import { useEffect, useState } from "react";
import IconTick from "./IconTick";

const PasswordInput = ({ type = "text", placeholder = "", className = "", value, onChange, label = "" }) => {
  const [hasUpper, setHasUpper] = useState(false);
  const [hasLower, setHasLower] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasEnoughChars, setHasEnoughChars] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  const validations = [
    {
      text: "Have at least one uppercase letter",
      test: hasUpper,
    },
    {
      text: "Have at least one lowercase letter",
      test: hasLower,
    },
    {
      text: "Have at least one number",
      test: hasNumber,
    },
    {
      text: "Have at least one special character (!@#$...etc)",
      test: hasSymbol,
    },
    {
      text: "Longer than 8 characters",
      test: hasEnoughChars,
    },
  ];

  const Label = () => {
    if (label) {
      return <div className="absolute top-[-8px] left-[15px] bg-black px-[4px] text-[12px]">{label}</div>;
    }
  };

  const validatePassword = () => {
    const hasLower = /[a-z]/g;
    const hasUpper = /[A-Z]/g;
    const hasNumber = /[0-9]/g;
    const hasSymbol = /\W|_/g;

    hasLower.test(value) ? setHasLower(true) : setHasLower(false);
    hasUpper.test(value) ? setHasUpper(true) : setHasUpper(false);
    hasNumber.test(value) ? setHasNumber(true) : setHasNumber(false);
    hasSymbol.test(value) ? setHasSymbol(true) : setHasSymbol(false);
    value.length >= 8 ? setHasEnoughChars(true) : setHasEnoughChars(false);
  };

  useEffect(() => {
    validatePassword();
  }, [value]);

  return (
    <div className="inline-block relative">
      <Label />
      <input
        className={`${className} bg-transparent px-[12px] pt-[19px] pb-[15px] h-[58px] 
    w-[335px] rounded-[8px] border-[2px] border-gray outline-none placeholder:text-gray 
    focus:border-[2px] focus:border-primary--light hover:border-white`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="max-w-[335px] bg-black--lighter px-[14px] py-[18px] rounded-[8px] relative top-[20px]">
        <ul>
          {validations.map((v, index) => (
            <li className="flex items-center mb-[19px]" key={index}>
              <IconTick className={`w-[20px] h-[20px] mr-[12px] ${v.test ? "text-primary--light" : ""}`} />
              <div className="flex-1">{v.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordInput;
