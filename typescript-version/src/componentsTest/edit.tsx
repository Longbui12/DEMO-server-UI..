// import * as React from 'react'
// import TextField from '@mui/material/TextField'

// import Button from '@mui/material/Button'

// interface EditProps {
//   id: number
//   name: string

//   refresh: number
//   setRefresh: React.Dispatch<React.SetStateAction<number>>
// }

// const Edit: React.FC<EditProps> = ({ id, setRefresh, refresh }) => {
//   const [valueForm, setValueForm] = React.useState({ name: '', description: '', age: '', image: '' })

//   //hanchange
//   const handleNameValue = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target
//     setValueForm(prev => ({ ...prev, [name]: value }))
//   }

//   React.useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(`http://localhost:3000/ListStudents/${id}`)
//       const data = await res.json()
//       setValueForm(data)
//     }
//     fetchData()
//   }, [id])

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     console.log(valueForm)

//     const res = await fetch(`http://localhost:3000/ListStudents/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(valueForm)
//     })
//     const data = await res.json()
//     console.log(data)
//     setRefresh(refresh + 1)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         id='outlined-basic'
//         name='name'
//         label='Name'
//         variant='outlined'
//         onChange={handleNameValue}
//         value={valueForm.name || ''}
//         style={{ padding: '10px' }}
//       />{' '}
//       <TextField
//         id='outlined-basic'
//         name='description'
//         label='Description'
//         variant='outlined'
//         onChange={handleNameValue}
//         value={valueForm.description || ''}
//         style={{ padding: '10px' }}
//       />{' '}
//       <TextField
//         id='outlined-basic'
//         name='age'
//         label='Age'
//         type='number'
//         variant='outlined'
//         onChange={handleNameValue}
//         value={valueForm.age || ''}
//         style={{ padding: '10px' }}
//       />{' '}
//       <TextField
//         id='outlined-basic'
//         name='image'
//         label='Image'
//         variant='outlined'
//         onChange={handleNameValue}
//         value={valueForm.image || ''}
//         style={{ padding: '10px' }}
//       />{' '}
//       <br />
//       <Button
//         type='submit'
//         variant='contained'
//         color='primary'
//         style={{ marginTop: '10px', color: 'red', background: 'black' }}
//       >
//         Update
//       </Button>
//     </form>
//   )
// }

// export default Edit

import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

interface EditProps {
  id: number
  name: string
  description: string
  age: number
  image: string
  phone: number
  refresh: number
  setRefresh: React.Dispatch<React.SetStateAction<number>>
}

const Edit: React.FC<EditProps> = ({ id, name, description, age, image, phone, refresh, setRefresh }) => {
  const [open, setOpen] = React.useState(false)
  const [editStudent, setEditStudent] = React.useState({
    id: id,
    name: name,
    description: description,
    age: age,
    image: image,
    phone: phone
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setEditStudent({
      ...editStudent,
      [name]: value
    })
  }

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/ListStudents/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editStudent)
      })

      if (!response.ok) {
        throw new Error('Something went wrong.')
      }

      setOpen(false)
      setRefresh(refresh + 1)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        onClick={handleClickOpen}
        sx={{ margin: '10px', color: 'gray', background: 'pink' }}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <u>Edit Information :</u>
        </DialogTitle>
        <DialogContent sx={{ padding: '10px' }}>
          <TextField
            name='name'
            label='Name'
            value={editStudent.name}
            fullWidth
            onChange={handleChange}
            sx={{ padding: '10px' }}
          />
          <TextField
            name='description'
            label='Description'
            value={editStudent.description}
            fullWidth
            onChange={handleChange}
            sx={{ padding: '10px' }}
          />
          <TextField
            name='age'
            label='Age'
            type='number'
            value={editStudent.age}
            fullWidth
            onChange={handleChange}
            sx={{ padding: '10px' }}
          />
          <TextField
            name='image'
            label='Image URL'
            value={editStudent.image}
            fullWidth
            onChange={handleChange}
            sx={{ padding: '10px' }}
          />
          <TextField
            name='phone'
            label='phone'
            type='number'
            value={editStudent.phone}
            fullWidth
            onChange={handleChange}
            sx={{ padding: '10px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Edit
