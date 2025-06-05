from src import create_app

if __name__ == '__main__':

    # TODO: setup create_app in an init.py file once we've hooked everything else up
    app = create_app()

    app.run(debug=True)
