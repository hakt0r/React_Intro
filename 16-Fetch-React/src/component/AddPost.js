import { Button, Icon, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import SendIcon from '@material-ui/icons/Send';

async function sendPost(body){
  const response = await fetch("/posts/",{
    method:"POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await response.json()
}

export default function AddPost(){
  const [data,setData] = useState({
    title:'',
    message:''
  });
  function change(e){
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div>
        <TextField name="title"
          value={data.title}
          onChange={change}
          fullWidth variant="filled" label="Title"
        />
      </div>
      <div>
        <TextField name="message"
          value={data.message}
          onChange={change}
          fullWidth variant="filled" label="Message" multiline
        />
      </div>
      <div>
        <Button
          onClick={ e => sendPost(data) }
          variant="contained"
          color="primary"
          startIcon={<SendIcon/>}
        >Send</Button>
      </div>
    </div>
  )
}
