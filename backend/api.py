from flask import Flask, jsonify, request
from DataManagement import DataManager
from flask_cors import CORS
import users_methods
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

@app.route("/api/create_user", methods=["POST"])
def create_user():
    response = users_methods.create_user(request.json)
    return jsonify(response)


@app.route("/api/get_users", methods=["GET"])
def get_users():
    response = users_methods.get_users()
    return jsonify(response)

@app.route("/api/delete_user/<user_id>", methods=["DELETE"])
def delete_user(user_id):
    response = users_methods.delete_user(user_id)
    return jsonify(response)

@app.route("/api/update_user/<user_id>", methods=["PUT"])
def update_user(user_id):
    update_data = request.json
    response = users_methods.update_user(user_id, update_data)
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)