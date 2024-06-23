from flask import Flask, send_from_directory, jsonify

app = Flask(__name__, static_folder='dist', static_url_path='')

# Serve the index.html file (entry point)
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Example API route
@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)