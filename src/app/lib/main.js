import nodemailer from 'nodemon'
import mainConfig from '../../config/mail'


export default nodemailer.createTransport(mainConfig)
