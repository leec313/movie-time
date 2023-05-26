# Movie Time

Movie Time is an interactive quiz game centered around movies, featuring three distinct categories, each comprising ten questions. Every question presents the user with four options to select from. A correct answer awards the player one point, while an incorrect response increments the incorrect score counter by one. After finishing a category, players have the option to replay the same category or opt for a different one.

[Link to live site](https://leec313.github.io/movie-time/)

![Responsive Image](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/responsive.png?raw=true)


# Contents

* [**Objective**](<#objective>)
* [**User Experience**](<#user-experience-ux>)
  * [**Wireframes**](<#wireframes>)
  * [**Structure**](<#structure>)
  * [**Design**](<#design>)
    * [**Colour Palette**](<#colour-palette>)
    * [**Typography**](<#typography>)
* [**Features**](<#features>)
  * [**Existing Features**](<#existing-features>)
  * [**Future Features**](<#future-features>)
* [**Testing**](<#testing>)
* [**Deployment**](<#deployment>)
* [**Credits**](<#credits>)
  * [**Content**](<#content>)
  * [**Media**](<#media>)
* [**Acknowledgments**](<#acknowledgments>)


# **Objective**
  Portfolio Project Two aims to showcase my proficiency in JavaScript through the creation of a meticulously designed quiz game. The primary goal is to provide users with an engaging and professionally developed gaming experience. The project emphasizes the significance of thorough testing and great attention to detail to ensure a high-quality product.

# **User Experience (UX)**

  ## **Wireframes**

  The design & wireframes for this project were produced in [Balsamic Wireframe Software](https://balsamiq.com/wireframes/). This includes design prototypes for both, smaller and larger screens. The final design does differ from the initial prototype due to design developments that occurred in the process. However, the base structure has more or less been kept in mind throughout. 

  ### Mobile

  ![Mobile Wireframe](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/mobile-wireframe.png?raw=true)

  ### Desktop

  ![Desktop Wireframe](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/desktop-wireframe.png?raw=true)

  ## **Structure**

  Movie Time is a user-friendly, single-page website that offers effortless navigation. The game provides a convenient option to restart quizzes at any point, while also presenting the user with their score and highlighting incorrect answers. Its straightforward design ensures clear comprehension and enables smooth gameplay. 

  Additionally, a custom 404 page has been incorporated to handle instances where users enter an incorrect URL. This page ensures that users are provided with a helpful and user-friendly error message, guiding them back to the intended content or providing relevant navigation options.

  ## **Design**

  ### Colour Palette

  In designing the color palette for this game, the intention was to incorporate standout colors that enhance the gaming experience. The focus was primarily on the buttons, aiming to ensure clear visibility when selected and differentiation between them. The primary color chosen was green, while sea green was selected to represent the active button. For the submit button, yellow was used, which turns red when selected. This deliberate choice enables users to easily perceive the button states and proceed accordingly. Additionally, some colors were derived from the background image to maintain a cohesive and harmonious aesthetic.

  ![Colour Palette](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/palette.png?raw=true)

  ### Typography

  For the chosen fonts, I opted for [Lobster](https://fonts.google.com/specimen/Lobster) and [Poppins](https://fonts.google.com/specimen/Poppins). Lobster was specifically utilized for the title and categories sections, creating a playful and engaging vibe that aligns with the game's nature. In case Lobster is not available, a cursive font is used as a fallback. On the other hand, Poppins was selected for the remaining body text, ensuring clarity and readability for users. In the event that Poppins is not accessible, a sans-serif font is used as an alternative. By combining these fonts, the design achieves a balance between playful aesthetics and clear legibility, enhancing the overall user experience.

# **Features**

  ## **Existing Features**

  ### **Heading/Logo**

  Situated at the top of the website, there is a prominent display of the site's name accompanied by a fitting icon that seamlessly complements the overall theme.

  ![Heading](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/logo-title.png?raw=true)

  ### **Categories** 

  The categories section is thoughtfully designed to provide users with a clear and concise selection of three options. Each option represents a distinct theme, encompassing a wide array of questions and corresponding answers. This approach allows users to easily choose a category that aligns with their preferences and interests.

  ![Categories](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/categories.png?raw=true)

  ### **Welcome** 

  Upon entering the website, the welcome area invites users to select their preferred category from the visually appealing and well-organized categories section. Once a category is chosen, the quiz promptly commences, immersing users into the interactive gaming experience.

  ![Welcome](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/welcome.png?raw=true)

  ### **Current Category**

  After making a selection from the categories section, the chosen quiz category is promptly displayed to the user, providing a clear confirmation of the current quiz type they have entered. This ensures that users are aware of the specific theme they will be engaging with and sets the stage for an enjoyable and focused quiz experience.
  
  ![Current Category](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/current-category.png?raw=true)

  ### **Quiz Area** 

  The quiz area is comprised of engaging questions, multiple options for each question, a convenient next button for progression, and additional feedback for users. When a user selects an incorrect answer, the previous answer will be displayed, helping them identify their mistake. Conversely, if the user selects the correct answer, a congratulatory message will appear momentarily, enhancing their sense of achievement. The correct message will automatically vanish after a duration of 2 seconds, allowing users to focus on the subsequent questions without interruption.

  To provide variety and prevent repetition, the system generates questions and options randomly. This ensures that users won't encounter the same question order repeatedly when they choose to replay the game. By implementing random question generation, each playthrough offers a fresh and engaging experience for the user.

  ![Quiz Area](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/quiz-area.png?raw=true)

  ![Incorrect answer](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/incorrect-answer.png?raw=true)

  ![Correct answer](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/correct-answer.png?raw=true)

  ### **Score Display** 

  The score display feature provides users with an ongoing summary of their performance by presenting the number of incorrect and correct answers they have chosen throughout the quiz. This enables users to easily keep track of their score and assess their progress as they navigate through the quiz.

  ![Score Display](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/score.png?raw=true)

  ### **Restart Button**

  The restart button offers users the convenience of resetting the game and returning to the initial welcome message. By clicking on the restart button, users can easily start the game over, allowing them to engage in a fresh round of gameplay and explore different quiz categories.

  ![Restart](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/restart.png?raw=true)

  ### **Invalid Selection Popup**

  In cases where the user fails to select an option and clicks the next button, a popup alert is triggered, notifying them that they must choose an option to proceed. Upon clicking the OK button on the popup, the user is redirected back to the current question, prompting them to make a selection before progressing further. This ensures that users are reminded to provide an answer and encourages active participation in the quiz.

  ![Invalid](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/non-input.png?raw=true)

  ### **Quiz Completed**

  Once the user completes all the questions within a specific category, a congratulatory message is displayed, indicating that the quiz has come to an end. Additionally, a button is provided to allow the user to conveniently return to the homepage. This feature enables users to celebrate their accomplishment and seamlessly navigate back to explore other sections or categories of the website.

  ![Completed](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/finished.png?raw=true)

  ### **404 Page**

  The 404 page has been implemented to cater to situations where users input an incorrect URL. This dedicated page ensures that users are presented with a user-friendly error message, directing them back to the desired content.

  ![404](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/404-readme.png?raw=true)

# **Future Features**

  ### **Varying levels of difficulty**

  To enhance the challenge and provide different levels of difficulty, the quiz game would incorporate various levels that are linked to specific sets of questions. Each level presents a progressively higher level of difficulty by offering different questions with more options for the user to choose from, making it harder to select the correct answer. This approach adds complexity and depth to the gameplay, encouraging users to test their knowledge and skills as they advance through different difficulty levels.

  ### **Prizes**

  A system where users can win prizes by answering questions correctly. When a user reaches a specific number of correct answers, a popup will appear, presenting them with a prize. The prize will then be showcased in a designated area on the webpage as part of their collection.

  ### **User login/Account creation**

  The system will enable users to save their progress, allowing them to log back in and resume their game from where they left off. Additionally, it will provide them with the ability to view their collected prizes, provided the previously mentioned feature is implemented. To accommodate returning users, the quiz will need to offer a larger pool of questions and multiple levels to ensure an engaging experience each time they revisit the game.

  ### **Sound effects**

  It would be an appealing addition to include a continuous background track while the user interacts with the system. Moreover, incorporating a cheering sound effect for correct answers and a jeering sound effect for incorrect answers would enhance the user experience. To offer flexibility, a mute/unmute toggle should be provided, allowing users to control the sound effects according to their preference.

# **Testing**

# **Deployment**

## To Deploy the Project

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

  The live link can be found here - https://leec313.github.io/movie-time/

  ![deploy](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/deploy.png?raw=true)


## Local Deployment

- I also deployed the site locally by downloading the .zip file from Github to my device.
- I unzipped the file and tested each link page to make sure it opened correctly on my browser. 

![local-deploy](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/local.png?raw=true)

## To Fork the Repository 

- A copy of the GitHub Repository can be made by forking the GitHub account. This copy can be viewed and changes can be made to the copy without affecting the original repository. Take the following steps to fork the repository;

  1. Log in to **GitHub** and locate the [repository](https://github.com/leec313/movie-time).
  2. On the right-hand side of the page inline with the repository name is a button called **'Fork'**, click on the button to create a copy of the original repository in your GitHub Account.

  ![fork](https://github.com/leec313/movie-time/blob/main/assets/images/readme%20images/fork.png?raw=true)

# **Credits**

  ## **Content**
  
  ## **Technologies Used**

  - [HTML5](https://en.wikipedia.org/wiki/HTML) - Content & structure
  - [CSS3](https://en.wikipedia.org/wiki/CSS) - Styling
  - [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Game functionality
  - [Gitpod](https://www.gitpod.io/#get-started) - Used to create and edit the website.
  - [GitHub](https://github.com/) - Used to host and deploy the website.
  - [GitBash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) - Terminal used to push changes to the GitHub repository.
  - [a11y](https://color.a11y.com/Contrast/) - Used to test the contrast and accessibility.
  * [Font Awesome](https://fontawesome.com/) for the icon used in the heading/logo
  * [TinyPNG](https://tinypng.com/) for compressing the bakground image
  * Fonts used - [Lobster](https://fonts.google.com/specimen/Lobster) and [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts
  * [Balsamic Wireframe Software](https://balsamiq.com/wireframes/) for initial design layout
  * [responsive-readme.png - Used in readme to preview the site on all screen sizes](https://ui.dev/amiresponsive)
  * [Used this tutorial on how to hide the "correct!" text after a user gets an answer right](https://bobbyhadz.com/blog/javascript-hide-element-after-few-seconds#:~:text=To%20hide%20an%20element%20after%20a%20few%20seconds%3A&text=Use%20the%20setTimeout%20method%20to,display%20property%20to%20none%20)
  * [Colour Palette - coolors.co](https://coolors.co/20b2aa-4caf50-b63b2a-ecae4b-ffffff)

  ## **Media**
  [Background Image - Gotten from Pixabay](https://pixabay.com/photos/movie-theater-curtain-theatre-movie-4609877/)
 

  # **Acknowledgments**

  This project represents the culmination of my efforts during the Full Stack Software Development (E-commerce Applications) course at [Code Institute](https://codeinstitute.net/ie/). Serving as my Portfolio Project 2, it allowed me to delve into the vast world of JavaScript and acquire invaluable knowledge along the way. Throughout this journey, I have acquired a plethora of new skills, making me immensely proud of the final outcome. The process has been incredibly enlightening, providing me with a comprehensive understanding of various concepts and techniques. I would like to extend my appreciation to my Mentor, Rory Patrick, and my Cohort, Alan Bushell, as well as the entire Code Institute community who have been instrumental in providing me with invaluable guidance and support throughout this journey. Their collective wisdom and assistance have been so important in helping me navigate through the challenges and complexities of this project. I am deeply grateful for the sense of camaraderie and collaboration within the Code Institute community, as it has fostered an environment where I could seek help and guidance whenever needed. I am truly fortunate to have had such a supportive network of individuals who have contributed to my growth and learning as a Full Stack Software Developer.