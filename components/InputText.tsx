import { useRef } from "react";

type InputTextProps = {
  id: string;
  children: React.ReactNode;
  required: boolean;
  onChange?: any;
};

export function InputText(props: InputTextProps) {
  const textInputRef = useRef<HTMLInputElement>();

  function handleChange() {
    props.onChange(textInputRef.current.value);
  }

  return (
    <section>
      <label htmlFor={props.id}>
        {props.children} {!props.required && <small>optional</small>}
      </label>
      <input
        id={props.id}
        name={props.id}
        type="text"
        required={props.required}
        ref={textInputRef}
        onChange={handleChange}
      />
    </section>
  );
}
