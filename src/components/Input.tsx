interface InputProps {
  type: string;
  placeholder: string;
  required: boolean;
  name: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, required, name }) => {
  return (
    <input
      className="w3-input w3-section w3-border"
      type={type}
      placeholder={placeholder}
      required={required}
      name={name}
    />
  );
};

export default Input;
