import './nova.css'
import {NvStack, NvFieldText, NvText, NvAvatar } from '@eliagroup-innersource/nova-components-react/';

function App() {

  return (
<div>
    <NvText margin="5 0 0 0" padding={3} size= "xl" className="headertext" >CUSTOMER DETAILS:
</NvText>

<NvStack gutter={4} margin="5 0 0 0" padding={3}>
<NvFieldText className="labelSamplefn" label="Full Name" required message="First Name"/>
<NvFieldText className="labelSampleln" message="Last Name"/>
</NvStack>
&nbsp;
<NvFieldText margin="0 0 1 1" padding={3} className="streetaddress" label="Address" required message="Street Address"/>
&nbsp;
<NvFieldText margin="0 0 0 1" padding={3} className="streetaddress" message="Street Address Line 2"/>
&nbsp;
<NvStack gutter={5} margin="0 0 0 1" padding={3} >
<NvFieldText className="labelSamplecs" message="City"/>
<NvFieldText className="labelSamplecs" message="State / Province"/>
</NvStack>
&nbsp;

<NvFieldText margin="0 0 0 1" padding={3} className="streetaddress" message="Postal / Zip Code"/>

<NvAvatar className="image" square xLarge url="nova.jpg" />

<NvStack gutter={4} margin="5 0 0 0" padding={3}>
<NvFieldText className="labelSamplepn" label="Phone Number" placeholder='(000) 000-0000' required />
<NvFieldText className="labelSampleemail" label="E-mail" message="example@example.com"/>
</NvStack>
&nbsp;
<div className='hrTag'></div>
</div>
  )
}

export default App
