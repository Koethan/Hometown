
interface Props {
    onClose: () => void;
}

const MissingAlert = ( {onClose}: Props ) => {
  return (
    <div className='alert alert-primary alert-dismissible'>MissingAlert
    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
  )
}

export default MissingAlert