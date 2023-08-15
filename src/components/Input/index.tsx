import { InputProps } from './types'

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-white font-title text-xs font-semibold">
        {props.label}
      </label>
      {props.variant == undefined ||
        (props.variant == 'default' && (
          <input
            onChange={e => {
              const input = e.target as HTMLInputElement
              if (props.variant === 'default') {
                props.inputCallback(input.value)
              }
            }}
            type={props.type}
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
        ))}

      {/*  */}
      {props.variant === 'birthday' && (
        <div className="flex justify-between gap-8">
          <input
            placeholder="Dia"
            type={props.type}
            value={props.day == -1 ? '' : (props.day as number)}
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
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
          <input
            placeholder="Mês"
            type={props.type}
            value={props.month == -1 ? '' : (props.month as number)}
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
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
          <input
            placeholder="Ano"
            type={props.type}
            value={props.year == -1 ? '' : (props.year as number)}
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
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
        </div>
      )}
    </div>
  )
}

export default Input
