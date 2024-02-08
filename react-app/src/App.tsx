import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'
import MissingAlert from './components/MissingAlert'
import { useState } from "react"

function App(){
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      <ListGroup items={items} heading = 'Cities' onSelectItem={handleSelectItem}/>
      <div>
        <Alert>
          Hello World from a passing child!
        </Alert>
      </div>
      <div>
        <Button  onClick={()=> setAlertVisibility(true)}>
          This is a button from a child being passed!
        </Button>
        { alertVisible && <MissingAlert onClose={()=>setAlertVisibility(false)}></MissingAlert>}
      </div>
    </div>
    
  );
}
export default App