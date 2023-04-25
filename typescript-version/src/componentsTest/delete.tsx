import * as React from 'react'
import Button from '@mui/material/Button'

// import Dialog from '@mui/material/Dialog'
// import DialogTitle from '@mui/material/DialogTitle'
// import DialogContent from '@mui/material/DialogContent'
// import DialogActions from '@mui/material/DialogActions'

interface DeleteProps {
  id: number
  name: string
  refresh: number
  setRefresh: React.Dispatch<React.SetStateAction<number>>
}

const Delete: React.FC<DeleteProps> = ({ id, setRefresh, refresh }) => {
  //   const [open, setOpen] = React.useState(false)

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/ListStudents/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
    setRefresh(refresh + 1)

    // setOpen(false)
  }

  return (
    <>
      {/* <Button variant='contained' color='secondary' onClick={() => setOpen(true)}>
        Delete
      </Button> */}
      {/* <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{`Are you sure you want to delete ${name}?`}</DialogTitle>
        <DialogContent>This action cannot be undone.</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} variant='contained' color='secondary'>
            Delete
          </Button>
        </DialogActions>
      </Dialog> */}
      <Button variant='contained' color='secondary' onClick={handleDelete} sx={{ color: 'red', background: 'black' }}>
        Delete
      </Button>
    </>
  )
}

export default Delete
