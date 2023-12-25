# Project01 - Brainster Labs

## Project Description

Brainster Labs is a web platform designed for Brainster, providing a space to showcase projects created by students from academies of programming, marketing, and design. The platform consists of three main pages: Index, Hire Students, and Coming Soon.

### 1. Index Page

The Index Page serves as the main landing page, featuring a navigation bar, banner, and filters. Users can filter projects by academies (programming, marketing, design) to view works specific to each field. The layout is structured using HTML, while CSS and SCSS are utilized for styling. The SCSS is organized into components, abstracts (for variables and mixins), and a core folder (for reboot code, custom fonts, and common elements). JavaScript is employed to enhance user interaction, enabling dynamic filtering based on academy selection.

### 2. Hire Students Page

Accessible through a button in the navbar, the Hire Students Page allows potential employers to connect with Brainster students. It includes a navigation bar, footer, and a form requesting information such as name, company name, email, telephone number, and preferred academy for hiring. JavaScript is used to create a custom dropdown input for academy selection and to validate the form input.

### 3. Coming Soon Page

The Coming Soon Page is a teaser for upcoming features, accessible through the navbar. Each academy has its own page, currently under development. The page includes a banner with a message indicating ongoing development and a simple form for users to submit their email and receive notifications when the page is ready.

## Technologies Used

The project incorporates a mix of technologies to achieve its functionality and design.

1. **HTML:** Used for structuring the content of the three pages, defining the layout and elements.

2. **CSS and SCSS:** Responsible for styling and formatting the layout. SCSS is organized into components, abstracts, and a core folder for maintainability and scalability.

3. **JavaScript:** Integrated for dynamic functionality across the project, including:
    - Filtering projects based on academy selection.
    - Implementing pagination for mobile devices in the project cards.
    - Creating a custom dropdown input for academy selection in the hiring form.
    - Adding validation to the form for hiring students.

4. **Git:** Employed for version control and project management. The Git process begins by cloning the remote repository locally. For each section, a new branch is created to isolate changes. After implementing changes, the branch is pushed to the remote repository on GitLab. On GitLab, a merge request is created to merge the changes into the main project01 branch. After successful merging, the local project01 branch is updated by switching to it and using git pull to fetch and integrate changes from the remote repository. This cycle is repeated for each section of the project, ensuring a systematic and collaborative development process.

The project is hosted on GitLab, providing a collaborative environment where changes are tracked, and branches are merged systematically. The modular structure of the code enhances maintainability and allows for easier future development.

