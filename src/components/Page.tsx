import { FC, useState } from 'react'
import Scene from '../componentsR3F/Scene';
import { Drawer, Button, Group } from '@mantine/core';


//Overlay

const Overlay: FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="full"
        withCloseButton = {false}
        closeOnClickOutside = {false}
        styles={{
          drawer: {background: 'transparent'},
        }}
        overlayOpacity= {0.6}
      >
        <div style = {{width: '100%', height: '100%'}}>
          <button style={{background: 'black', border: 0}}></button>
          <h1 style={{color: 'white', paddingLeft:150,paddingTop:15}}>TITLE</h1>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <div style={{paddingTop:0.5,color: 'white',paddingLeft:50 }}>_______________________________________________________________________________________</div>
          <button style={{bottom: 10, position: 'fixed', background: 'transparent', color: 'white', border: 0, fontSize: 60  }} onClick={() => setOpened(false)}>{'<'}</button>
        </div>
      </Drawer>
        <div style={{position: 'fixed', bottom: 10, color: 'white' }}>"房間" by "首都人 SODOREN" is licensed under CC BY 4.0 and is modified with built upon React Three Fiber models</div>
        <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
      <Scene />
    </div>
  )
}

export default Overlay