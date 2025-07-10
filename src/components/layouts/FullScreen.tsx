interface FullScreenBgProps {
  children: React.ReactNode;
}

const FullScreenLayout: React.FC<FullScreenBgProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-[#dbeafe52] flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default FullScreenLayout;
