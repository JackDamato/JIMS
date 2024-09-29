from flask import Flask, jsonify, request
from populateCollection import populate_collection

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    user_id = request.args.get('user_id')

    response_data = {
        'Data': populate_collection(user_id)
    }
    return jsonify(response_data)


if __name__ == '__main__':
    app.run(debug=True)


#  JAVASCRIPT GET REQUEST FOR FLASK API (user must have run "python flaskAPI.py" first):
#  axios.get('http://127.0.0.1:5000/api/data')