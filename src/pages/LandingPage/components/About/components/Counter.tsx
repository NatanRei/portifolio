import { diffBetweenDates } from "../../../../../services/date"
import { CounterContainer, Separator } from "./Counter.styles"

interface CounterProps {
    initialDate: Date
}

export function Counter({initialDate}: CounterProps) {

const diffDate = diffBetweenDates(initialDate, new Date())
const years = String(diffDate["years"]).padStart(2, '0')
  const months = String(diffDate["months"]).padStart(2, '0')
  const days = String(diffDate["days"]).padStart(2, '0')

  return (
    <div>
    <CounterContainer>
      <div>
        <div>
        <span>{years[0]}</span>
        <span>{years[1]}</span>
        </div>
        <i>anos</i>
      </div>
      <Separator>:</Separator>
      <div>
      <div>
        <span>{months[0]}</span>
        <span>{months[1]}</span>
        </div>
        <i>meses</i>
      </div>
      <Separator>:</Separator>
      <div>
      <div>
        <span>{days[0]}</span>
        <span>{days[1]}</span>
        </div>
        <i>dias</i>
      </div>
    </CounterContainer>
    

    
    </div>
  )
}