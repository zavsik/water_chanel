import Button from '@mui/material/Button'
import { Outlet, Link } from "react-router-dom"

const buttonStyle = {
    width: 'max-content',
}
const linkStyle = {
  
}

function ButtonLink(props) {
  return <Link to={props.link} underline='none' style={{ textDecoration: 'none', margin: 2 }}><Button size='small' sx={buttonStyle}>{props.label}</Button></Link>
}

export default ButtonLink
