import React, { useRef } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonLink from '../Components/ButtonLink'
import Navbar from "../Components/Navbar"
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import ProductPage from './ProductPage'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Outlet, Link, Route } from "react-router-dom"


<Route path="contacts/:id" element={<ProductPage />} />

const theme = createTheme({
    typography: {
        subtitle1: {
            color: '#2196f3',
            fontWeight: 'bold',
            fontSize: '20px'
        }
    },
  })

  function createData( nameService, service, price, button) {
    return {  nameService, service, price, button }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 3,
    bgcolor: 'background.paper',
    boxShadow: 20,
    pt: 2,
    px: 4,
    pb: 3,
  };
const buttonStyle = {
    width: 'max-content',
}
const linkStyle = {
  
}

  const rows = [
    createData('Поверка', 'Поверка одного счетчика воды без снятия на дому', 840, ButtonLink),
    createData('Замена, собственнику жилого помещения', 'Замена счетчика воды диаметр 15 мм', 2160, ButtonLink),
    createData('Замена, собственнику нежилого помещения', 'Замена счетчика воды диаметр 15 мм', 2400, ButtonLink),
    createData('Замена, собственнику нежилого помещения', 'Замена счетчика воды диаметр 20 мм', 3180, ButtonLink),
    createData('Установка счетчика клиента', 'Установка одного счётчика воды', 1000, ButtonLink),
    createData('Установка  ИПУ с контроллером', 'Установка 2х счетчиков  с контроллером. Настройка  и наладка оборудования', 8500, ButtonLink),
    createData('Замена, собственнику нежилого помещения', 'Замена счетчика воды диаметр 20 мм', 3180, ButtonLink),
    createData('Установка контроллера', 'Установка контроллера. Настройка и наладка оборудования', 6000, ButtonLink),

  ]

function PricesPage() {
  const form = useRef()

  const [open, setOpen] = React.useState(false)

  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
        <Container maxWidth='lg'>
            <TableContainer component={Paper} sx={{marginTop: 3}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell aligin='right'>Вид услуги</TableCell>
                            <TableCell align="right">Услуга</TableCell>
                            <TableCell align="right">Стоимость</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, idx) => (
                        <TableRow
                            key={idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                        <TableCell  scope="row">
                            {row.nameService}
                        </TableCell>
                            <TableCell align="right">{row.service}</TableCell>
                            <TableCell align="right">{row.price} руб</TableCell>
                            <TableCell align="right"><Link to={{
                             pathname: `/water_chanel/prices/${idx}`,
                             state: { vbbnvvnb: 'mystate' }
                            }}
                             underline='none' style={{ textDecoration: 'none', margin: 2 }}><Button size='small'  sx={buttonStyle}>Заказать</Button></Link></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    </ThemeProvider>
  )
}

export default PricesPage



