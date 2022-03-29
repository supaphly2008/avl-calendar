const PasswordInput = ({ type = "text", placeholder = "", className = "", value, onChange, label = "" }) => {
  const Label = () => {
    if (label) {
      return <div className="absolute top-[-8px] left-[15px] bg-black px-[4px] text-[12px]">{label}</div>;
    }
  };

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
      <div className="w-full bg-black--lighter px-[14px] py-[18px] rounded-[8px] relative top-[20px]">something</div>
    </div>
  );
};

export default PasswordInput;
