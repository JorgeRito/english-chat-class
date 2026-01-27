from datetime import datetime
import pandas as pd
import date_helpers
import uuid
import os
import users_methods
    
def get_filepath():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    parent_dir = os.path.dirname(current_dir)
    filepath = os.path.join(parent_dir, "backend/Schedule_db.csv")
    return filepath

filepath = get_filepath()

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
    student_id = request["student"]
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
    # print(new_appointment)
    data = pd.concat([data, pd.DataFrame([new_appointment])], ignore_index=True)
    data.to_csv(filepath, index=False)

def read_appointments_by_week(week_label: str):
    def get_schedule_hours(data: pd.DataFrame):
        temp = data.sort_values(by="time")
        hours = temp["time"].unique().tolist()
        return hours
    
    def set_data(data: pd.DataFrame, hours:list):
        schedule_data = {}
        for hour in hours:
            if hour not in schedule_data.keys():
                schedule_data[hour] = {}
            for day in range(0,6):
                if day not in schedule_data[hour].keys():
                    schedule_data[hour][f"{day}"] = []
                list_of_appointments = data.loc[(data["time"] == hour) & (data["full_date"].dt.weekday == day)]
                schedule_data[hour][f"{day}"] = list_of_appointments[["ap_id","full_name","mod","teacher"]].to_dict(orient="records")
        
        return schedule_data
            
    data = open_file()
    data["full_date"] = pd.to_datetime(data["full_date"])
    filtered_data = data.loc[data["week"] == week_label]
    hours = get_schedule_hours(filtered_data)
    op_schedule = set_data(filtered_data, hours)
    # pprint.pprint((set_data(filtered_data, hours), hours), indent=4)
    return op_schedule


if __name__ == "__main__":
    read_appointments_by_week("Febrero 2 - 7")