import { FC, useState } from 'react'
import Scene from '../componentsR3F/Scene';
import { Image,Drawer, Button, Group,useMantineTheme, MantineProvider } from '@mantine/core';
import { NONAME } from 'dns';
import { sizes } from '@mantine/core/lib/components/ActionIcon/ActionIcon.styles';

//webpage

const Page: FC = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

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
        <div style = {{width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(0,0,0,1) 35%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.3) 100%)'}}>
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
          <button style={{bottom: 10, position: 'fixed', marginLeft: 600, background: 'transparent', color: 'white', border: 0, fontSize: 60  }} onClick={() => setOpened(false)}>{'<'}</button>
        </div>
      </Drawer>
        <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
      <Scene />
    </div>
  )
}

export default Page