import React from 'react';
import Button from '../../Button/index'
import $message from '../index.tsx';
import {add,logoApple} from '../../fontIcon/index.mjs'


export default ()=> {
  return (
    <div style={{display:'flex',gap:'10px 10px',flexWrap:'wrap'}}>
      <Button 
       type='success' 
       text='自定义'
       handleClick={()=>$message.success('自定义消息')} >
       </Button>

      <Button 
       type='success' 
       text='info'
       handleClick={()=>$message.info('自定义消息')} >
       </Button>

      <Button 
       type='success' 
       text='warning'
       handleClick={()=>$message.warning('自定义消息')} >
       </Button>
      
    </div>
  )
}
