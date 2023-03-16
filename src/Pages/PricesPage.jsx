import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonLink from '../Components/ButtonLink'
import Navbar from "../Components/Navbar"
import imageCounter from '../assets/Images/image_counter.png'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const imageStyle = {
    width: '100%',
    maxWidth: '400px',
    height: 'auto'
  }

const theme = createTheme({
    typography: {
        subtitle1: {
            color: '#2196f3',
            fontWeight: 'bold',
            fontSize: '20px'
        }
    },
  })

  function createData(nameService, service, price, button) {
    return { nameService, service, price, button }
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
                            <TableCell align="right"><ButtonLink label='Заказать' link='/'/></TableCell>
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
