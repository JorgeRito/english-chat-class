from datetime import datetime
import pandas as pd
import date_helpers
import uuid

filepath = r"C:\Users\ADMIN\Documents\GitHub\english-chat-class\backend\Schedule_db.csv"

def open_file(filepath:str=filepath):
    dataframe = pd.read_csv(filepath)
    return dataframe

def read_schedule():
    df = open_file()
    data = df.to_dict(orient="records")
    return data

def create_appointment(request):
    ap_id = int(uuid.uuid4())
    full_name = request["student"]
    time = request["time"]
    full_date = request["fullDate"]
    week_start, week_end = date_helpers.get_week_range(datetime.strptime(full_date, "%Y-%m-%d").date())
    week = date_helpers.week_label(week_start, week_end)
    mod = request["mod"]
    teacher = "TBD"
    try:
        save_appointment_to_file(
            ap_id,
            full_name,
            time,
            full_date,
            week_start,
            week_end,
            week,
            mod,
            teacher)
        return {"status":"ok"}
    except:
        return {"Error adding appointment"}

def save_appointment_to_file(
            ap_id,
            full_name,
            time,
            full_date,
            week_start,
            week_end,
            week,
            mod,
            teacher):
    data = open_file()
    new_appointment = {
        "ap_id": ap_id,
        "full_name": full_name,
        "time": time,
        "full_date": full_date,
        "week_start": week_start,
        "week_end": week_end,
        "week": week,
        "mod": mod,
        "teacher": teacher,
    }
    print(new_appointment)
    data = pd.concat([data, pd.DataFrame([new_appointment])], ignore_index=True)
    data.to_csv(filepath, index=False)

def read_appointments_by_week(week_label: str):
    def separate_by_days(appointments: pd.DataFrame):
        days = {}
        appointments["full_date"] = pd.to_datetime(appointments["full_date"])
        for day in range(0,6):
            day_df = appointments[appointments["full_date"].dt.weekday == day].sort_values(by=['time'])
            days[day] = day_df.to_dict(orient="records")
        return days
    data = open_file()
    filtered_data = data.loc[data["week"] == week_label]
    days = separate_by_days(filtered_data)
    return days

if __name__ == "__main__":
    print(read_appointments_by_week("Enero: 26 - 31"))