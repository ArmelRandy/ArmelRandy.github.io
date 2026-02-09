interface CopyButtonProps {
  text: string;
  children: React.ReactNode;
}

export default function CopyButton({ text, children }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors "
      type="button"
    >
      {children}
    </button>
  );
}
