import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Navbar from "../Components/Navbar"
import image_3 from '../assets/Images/image_3.png'
import image_4 from '../assets/Images/image_4.png'
import image_5 from '../assets/Images/image_5.png'

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

const imageStyle = {
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
}

const paperStyle = {
    padding: 5,
    display: 'flex',
    justifyContent: 'space-around'
}

function ServicesPage() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Paper elevation={3} sx={paperStyle}>
              <Box sx={{ paddingRight: 5}}>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                    Услуги
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                    Основные преимущества предоставления услуг «Сервисно- метрологической службы» компании Реутовский водоканал
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                    Основное преимущество заключается в том, что услуга предоставляется от поставщика самого ресурса, что гарантирует  соблюдение всех правил и требований и гарантий  на произведенные работы
                </Typography>
                <Typography variant='subtitle1' sx={{ marginTop: 3 }}>
                    Теперь нашему  Абоненту не нужно,  тратить свое время, что бы нести  акт о поверки в управляющую компанию или расчётный центр,  мы сами внесем данные в реестр ФГИС   «Аршин» и направим  их в базу МосОблЕИРЦ !!!
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                    Для удобства абонентов,  прием заявок осуществляется круглосуточно 24/7 
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                    Заботимся о своих абонентах и предлагаем  одну из самых низких цен на услуги по поверке и замене счётчиков в г.Реутов 
                </Typography>
                {/* <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 2 }}>
                  <ButtonLink label='К ценам'/>
                </Box> */}
              </Box>
              <Box>
                <img src={image_5} alt={"image"} />
              </Box>
            </Paper>
          </Box>
        </Container>

        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Paper elevation={3} sx={paperStyle}>
              <Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                  Зачем нужна поверка
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                  Поверка ИПУ – обязательная процедура. Необходима для контроля правильности работы прибора, и точных расчетов цен на воду.
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                Необходимость обязательной поверки ИПУ закреплена  ст 13 Федерального закона «Об обеспечении единства измерений» от 26.06.2008 г № 102- ФЗ и постановлением  Правительства РФ № 354 от 06.05.2011
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                В соответствии с п. 59 Правил предоставления коммунальных услуг собственникам и пользователям помещений в многоквартирных домах и жилых домов, утвержденных постановлением Правительства РФ № 354 от 06.05.2011, показания индивидуальных приборов учета , не прошедших поверку, не могут использоваться для расчета платы за горячую и холодную воду   и  будут выведены из эксплуатации, а для расчетов Вас переведут на повышенный  тариф. 
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>

        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Paper elevation={3} sx={paperStyle}>
              <Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                    Поверка счетчиков воды 
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                    Эта процедура проводится планово, для проверки соответствия данных, показываемых счетчиками с фактическими тратами воды.
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                    Приборы учета воды расположены в труднодоступных местах? Забываете ежемесячно передавать показания?
                </Typography>
              </Box>
              <Box sx={{paddingLeft: 5, display: 'flex', alignItems: 'center'}}>
                <img src={image_4} alt={"image"} />
              </Box>
            </Paper>
          </Box>
        </Container>

        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Paper elevation={3} sx={paperStyle}>
              <Box sx={{paddingRight: 5, display: 'flex', alignItems: 'center'}}>
                <img src={image_3} alt={"image"} />
              </Box>
              <Box>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                    Установите умный контроллер  
                </Typography>
                <Typography variant='h6' sx={{ marginTop: 3 }}>
                    И он будет автоматически  передавать показания на ваш телефон, в управляющую компанию, а так же в МосОблЕИРЦ.*
                </Typography>
                <Typography variant='h6'>
                    *ИПУ должны быть оборудованы импульсным выходом
                </Typography>
                <Typography variant='subtitle1' sx={{ marginTop: 5 }}>
                    Замена счетчиков воды
                </Typography>
                <Typography variant='h6'>
                    Услуга по замене счетчика потребуется, когда старый прибор уже отработал свой ресурс, либо неисправен, либо не прошел поверку
                </Typography>
                <Typography variant='subtitle1' sx={{ marginTop: 3 }}>
                    Монтаж водосчетчиков клиента 
                </Typography>
                <Typography variant='h6'>
                    Индивидуальные счетчики воды необходимы для того, чтобы максимально точно контролировать расход и экономить потребление воды. 
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
    </ThemeProvider>
  )
}

export default ServicesPage
