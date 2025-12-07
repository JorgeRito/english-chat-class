from flask import Flask, jsonify
from DataManagement import DataManager
from flask_cors import CORS

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

if __name__ == "__main__":
    app.run(debug=True)