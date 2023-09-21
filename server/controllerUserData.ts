import { Send_mailer } from "./mailer";
import * as dotenv from "dotenv";

dotenv.config();

export type SendMessageResponse = {
  status: boolean;
  message: string;
};

export class ControllerUserData {
  async sendMessage(
    firstName: string,
    secondName: string,
    email: string,
    phone: string,
    message: string,
  ): Promise<SendMessageResponse> {
    try {
      const subject =
        "Contact nume - " +
        firstName +
        " prenume - " +
        secondName +
        " email - " +
        email +
        " telefon - " +
        phone;

      const mailer = new Send_mailer();
      const emailSent = await mailer.send(
        process.env.MAIL_USER,
        process.env.SUPPORT_MAIL,
        subject,
        message,
      );

      if (emailSent) {
        return { status: true, message: "Mail trimis" };
      } else {
        return { status: false, message: "Nu s-a putut trimite mailul" };
      }
    } catch (error) {
      console.error(error);
      return {
        status: false,
        message: "Eroare interna. Te rog reincearca mai tarziu!",
      };
    }
  }
}
