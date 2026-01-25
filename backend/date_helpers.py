from datetime import date, timedelta
import locale

MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
         "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

try: 
    locale.setlocale(locale.LC_TIME, 'es_ES.UTF-8')
except:
    locale.setlocale(locale.LC_TIME, "")

def get_month_weeks(year: int):
    today = date.today()

    start = date(year, 1,1)
    start -= timedelta(days=start.weekday())

    result = []

    while start.year <= year:
        lunes = start
        sabado = start + timedelta(days=5)

        if lunes.year == year or sabado.year == year:
            if sabado >= today:
                month = lunes.strftime("%B").capitalize()
                day_start = lunes.day
                day_end = sabado.day

                result.append(f"{month}: {day_start} - {day_end}")
        start += timedelta(days=7)

    return result

def get_week_range(date: date):
    week_start = date - timedelta(days=date.weekday())
    week_end = week_start + timedelta(days=5)
    return (week_start, week_end)

def week_label(week_start: date, week_end: date):
    month = week_start.strftime("%B").capitalize()
    day_start = week_start.day
    day_end = week_end.day
    return f"{month}: {day_start} - {day_end}"

if __name__ == "__main__":
    # weeks = get_month_weeks(2026)
    # for week in weeks:
    #     print(week)

    print(week_label(date(2024,3,4), date(2024,3,9)))