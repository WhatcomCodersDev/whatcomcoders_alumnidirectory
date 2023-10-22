from flask import Flask
from flask_cors import CORS
from config import *
from app.routes import auth_routes, user_routes
from app.handlers import error_handlers
from app.services import firestore_db, flow_manager, jwt_manager, logger_manager

environment = os.environ.get('FLASK_ENV', default='development')


def create_flask_app() -> Flask:
    app = Flask(__name__)
    if environment == 'development':
        app.config.from_object('config.DevelopmentConfig')
    elif environment == 'production':
        app.config.from_object('config.ProductionConfig')

    app.register_blueprint(auth_routes.bp)
    app.register_blueprint(user_routes.bp)
    error_handlers.register_error_handlers(app)

    app.secret_key = SECRET_KEY
    CORS(app, resources={r"/*": {
        "origins": [
            "http://127.0.0.1:4000",
            "http://127.0.0.1:3000",
            "http://localhost:3000", 
            "http://localhost:4000",
            "http://localhost:8080",
            "https://gothic-sled-375305.firebaseapp.com",
            "https://gothic-sled-375305.web.app"],
        "supports_credentials": True}})

    app.config["JWT_SECRET_KEY"] = JWT_SECRET_KEY
    app.config["JWT_TOKEN_LOCATION"] = JWT_TOKEN_LOCATION
    jwt_manager.init_app(app)

    return app

app = create_flask_app()