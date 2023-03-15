import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonLink from '../Components/ButtonLink'
import Navbar from "../Components/Navbar"
import imageCounter from '../assets/Images/image_counter.png'
import { createTheme, ThemeProvider } from '@mui/material/styles'


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

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Paper elevation={3} sx={{padding: 5, display: 'flex', justifyContent: 'space-between'}}>
              <Box sx={{ maxWidth: '50%', marginRight: 3}}>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                Поверка приборов учета воды
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                Прямая услуга от поставщика ресурсов
Нашему Абоненту теперь не нужно нести акт о поверки, акт КСП в управляющую компанию или расчётный центр, мы сами внесем данные в реестр ФГИС «Аршин» и направим их в базу МосОблЕИРЦ.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                  <ButtonLink label='Посмотреть цены' link='/prices'/>
                </Box>
              </Box>
              <Box >
                <img src={imageCounter} alt='logo' style={imageStyle} />
              </Box>
            </Paper>
          </Box>
        </Container>
    </ThemeProvider>
  )
}

export default HomePage
