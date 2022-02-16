import { FC, useState } from 'react'

const Page: FC = () => {
  const xPostion1 = -150
  const yPosition1 = 150
  const zPositon1 = 150

  const xPostion2 = -150
  const yPosition2 = 150
  const zPositon2 = 150

  const [campos, setCampos] = useState([ xPostion1,yPosition1,zPositon1 ])

  
  const changePositionLeft = () => {
    setCampos([xPostion1,yPosition1,zPositon1])
  }

  const changePositionRight = () => {
    setCampos([xPostion2,yPosition2,zPositon2])
  }


  return (
    <div>
      <button onClick={changePositionLeft}>left</button>
      <button onClick={changePositionRight}>right</button>
    </div>
  )
}

export default Page