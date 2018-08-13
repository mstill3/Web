from flask import Flask, request, render_template

app = Flask(__name__)

# @ signifies a decorator - way to wrap a function and modify its behavior
# home page of website

@app.route('/')
def index():
    return 'Method used: %s' % request.method


@app.route('/banana')
@app.route('/banana/<user>')
def banana(user=None):
    return render_template("user.html", user=user)


@app.route('/bacon', methods=['GET', 'POST'])
def bacon():
    if request.method == 'POST':
        return 'You are using POST'
    else:
        return 'You are using GET'


@app.route('/tuna')
def tuna():
    return '<h2> Tuna is good! <h2>'


@app.route('/names/<username>')
def names(username):
    return 'Hello %s!' % username


@app.route('/post/<int:pid>')
def post(pid):
    return 'Post ID is %s!' % pid


@app.route("/profiles/<name>")
def profile(name):
    return render_template("profile.html", name=name)


@app.route("/shopping")
def shopping():
    food = ["Cheese", "Tuna", "Beef"]
    return render_template("shopping.html", food=food)


if __name__ == "__main__":
    app.run(debug=True)
