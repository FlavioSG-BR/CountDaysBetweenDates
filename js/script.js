function daysBetweenDates(year1, month1, day1, year2, month2, day2) {
    const daysBetweenYears = DaysBetweenYears(year1, year2);
    const daysBetweenMonths = DaysBetweenMonths(month1, month2, year1, year2);
    const daysBetweenDays = DaysBetweenDays(year1, year2, month1,month2, day1, day2);
    const daysToCount = daysBetweenDays + daysBetweenMonths + daysBetweenYears;
    
    return daysToCount;
    }

const yearsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const yearsDaysBiss = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function DaysBetweenYears(year1, year2) {
    const years = year2 - year1
    let yearsToCount = [];
    for(i = 0; i <= years; i++){
        yearsToCount.push(year1+i)
    }

    yearsToCount.pop()
    yearsToCount.shift()
    let days = 0
    yearsToCount.map(year => {
        IsBissexto(year)? days += 366: days += 365;
    })
    return days
  }

  function DaysBetweenMonths(month1, month2, year1, year2) {
    let days = 0
    // Mesmo ano
    if(year1===year2){
        const months = month2 - month1 - 1;
        if(months === 0) return 0
        
        for(i > (month1); i < (month2 - 1); i++ ) {
            IsBissexto(year1)? days += yearsDaysBiss[i]: days += yearsDays[i]
        }
        return days
    }
    // Anos diferente
    if(year1!==year2) {
        for(i = (month1 + 1); i <= 12; i++ ) {
            IsBissexto(year1)? days += yearsDaysBiss[i - 1]: days += yearsDays[i - 1]
        }
        for(i = 0; i < (month2 - 1); i++ ) {
            IsBissexto(year2)? days += yearsDaysBiss[i]: days += yearsDays[i]
        }
        return days;
    }
  }

  
  function DaysBetweenDays(year1, year2, month1,month2, day1, day2) {
    if((month1 === month2) && (year1 === year2)) {
      const days = day2 - day1
      return days;
    }
    const lasDay = IsBissexto(year1)? (yearsDaysBiss[month1 - 1] - day1) : (yearsDays[month1 - 1] - day1); 
    console.log({lasDay})
    console.log({day2})
    const days = lasDay + day2
    return days
  }
  
  
  function IsBissexto(year) {
      const isBissexto = (year%4 === 0)? (year%100 === 0? (year%400 === 0? true : false): true ): false;
      return isBissexto
  }

  function test() {
      const testCases = [[[2012,1,1,2012,2,28], 58],
                        [[2012,1,1,2012,3,1], 60],
                        [[2011,6,30,2012,6,30], 366],
                        [[2011,1,1,2012,8,8], 585 ],
                        [[1900,1,1,1999,12,31], 36523],
                        [[2011,01,03,2011,01,08],5 ]];
    testCases.forEach(([args, answer]) => {
      const result = daysBetweenDates(...args);
      console.log({result})
      console.log({answer})
      if (result != answer) {
        console.log(`Test with data: ${args}, failed`);
      } else {
        console.log("Test case passed!");
      }
    });
  }
  
  test();