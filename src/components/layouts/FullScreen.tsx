interface FullScreenBgProps {
    children: React.ReactNode;
  }
  
const FullScreenLayout : React.FC <FullScreenBgProps> = ({children}) => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-50 to-blue-5 flex flex-col items-center justify-center">
        {children}
    </div>
  )
}

export default FullScreenLayout;

