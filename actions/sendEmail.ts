"use server"

import { Resend } from "resend"
import { validateString, getErrorMessage } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email"
import React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmailEntry = formData.get("senderEmail")
  const messageEntry = formData.get("message")

  // Ensure that the values are not null and are strings
  if (
    typeof senderEmailEntry !== "string" ||
    typeof messageEntry !== "string"
  ) {
    return {
      error: "Invalid form data. Sender email and message must be strings.",
    }
  }

  // Now senderEmail and message are guaranteed to be strings
  const senderEmail = senderEmailEntry
  const message = messageEntry

  // Server Side Validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    }
  }
  let data
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ayushm231@gmail.com",
      subject: "Message from contact from",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    })
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }
  return {
    data,
  }
}
