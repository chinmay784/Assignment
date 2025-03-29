# API Endpoints

Here are the API endpoints based on your provided code:

1. **Register User**
    - **Method:** POST
    - **Endpoint:** `/register`
    - **Handler:** `register`

2. **Login User**
    - **Method:** POST
    - **Endpoint:** `/login`
        - **Input:**  
            - **Body:**  
            - `email` (string, required): The email of the user.  
            - `password` (string, required): The password of the user.  


3. **Get Profile**
    - **Method:** GET  
        - **Endpoint:** `/profile`  
        - **Middleware:** `authMiddleWere`  
        - **Handler:** `getProfile`  
        - **Input:**  
            - **Headers:**  
                - `Authorization`: Bearer token for authentication  

4. **Upload Profile Picture**
    - **Method:** POST
        - **Endpoint:** `/upload-profile-pic`
        - **Middleware:** `authMiddleWere`
        - **Handler:** `uploadProfilePic`
        - **File Upload Middleware:** `upload.single("profilePic")`
        - **Input:**  
            - **Headers:**  
            - `Authorization`: Bearer token for authentication  
            - **Body:**  
            - `profilePic` (file, required): The profile picture file to be uploaded.  