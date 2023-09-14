import './nova.css'
import {NvStack, NvFieldText, NvText, NvAvatar, NvFieldSelect, NvOption, NvFieldTextArea, NvList, NvListItem, NvTable, NvTableRow, NvTableCell, NvButton } from '@eliagroup-innersource/nova-components-react/';

function App() {

  return (
<div className='all'>

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

<NvStack gutter={4} margin="5 0 0 0" padding={3}>
<NvFieldSelect className="labelSamplefeed" label="How did you hear about us?"  required  margin=". . 3">
  <NvOption value="value-1"> label 1 </NvOption>
  <NvOption value="value-2"> label 2 </NvOption>
  <NvOption value="value-3"> label 3 </NvOption>
</NvFieldSelect>
<NvFieldText className="labelSamplespecify" label="Please Specify" required/>
</NvStack>

<NvFieldTextArea margin="5 0 0 0" padding={3} className="LabelSamplefeedback" label="Feedback about us:"></NvFieldTextArea>
<NvFieldTextArea margin="5 0 0 0" padding={3} className="LabelSamplefeedback" label="Suggestions if any for further improvment:"></NvFieldTextArea>
<NvText margin="5 0 0 0" padding={3}>Will you be willing to recommend us?</NvText>

<NvList margin="0 0 0 5" padding={3} bullet>
  <NvListItem href="#" isActive> Yes </NvListItem>
  <NvListItem href="#"> No </NvListItem>
  <NvListItem href="#"> Maybe </NvListItem>
</NvList>

<NvText margin="4 0 0 0" padding={3}>Please give reference of any two people whom you feel:</NvText>

<NvTable className='table' margin="1 0 0 0" padding={1} striped>
  
  <NvTableRow slot="header">
    <NvTableCell grid-cols="6">  </NvTableCell>
    <NvTableCell grid-cols="6"> Full Name </NvTableCell>
    <NvTableCell grid-cols="6"> Address </NvTableCell>
    <NvTableCell grid-cols="6"> Contact Number </NvTableCell>
  </NvTableRow>
  <NvTableRow>
    <NvTableCell grid-cols="6"> 1 </NvTableCell>
    <NvTableCell grid-cols="6">  </NvTableCell>
    <NvTableCell grid-cols="6">  </NvTableCell>
    <NvTableCell grid-cols="6">  </NvTableCell>
  </NvTableRow>
  <NvTableRow>
    <NvTableCell grid-cols="6"> 2 </NvTableCell>
    <NvTableCell grid-cols="6">  </NvTableCell>
    <NvTableCell grid-cols="6">  </NvTableCell>
    <NvTableCell grid-cols="6">  </NvTableCell>
  </NvTableRow>

</NvTable>
<br/>

<button className='submitbtntest'>Submit</button>
<NvButton className="submitbtn" large> Submit </NvButton>

</div>
  )
}

export default App
