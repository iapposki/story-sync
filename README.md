# Book Recommendation App


To setup server, open terminal in server folder and execute ```npm install```. To start the server, run ```npm start```. You can than simply open index.html in the root folder to interact with the web interface.

## Notes :

- The backend logic is based on translating the personalities input of the user to their corresponding genre preferences. The research paper used for this is [Predicting Personality from Book Preferences with User-Generated Content Labels by Ng Annalyn, Maarten W. Bos, Lionid Sigal, and Boyang Li](https://arxiv.org/ftp/arxiv/papers/1707/1707.06643.pdf).
- The books are first added in vectorized form with vector values corresponding to the genres they belong to. After the server gets the user personality, it goes through the books and find the one which has the least deviation from the user preference using heap sort.
