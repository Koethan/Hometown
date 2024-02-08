//to make alert dynamic we make a prop
interface Props {
    children: string;
}


const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-danger" role="alert">
        {children}
    </div>
  )
}

export default Alert