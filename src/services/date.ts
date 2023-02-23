export function diffBetweenDates(initialDate: Date, finalDate: Date) {

    const diff = (finalDate.getTime() - initialDate.getTime());
    const totalD =  Math.abs(Math.floor(diff/1000));
    const yearToTimestramp = 365*60*60*24
    let years = Math.floor(totalD / (yearToTimestramp));
    let months = Math.floor((totalD - years*yearToTimestramp) / (30*60*60*24));
    let days = Math.floor((totalD - years*yearToTimestramp - months*30*60*60*24)/ (60*60*24));
    
    return {
        "years": years,
        "months": months,
        "days": days
    }
}