import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import ButtonLink from './ButtonLink'
import Logo from '../assets/Images/logo.png'

const imageStyle = {
    width: '100%',
    maxWidth: '300px',
    height: 'auto'
}

const theme = createTheme({
    typography: {
        subtitle1: {
            fontSize: '12px'
        }
    },
  })

function Navbar() {
    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth='lg' sx={{marginTop: 5}}>
                <Paper elevation={3} sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: 2}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <img src={Logo} alt='logo' style={imageStyle} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',paddingLeft: 5, paddingRight: 5}}>
                        <Box>
                            <Typography variant='h6' sx={{ textAlign: 'center' }}>
                                +7 (498) 661 5171
                            </Typography>
                            <Typography variant='subtitle1'  sx={{ textAlign: 'center' }}>
                            Диспетчерская служба работает с 9:00 до 17:00
            Онлайн заявка 24/7 (обрабатывается в рабочее время, в приоритетном порядке)
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ButtonGroup variant="outlined" aria-label="outlined button group" >
                            <ButtonLink link="/" label='Главная'/>
                            <ButtonLink link="/services" label='Услуги'/>
                            <ButtonLink link="/prices" label='Цены'/>
                            <ButtonLink label='Преимущества'/>
                        </ButtonGroup>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
        
    )
  }

  export default Navbar