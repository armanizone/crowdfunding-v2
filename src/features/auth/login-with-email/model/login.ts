
import { pb } from 'shared/api'
import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup.string().email("Неверный формат почты").required("Почта обязательна для заполнения"),
  password: yup.string().min(8, "Минимум 8 символов").max(14, "Максимум 14 символов").required("Пароль обязателен для заполнения"),
})

export async function loginWithEmail (data) {
  try {
    return await pb.collection('users').authWithPassword(data.email, data.password)
  } catch (err) {
    throw err
  }
}

