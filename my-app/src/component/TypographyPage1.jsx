import React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from '../css/TypographyPage1.css';




const TypografyPage1 = () => {
    return(
        <div>
            <Typography className="bienvenidos" variant="h5" color="initial" align="center"paragraph>
                !Bienvenidos y Bienvenidas!
            </Typography>
            <Typography className="sistema"variant="subtitle1" color="initial" align="center">
                Al sistema de reservas de
            </Typography>
            <Typography className="everis" variant="h6" color="initial" paragraph>
                Everis
            </Typography>



        </div>
    )
}

export default TypografyPage1