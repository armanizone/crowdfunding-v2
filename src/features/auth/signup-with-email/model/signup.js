import { pb } from 'shared/api'
import * as yup from 'yup'

export const signupSchema = yup.object({
  name: yup.string().min(2, "Слишком короткое имя").max(30, 'Слишком длинное имя').required("Имя обязательно для заполнения"),
  email: yup.string().email("Неверный формат почты").required("Почта обязательна для заполнения"),
  password: yup.string().min(8, "Минимум 8 символов").max(20, "Максимум 20 символов").required("Пароль обязателен для заполнения"),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
})

export async function signupWithEmail (data) {
 try {
  return await pb.collection('users').create({
    ...data,
    emailVisibility: true,
    passwordConfirm: data.password
  })
  .then(async (res) => {
    await pb.collection('users').authWithPassword(res.email, data.password)
  })
 } catch (err) {
  throw err
 }
}