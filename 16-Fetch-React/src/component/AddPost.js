import { Button, Icon, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import SendIcon from '@material-ui/icons/Send';
import ImageUpload from './ImageUpload';

async function sendPost(body){
  const response = await fetch("/posts/",{
    method:"POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await response.json()
}

export default function AddPost({getPosts}){
  const [data,setData] = useState({
    title:'',
    message:'',
    image: null
  });
  function change(e){
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function changeImage(image){
    setData({ ...data, image });
  }
  async function submit(){
    await sendPost(data);
    getPosts();
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
          fullWidth variant="filled" label="Message"
          multiline
        />
      </div>
      <div>
        <ImageUpload changeImage={changeImage}/>
      </div>
      <div>
        <Button
          onClick={submit}
          variant="contained"
          color="primary"
          startIcon={<SendIcon/>}
        >Send</Button>
      </div>
    </div>
  )
}
