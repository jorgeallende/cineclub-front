import { InputProps } from './types'

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full mb-3">
      <label className="text-white font-title text-sm mb-1 font-normal">
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
            {...props}
            className={`h-[40px] text-sm bg-system-white-light rounded-md w-full text-system-black px-4 font-title font-normal outline outline-2 outline-system-white hover:outline-system-orange hover:outline focus:outline-slate-100 ${
              props.className as string
            }`}
          />
        ))}

      {/*  */}
      {props.variant === 'birthday' && (
        <div className="flex justify-between gap-8">
          <input
            {...props}
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
            className="h-[40px] text-sm bg-system-white-light rounded-md w-full text-system-black px-4 font-title font-normal"
          />
          <input
            {...props}
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
            className="h-[40px] text-sm bg-system-white-light rounded-md w-full text-system-black px-4 font-title font-normal"
          />
          <input
            {...props}
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
            className="h-[40px] text-sm bg-system-white-light rounded-md w-full text-system-black px-4 font-title font-normal"
          />
        </div>
      )}
    </div>
  )
}

export default Input
