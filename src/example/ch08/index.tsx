import { useEffect, useState } from "react";

const Input = ({ name, ...props }) => {
  useEffect(() => {
    console.log(`Input "${name}" mounted`);
    return () => console.log(`Input "${name}" unmounted `);
  }, [name]);
  return <input {...props} name={name} />;
};

export const First = () => {
  const [disabled, setDisabled] = useState(false);
  const toggle = () => setDisabled(!disabled);
  return (
    <div>
      <button type="button" onClick={toggle}>
        toggle disable
      </button>
      {disabled ? (
        <Input disabled name="disabled-input" />
      ) : (
        <Input name="active-input" />
      )}
    </div>
  );
};

export const Second = () => {
  const [disabled, setDisabled] = useState(false);
  const toggle = () => setDisabled(!disabled);
  return (
    <div>
      <button type="button" onClick={toggle}>
        toggle disable
      </button>
      {disabled ? <Input disabled name="disabled-input" /> : null}
      {!disabled ? <Input name="active-input" /> : null}
    </div>
  );
};
