import pandas as pd 
import re
from datetime import datetime
# "C:\Users\061571\Downloads\SCHEDULE TEMP GEN.xlsx"

class DataManager:
    def __init__(self, file_path:str = r"C:\Users\ADMIN\Documents\GitHub\english-chat-class\backend\schedule_DB.xlsx"):
        #Change this path to the one drive path
        self.path = file_path

    def read_data(self):
        df = pd.ExcelFile(self.path)
        return df

    def getSheetNames(self, df:pd.ExcelFile):
        sheet_names = df.sheet_names
        return sheet_names
    
    def get_sheet_data(self, df:pd.ExcelFile ,sheet_name:str):
        data = df.parse(sheet_name)
        data.fillna("0", inplace=True)
        return data

    def students_per_hour(self,df:pd.DataFrame):
        days = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"]
        results = {}
        pattern = re.compile(r"([OP])-(\d{1,2}(?:AM|PM))")
        for day in days:
            for idx, value in df[day].astype(str).items():
                match = pattern.search(value)
                if not match:
                    continue
                mod = match.group(1) # O o P
                time = match.group(2) # 10AM, 3PM

                student = df.loc[idx, "ALUMNO"]
                level = df.loc[idx, "NIVEL"]

                if time not in results.keys():
                    results[time] = {}
                
                if day not in results[time].keys():
                    results[time][day] = {}
                
                results[time][day][student] = {
                    "modality": mod,
                    "level": level
                }
        return results

    def parse_time(self, time_str: str) -> int:
        """Convierte '10AM' o '3PM' a minutos desde medianoche para ordenar"""
        match = re.match(r'(\d{1,2})(AM|PM)', time_str)
        if not match:
            return 0
        hour = int(match.group(1))
        period = match.group(2)
        
        if period == 'PM' and hour != 12:
            hour += 12
        elif period == 'AM' and hour == 12:
            hour = 0
        
        return hour * 60  # Convertir a minutos

    def json_structure(self, data:dict):
        json = {}
        for day, schedules in data.items():
            json[day] = schedules
        return json

    def main(self):
        excel = self.read_data()
        sheet_names = self.getSheetNames(excel)
        data = self.get_sheet_data(df=excel, sheet_name=sheet_names[0])
        excel.close()
        time_json = self.students_per_hour(data)
        
        # Ordenar por hora (de más temprana a más tarde)
        sorted_times = sorted(time_json.keys(), key=self.parse_time)
        time_json = {time: time_json[time] for time in sorted_times}
        
        print(time_json)
        return time_json
if __name__ == "__main__":
    data_manager = DataManager()
    data_manager.main()