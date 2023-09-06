import './nova.css'
import {NvStack, NvButton } from '@eliagroup-innersource/nova-components-react/';
function App() {

  return (
<NvStack gutter={4} mb={4} overflow="auto">
  <NvButton color="neutral"> Neutral </NvButton>
  <NvButton color="primary"> Primary </NvButton>
  <NvButton color="secondary"> Secondary </NvButton>
  <NvButton color="error"> Error </NvButton>
</NvStack>
  )
}

export default App
