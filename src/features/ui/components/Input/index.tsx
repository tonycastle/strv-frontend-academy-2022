import type { FC, InputHTMLAttributes } from 'react'
import { useState } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const Input: FC<Props> = ({
  label,
  name,
  type,
  error = '',
  ...rest
}) => {
  const [isPasswordShown, togglePassword] = useState(false)
  const inputType = isPasswordShown ? 'text' : type

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={inputType} {...rest} />

      {type === 'password' && (
        <button
          type="button"
          onClick={() => togglePassword(!isPasswordShown)}
          aria-label="Display password text"
          aria-invalid={error === '' ? false : true}
        >
          &#128065;
        </button>
      )}
    </div>
  )
}
