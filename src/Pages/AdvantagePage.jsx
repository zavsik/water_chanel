import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Navbar from "../Components/Navbar"

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        subtitle1: {
            color: '#2196f3',
            fontWeight: 'bold',
            fontSize: '20px'
        }
    },
  })


const paperStyle = {
    padding: 5,
    display: 'flex',
    justifyContent: 'space-around'
}

function AdvantagePage() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Paper elevation={3} sx={paperStyle}>
              <Box sx={{ paddingRight: 5}}>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                    Преимущество
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                В нашем случае, основное преимущество заключается в том, что услуга предоставляется от поставщика самого ресурса, что гарантирует  соблюдение всех правил и требований и гарантий  на произведенные работы
Обладая  достоверной информацией о сроках поверки ИПУ,   и рассылая уведомление  о необходимости проведения  очередной поверки, мы стараемся не только сэкономить ваши деньги за использованный ресурс с повышающим коэффициентом  1,5  , если Вы  забыли выполнить вовремя поверку ИПУ, но и избежать фейковых уведомлений и риска общения с  недобросовестными компаниями и  различных мошенников
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                Теперь нашему  Абоненту не нужно,  тратить свое время, что бы нести  акт о поверки в управляющую компанию или расчётный центр,  мы сами внесем данные в реестр ФГИС   «Аршин» и направит их в базу МосОблЕИРЦ !!!
Поверка с  Сервисно- метрологической службой  «Реутовского водоканала»-   это удобно,  надежно и безопасно.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
    </ThemeProvider>
  )
}

export default AdvantagePage
