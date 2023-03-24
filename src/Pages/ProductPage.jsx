import React, { useRef } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonLink from '../Components/ButtonLink'
import Navbar from "../Components/Navbar"
import Button from '@mui/material/Button'

import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'
import { useLocation, useParams} from 'react-router-dom'


function ProductPage({ rows }) {
    let location = useLocation();
    console.log(location)

    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_0h6numv', 'template_juqxa9m', e.target, 'pcbsf_ZPxLz-oYZfK')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          })
        e.target.reset()
      }
    const params = useParams();

    console.log(params);
    
    return(
        <Container maxWidth='lg'>
            <Navbar />
                <Container maxWidth='lg'>
                    <Box sx={{  marginTop: 3 }}>
                        <Paper elevation={3} sx={{padding: 5, display: 'flex', justifyContent: 'center'}}>
                            <Box component='form' ref={form} onSubmit={handleSubmit} validate>
                                <Typography variant='h5' sx={{ textAlign: 'center' }}>
                                    Оформление заказа
                                </Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id='name'
                                    label='Имя'
                                    name='name'
                                    autoComplete='name'
                                    autoFocus
                                    sx={{ marginTop: 1, boxSizing: 'border-box' }}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    type='adress'
                                    id='adress'
                                    label='Адрес'
                                    name='adress'
                                    autoComplete='adress'
                                    autoFocus
                                    sx={{ marginTop: 1, boxSizing: 'border-box' }}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    type='phone'
                                    id='phone'
                                    label='Номер телефона'
                                    name='phone'
                                    autoComplete='phone'
                                    autoFocus
                                    sx={{ marginTop: 1, boxSizing: 'border-box' }}
                                />

                                <Box sx={{ marginTop: 2}}>
                                    <Typography variant='h6' sx={{marginTop: 2}}>
                                        Ваш заказ: 
                                    </Typography>
                                    <Typography variant='h6' sx={{marginTop: 2}}>
                                        {rows.nameService}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
                                    <Button variant="contained" sx={{ width: '100%' }} type="submit">Заказать</Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Container>
        </Container>
    )
}

export default ProductPage