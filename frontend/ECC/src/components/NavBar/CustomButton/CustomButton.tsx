type CustomButtonProps = {
  content: string;
};

export default function CustomButton({content}: CustomButtonProps) {
  return <button>{content}</button>;
}
