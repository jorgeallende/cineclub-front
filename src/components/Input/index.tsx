import { InputProps } from './types'

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-white font-title text-sm font-semibold">
        {props.label}
      </label>
      {!props.variant ||
        (props.variant == 'default' && (
          <input
            type={props.type}
            name=""
            id=""
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
        ))}
      {props.variant === 'birthday' && (
        <div className="flex justify-between gap-8">
          <input
            placeholder="Dia"
            type={props.type}
            name=""
            value={props.day as number}
            onChange={e => {
              const input = e.target as HTMLInputElement
              if (input.value.length > 2) {
                if (props.variant === 'birthday') {
                  props.dayCallback(parseInt(input.value.slice(0, 2)))
                  input.value = input.value.slice(0, 2)
                }
              } else {
                if (props.variant === 'birthday') {
                  props.dayCallback(parseInt(input.value))
                }
              }
            }}
            id=""
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
          <input
            placeholder="Mês"
            type={props.type}
            value={props.month as number}
            onChange={e => {
              const input = e.target as HTMLInputElement
              if (input.value.length > 2) {
                if (props.variant === 'birthday') {
                  props.monthCallback(parseInt(input.value.slice(0, 2)))
                  input.value = input.value.slice(0, 2)
                }
              } else {
                if (props.variant === 'birthday') {
                  props.monthCallback(parseInt(input.value))
                }
              }
            }}
            name=""
            id=""
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
          <input
            placeholder="Ano"
            type={props.type}
            value={props.year as number}
            onChange={e => {
              const input = e.target as HTMLInputElement
              if (input.value.length > 4) {
                if (props.variant === 'birthday') {
                  props.yearCallback(parseInt(input.value.slice(0, 4)))
                  input.value = input.value.slice(0, 4)
                }
              } else {
                if (props.variant === 'birthday') {
                  props.yearCallback(parseInt(input.value))
                }
              }
            }}
            name=""
            id=""
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
        </div>
      )}
    </div>
  )
}

export default Input
