from flask import Flask, request, jsonify, render_template
import recomender

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'Invalid JSON data'}), 400

    playlist_link = data.get('playlistLink')
    emotion = data.get('emotion')

    print(playlist_link)

    # playlist_link = request.form.get('playlist_link')
    # emotion = request.form.get('emotion')

    recommendations = recomender.run(playlist_link, emotion)
    return jsonify(recommendations.to_dict())


if __name__ == '__main__':
    app.run(debug=True)
