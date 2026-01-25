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
    appointments = df.to_dict(orient="records")
    return appointments

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
        "date": full_date,
        "week_start": week_start,
        "week_end": week_end,
        "week": week,
        "mod": mod,
        "teacher": teacher,
    }
    data = pd.concat([data, pd.DataFrame([new_appointment])], ignore_index=True)
    data.to_csv(filepath, index=False)


if __name__ == "__main__":
    print(uuid.uuid4())