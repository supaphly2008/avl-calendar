import { useState } from "react";
import PasswordInput from "../components/PasswordInput";

export default function Home() {
  const [password, setPassword] = useState("");

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="p-[50px]">
      <div>
        <div className="text-[96px] font-bold mb-[20px]">Password Input</div>
        <PasswordInput label="Password" placeholder="Password" type="password" value={password} onChange={onPasswordChange} />
      </div>
    </div>
  );
}
