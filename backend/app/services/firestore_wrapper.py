import collections
import logging
import uuid

collections.Iterable = collections.abc.Iterable
 

class FirestoreDBWrapper:
    def __init__(self, firestore_client):
        self.firestore_client = firestore_client 

    def store_user_in_db(self, user_info: dict, uuid) -> None:
        """Stores the user info in Firestore"""
        user_ref = self.firestore_client.collection('users').document(uuid)
        user_ref.set(user_info)

    
    def get_user_uuid_by_email(self, email: str) -> str:
        """Retrieves user uuid from Firestore by email"""
        user_ref = self.firestore_client.collection('users').where('email', '==', email)
        docs = user_ref.get()

        for doc in docs:
            if doc.exists:
                return doc.id

        return None
    
    def get_user_data_by_slug(self, slug: str) -> dict:
        """Retrieves user data from Firestore by slug"""
        user_ref = self.firestore_client.collection('users').document(slug)
        user_data = user_ref.get()

        if user_data.exists:
            return user_data.to_dict()
        else:
            return None   
        
    def get_user_doc_by_email(self, email: str) -> dict:
        """Retrieves user data from Firestore by email."""
        # Query the 'users' collection for documents where the 'email' field matches the provided email
        user_query = self.firestore_client.collection('users').where('email', '==', email)
        docs = user_query.get()

        for doc in docs:
            if doc.exists:
                return doc

        return None
    
    def get_user_data_by_uuid(self, uuid: str) -> dict:
        """Retrieves user data from Firestore by uuid"""
        user_ref = self.firestore_client.collection('users').document(uuid)
        user_data = user_ref.get()

        if user_data.exists:
            return user_data.to_dict()
        else:
            return None
    
    def get_profile_by_slug(self, user_slug: str) -> dict:
        """Retrieves user data from Firestore by slug"""
        user_ref = self.firestore_client.collection('users').where('user_slug', '==', user_slug)
        docs = user_ref.get()

        # Iterate over the query results
        for doc in docs:
            if doc.exists:
                print(doc.to_dict())
                # Return the whole document data
                return doc.to_dict()
        

        # Return None if no document matches the query
        return None

    def get_all_users(self) -> list:
        """Retrieves all users from Firestore"""
        users = self.firestore_client.collection('users').stream()
        users_list = []
        for user in users:
            users_list.append(user.to_dict())
        return users_list
    
    def update_user_info(self, data: dict) -> None:
        """Updates user info in Firestore based on email."""
        email = data.get('email')
        
        # Check if email is provided
        if email is None:
            logging.error("Failed to update user info: 'email' is missing.")
            return

        users_ref = self.firestore_client.collection('users')
        
        # Query for the user document by email
        query_ref = users_ref.where('email', '==', email).limit(1)
        docs = query_ref.stream()

        doc_found = None
        for doc in docs:
            doc_found = doc
            break

        if doc_found:
            # Update the document with new data
            users_ref.document(doc_found.id).update(data)
            logging.info(f"User info updated successfully for: {email}")
        else:
            logging.warning(f"No user found with email: {email}. Unable to update user info.")

