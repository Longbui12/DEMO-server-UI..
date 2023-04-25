import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Create from './../../componentsTest/create'
import Delete from './../../componentsTest/delete'
import Edit from './../../componentsTest/edit'

// import { NextPage } from 'next'
// import { GetServerSideProps } from 'next/types'
// import { useState, useEffect } from 'react'
// import { GetStaticProps } from 'next/types'

//export async function getStaticProps() {
// export async function getServerSideProps() {
//   const ListStudentsApi = 'http://localhost:3000/ListStudents'
//   const res = await fetch(ListStudentsApi)
//   const ListStudents = await res.json()
//   console.log(ListStudents)

//   return {
//     props: {
//       ListStudents
//     }
//   }
// }

// interface ListStudents {
//   id: number
//   name?: string
//   description: string
//   age?: number
//   image?: string
// }

// interface Props {
//   ListStudents: ListStudents[]
// }

interface Student {
  id: number
  name: string
  description: string
  age: number
  image: string
  phone: number
}

// thêm getServerSideProps
// interface HomeProps {
//   listStudents: Student[]
// }
// const Home: NextPage<HomeProps> = ({ listStudents }) => {
//   const [refresh, setRefresh] = React.useState(0)
////////////////////////////////////

// thêm getStaticProps
// interface HomeProps {
//   students: Student[]
// }
// const Home = ({ students }: HomeProps) => {
//   const [listStudents, setListStudents] = React.useState<Student[]>(students)
//   const [refresh, setRefresh] = React.useState(0)

//   React.useEffect(() => {
//     const getStudent = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/ListStudents')
//         const students = await response.json()
//         setListStudents(students)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getStudent()
//   }, [refresh])

// //////////////////////////////////////////////////////////

const Home = () => {
  const [listStudents, setListStudents] = React.useState<Student[]>([])
  const [refresh, setRefresh] = React.useState(0)

  React.useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await fetch('http://localhost:3000/ListStudents')
        const id = await response.json()

        setListStudents(id)
        console.log(id)
      } catch (error) {
        console.log(error)
      }
    }
    getStudent()
  }, [refresh])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', paddingTop: '30px', paddingLeft: '40px' }}>
      {listStudents.map(student => (
        <Card
          sx={{
            width: '300px',
            margin: '10px',
            padding: '2px',
            border: 'solid 2px black'
          }}
          key={student.id}
        >
          <CardMedia component='img' alt='' height='250px' image={student.image} sx={{ borderRadius: '2%' }} />
          <CardContent>
            <Typography color='text.secondary'>
              <big>
                <strong>NAME:</strong>
              </big>{' '}
              {student.name}
            </Typography>
            <Typography color='text.secondary'>
              <big>
                <strong>DESC:</strong>
              </big>{' '}
              {student.description}
            </Typography>
            <Typography color='text.secondary'>
              <big>
                <strong>AGE:</strong>
              </big>{' '}
              {student.age}
            </Typography>
            <Typography color='text.secondary'>
              <big>
                <strong>PHONE:</strong>
              </big>{' '}
              {student.phone}
            </Typography>
          </CardContent>
          <CardActions>
            <Delete id={student.id} name={student.name} refresh={refresh} setRefresh={setRefresh} />
            <Edit
              id={student.id}
              name={student.name}
              description={student.description}
              age={student.age}
              image={student.image}
              phone={student.phone}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </CardActions>
        </Card>
      ))}

      <CardActions>
        <Create refresh={refresh} setRefresh={setRefresh} />
      </CardActions>
    </Box>
  )
}

/// getServerSideProps
// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const res = await fetch('http://localhost:3000/ListStudents')
//     const listStudents = await res.json()

//     return {
//       props: { listStudents }
//     }
//   } catch (error) {
//     console.log(error)

//     return {
//       props: { listStudents: [] }
//     }
//   }
// }

/// getStaticProps
// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   const response = await fetch('http://localhost:3000/ListStudents')
//   const students = await response.json()

//   return {
//     props: {
//       students
//     },
//     revalidate: 10
//   }
// }

export default Home
