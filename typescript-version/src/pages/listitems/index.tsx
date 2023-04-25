import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }

//export async function getStaticProps() {
export async function getServerSideProps() {
  const itemApi = 'http://localhost:3000/item'
  const res = await fetch(itemApi)
  const items = await res.json()
  console.log(items)

  return {
    props: {
      items
    }
  }
}

interface Item {
  id: number
  name?: string
  description: string
}
interface Props {
  items: Item[]
}

const Home: React.FunctionComponent<Props> = props => {
  return (
    <Box sx={{ minWidth: 275 }}>
      {props.items.map(item => (
        <Card variant='outlined' key={item.id}>
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom></Typography>
              <Typography variant='h5' component='div'>
                {item.id}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                {item.name}
              </Typography>
              <Typography variant='body2'>
                {item.description}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Delete</Button>
              <Button size='small'>Edit</Button>
              <Button size='small'>Submit</Button>
            </CardActions>
            <TextField id='outlined-basic' label='name' variant='outlined' />{' '}
            <TextField id='outlined-basic' label='discription' variant='outlined' />
          </React.Fragment>
        </Card>
      ))}
    </Box>
  )
}

export default Home
