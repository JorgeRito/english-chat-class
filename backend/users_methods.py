import pandas as pd 
import random
import string
filepath = r"C:\Users\ADMIN\Documents\GitHub\english-chat-class\backend\users_ecc.csv"

def create_user(request):
    data = request
    nombre = data["nombre_completo"]
    telefono = data["telefono"]
    nivel = data["nivel"]
    plan = data["plan"]
    mod = data["mod"]
    status = data["status"]
    try:
        save_user_to_file(nombre, telefono, nivel, plan, mod, status)
        return {"status": "ok"}
    except:
        return {"Error saving user"}

def generate_random_id(lenght=4):
    characters = string.digits
    randId = ''.join(random.choice(characters) for i in range(lenght))
    return randId

def open_users_file():
    try:
        df = pd.read_csv(filepath)
        df.fillna("", inplace=True)
        return df
    except:
        return "Error reading file"

def save_user_to_file(nombre, telefono,nivel, plan, mod, status):
    df = open_users_file()
    randId = generate_random_id()
    while randId in df["id"].values:
        randId = generate_random_id()
    if isinstance(df, str):
        df = pd.DataFrame(columns=["nombre_completo", "telefono"])
    new_user = {
        "id": randId,
        "nombre_completo": nombre, 
        "telefono": telefono,
        "nivel": nivel,
        "plan": plan,
        "mod": mod,
        "status": status
        }
    df = pd.concat([df, pd.DataFrame([new_user])], ignore_index=True)
    df.to_csv(filepath, index=False)

def get_users():
    df = open_users_file()
    if isinstance(df, str):
        return {"Error reading users file"}
    users_list = df.to_dict(orient="records")
    return users_list

def delete_user(user_id):
    df = open_users_file()
    if isinstance(df, str):
        return {"Error reading users file"}
    df = df[df["id"] != int(user_id)]
    df.to_csv(filepath, index=False)
    # print("Saving CSV at:", filepath)
    # print("Rows after delete:", len(df))
    return {"status": "ok"}

def update_user(id, update_data):
    df = open_users_file()
    for column in update_data.keys():
        df.loc[df["id"] == int(id), column] = update_data[column]
    df.to_csv(filepath, index=False)
    return {"status": "ok"}

if __name__ == "__main__":
    delete_user(8807)