import * as React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

interface CreateProps {
  refresh: number
  setRefresh: React.Dispatch<React.SetStateAction<number>>
}

const Create: React.FC<CreateProps> = ({ setRefresh, refresh }) => {
  const [valueForm, setValueForm] = React.useState({ name: '', description: '', age: '', image: '', phone: '' })

  //hanchange
  const handleNameValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValueForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(valueForm)

    const res = await fetch('http://localhost:3000/ListStudents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(valueForm)
    })
    const data = await res.json()
    console.log(data)
    setRefresh(refresh + 1)
    console.log(refresh)

    // , (event.target as HTMLFormElement).reset()

    setValueForm({ name: '', description: '', age: '', image: '', phone: '' }) // Reset giá trị của riêng form input của phần create
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='outlined-basic'
        name='name'
        label='Name'
        variant='outlined'
        onChange={handleNameValue}
        value={valueForm.name || ''}
        sx={{ padding: '10px' }}
      />{' '}
      <TextField
        id='outlined-basic'
        name='description'
        label='Description'
        variant='outlined'
        onChange={handleNameValue}
        value={valueForm.description || ''}
        sx={{ padding: '10px' }}
      />{' '}
      <TextField
        id='outlined-basic'
        name='age'
        label='Age'
        type='number'
        variant='outlined'
        onChange={handleNameValue}
        value={valueForm.age || ''}
        sx={{ padding: '10px' }}
      />{' '}
      <TextField
        id='outlined-basic'
        name='image'
        label='Image'
        variant='outlined'
        onChange={handleNameValue}
        value={valueForm.image || ''}
        sx={{ padding: '10px' }}
      />{' '}
      <TextField
        id='outlined-basic'
        name='phone'
        label='phone'
        variant='outlined'
        onChange={handleNameValue}
        value={valueForm.phone || ''}
        sx={{ padding: '10px' }}
      />{' '}
      <br />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        sx={{ margin: '10px', color: 'brown', background: 'wheat' }}
      >
        Create
      </Button>
    </form>
  )
}

export default Create
