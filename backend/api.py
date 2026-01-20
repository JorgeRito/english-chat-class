from flask import Flask, jsonify, request
from DataManagement import DataManager
from flask_cors import CORS
import users_methods as UM
import schedule_methods as SM
app = Flask(__name__)
CORS(app)

data_manager = DataManager()
@app.route("/")
def index():
    return "This is the API for the English Chat Class"

@app.route("/get_data")
def get_data():
    data = data_manager.main()
    return jsonify(data)
    return None

@app.route("/api/create_user", methods=["POST"])
def create_user():
    response = UM.create_user(request.json)
    return jsonify(response)


@app.route("/api/get_users", methods=["GET"])
def get_users():
    response = UM.get_users()
    return jsonify(response)

@app.route("/api/delete_user/<user_id>", methods=["DELETE"])
def delete_user(user_id):
    response = UM.delete_user(user_id)
    return jsonify(response)

@app.route("/api/update_user/<user_id>", methods=["PUT"])
def update_user(user_id):
    update_data = request.json
    response = UM.update_user(user_id, update_data)
    return jsonify(response)

@app.route("/api/schedule/read_schedule")
def read_schedule():
    data = SM.read_schedule()
    return jsonify(data)

@app.route("/api/schedule/create_appointment", methods=["POST"])
def create_appointment():
    response = SM.create_appointment(request.json)
    return jsonify(response)
    

if __name__ == "__main__":
    app.run(debug=True)