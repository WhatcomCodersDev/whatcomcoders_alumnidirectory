import logging 

from google.cloud import firestore 
from app.utils import setup_google_auth_flow
from flask_jwt_extended import JWTManager

firestore_db = firestore.Client()
flow = setup_google_auth_flow()
jwt_manager = JWTManager()


logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s', datefmt='%d/%m/%Y %H:%M:%S')
handler = logging.StreamHandler()
handler.setFormatter(formatter)
logger.addHandler(handler)

file_handler = logging.FileHandler('application.log')
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)
