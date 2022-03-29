import { useEffect, useState } from "react";
import IconTick from "./IconTick";

const passwordValidation = [
  {
    text: "Have at least one uppercase letter",
  },
  {
    text: "Have at least one lowercase letter",
  },
];

const PasswordInput = ({ type = "text", placeholder = "", className = "", value, onChange, label = "" }) => {
  const [validations, setValidations] = useState(passwordValidation);

  const Label = () => {
    if (label) {
      return <div className="absolute top-[-8px] left-[15px] bg-black px-[4px] text-[12px]">{label}</div>;
    }
  };

  useEffect(() => {
    const hasLower = /[a-z]/g;
    const hasUpper = /[A-Z]/g;
    if (hasLower.test(value)) {
    }
  }, [value]);

  return (
    <div className="inline-block relative">
      <Label />
      <input
        className={`${className} bg-transparent px-[12px] pt-[19px] pb-[15px] h-[58px] 
    w-[335px] rounded-[8px] border-[2px] border-gray outline-none placeholder:text-gray 
    focus:border-[2px] focus:border-white`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="w-full bg-black--lighter px-[14px] py-[18px] rounded-[8px] relative top-[20px]">
        {/* <IconTick /> */}
        <ul>
          {validations.map((item, index) => (
            <li key={index} className="flex items-center mb-[19px]">
              <IconTick className={`w-[20px] h-[20px] mr-[12px] ${1 == 1 ? "text-primary--light" : ""}`} />
              {item.text}
            </li>
          ))}
          {/* <li className="flex items-center mb-[19px]">
            <IconTick className={`w-[20px] h-[20px] mr-[12px] ${1 === 1 ? "text-primary--light" : ""} `} />
            Have at least one uppercase letter
          </li>
          <li className="flex items-center">
            <IconTick className="w-[20px] h-[20px] mr-[12px]" />
            Have at least one lowercase letter
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default PasswordInput;
