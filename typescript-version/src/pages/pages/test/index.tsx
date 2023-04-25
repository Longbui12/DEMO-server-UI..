// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'

// const bull = (
//   <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
//     •
//   </Box>
// )

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant='h5' component='div'>
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color='text.secondary'>
//         adjective
//       </Typography>
//       <Typography variant='body2'>
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size='small'>Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// )

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant='outlined'>{card}</Card>
//     </Box>
//   )
// }

// import React, { useState } from 'react'
// import { Button, Dialog, Link } from '@mui/material'

// export default function XXX() {
//   const [open, setOpen] = useState<boolean>(true)
//   const handleClickOpen = () => {
//     setOpen(true)
//   }
//   //   const handleClose = () => {
//   //     setOpen(false)
//   //   }

//   return (
//     <>
//       <h1>Hello World</h1>
//       <Link href='/'>
//         <Button variant='contained' onClick={handleClickOpen}>
//           Back to HomePage
//         </Button>
//       </Link>
//     </>
//   )
// }

import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Test() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = () => {
    setIsOpen(true)
  }

  const handleConfirm = () => {
    router.push('/')
  }

  const handleCancel = () => {
    router.replace('/404')
  }

  return (
    <>
      <Button onClick={handleNavigate} variant='contained'>
        Go to Homepage
      </Button>
      {isOpen && (
        <div>
          <p>Are you sure you want to navigate to the homepage?</p>
          <Button onClick={handleConfirm}>OK</Button>
          <Button onClick={handleCancel}>No</Button>
        </div>
      )}
    </>
  )
}
