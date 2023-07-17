export type InputProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  (
    | {
        variant?: 'birthday'
        day: number | null
        month: number | null
        year: number | null
        dayCallback: (day: number) => void
        monthCallback: (month: number) => void
        yearCallback: (year: number) => void
      }
    | {
        variant?: 'default'
        inputValue: string
        inputCallback: (value: string) => void
      }
  )
