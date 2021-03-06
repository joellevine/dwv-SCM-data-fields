from flask import Flask, render_template
App = Flask(__name__, template_folder='static')
app.config.from_object(os.environ['APP_SETTINGS'])

# decorator function
@App.route("/")
def hello():
    return render_template("index.html")


if __name__ == "__main__":
    App.run()
