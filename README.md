# JIM
HackGT 11 Project with Jack D, Ivanka S, and Maya A.

Inspiration:

We realized as freshmen, that making friends in college can be tough, especially when you're surrounded by unfamiliar faces. It's hard to find people who share your interests and personality. We always wished there was a platform to help connect with like-minded individuals, making it easier to form meaningful friendships from the start. Therefore the creation of this website.

What it does:

Link'd is a website where you can make a profile with a little blurb about yourself and your personality, and we take that and run it through artificial intelligence to gather your similarity with other profiles on the website. On the main page, you have a customized for you page of the most similar to least similar profiles (as you scroll down). On those profiles, you would have their Instagram username which you can search for and befriend them.

How we built it:

We incorporated the use of AI to run a cosine similarity test which essentially runs through everyone's bios and compares it with other profiles on the page. We used MongoDB as our database where we stored the information of all the users and their similarities to each other. We primarily used python for the backend and javascript/html/css for the frontend of the project. 

Challenges we ran into:

Some challenges we went into were the specifications and generalization problems involving using AI to calculate the similarities between two people. We also hit a wall in the front end as it was hard to connect to the backend and work around MongoDB using proxies.

Accomplishments we are proud of:

We are proud of finally connecting the frontend, backend, and mongoDB successfully. We are also proud that the similarities test works. Lastly, we are proud that we put this together and we are proud of each other!

What we learned:

We learned a lot throughout this process, we refreshed our skills in Python, javascript, HTML, and CSS. We also learned how to implement the use of AI into our algorithms, accessing MongoDB from the front end, and how to connect the front and back end through the use of Flask.

What is next for Link'd

Next, after the people, would be adding an event section to the website where people can post activities they need a partner for or need friends for, through the event section people who see it can sign up and make friends easily.

Built with:
javascript, css, html, python, BERT
