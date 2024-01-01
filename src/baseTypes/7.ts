/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}

function isWeekend(dayOfWeek: Day):boolean {
  if (dayOfWeek === Day.SAT || dayOfWeek === Day.SUN)
    {
      return true;
    }
    return false;
  }
