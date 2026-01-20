import pandas as pd

filepath = r"C:\Users\ADMIN\Documents\GitHub\english-chat-class\backend\Schedule_db.csv"

def open_file(filepath:str=filepath):
    dataframe = pd.read_csv(filepath)
    return dataframe

def read_schedule():
    df = open_file()
    appointments = df.to_dict(orient="records")
    return appointments

def create_appointment(request):
    id = request["id"]
    full_name = request["full_name"]
    date = request["date"]
    time = request["time"]
    teacher = request["teacher"]
    try:
        save_appointment_to_file(id,full_name,date,time,teacher)
        return {"status":"ok"}
    except:
        return {"Error adding appointment"}

def save_appointment_to_file(id,full_name,date,time,teacher):
    data = open_file()
    new_appointment = {
        "id": id,
        "full_name": full_name,
        "date": date,
        "time": time,
        "teacher": teacher
    }
    data = pd.concat([data, pd.DataFrame([new_appointment])], ignore_index=True)
    data.to_csv(filepath, index=False)


if __name__ == "__main__":
    print(read_schedule())