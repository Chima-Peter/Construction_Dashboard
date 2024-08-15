# Construction Management Dashboard

## Overview

The Construction Management Dashboard is a comprehensive web application designed to streamline the management of construction projects. It provides functionalities to add, edit, and view construction projects, offering real-time insights into project progress, resource allocation, and budget tracking.
You can view the live demo of the application [here][https://chima-peter.github.io/Seamless/].

## Features

- **Add Project**: 
  - Form for entering project details, including project name, budget, start and end dates, and resources.
  - Validation to ensure all required fields are completed accurately.
  - Dispatches actions to update the state with new project data.

- **Edit Project**: 
  - Retrieves and displays existing project details for editing.
  - Allows users to update project information, including budget and resources.
  - Validates and updates the project information in the state.

- **View Project**: 
  - Displays detailed information about each project.
  - Shows real-time data on project progress, resource allocation, and budget tracking.
  - Provides visual representations through charts and graphs.

## Technologies

- **Frontend**:
  - **React**: Used for building the user interface and managing state.
  - **Redux Toolkit**: Utilized for state management with slices for adding, editing, and viewing projects.
  - **TypeScript**: Ensures type safety and enhances development productivity.
  - **Recharts**: Library for creating charts and visualizing data.

- **Styling**:
  - **Tailwind CSS**: Used for styling components and ensuring responsive design.


  ## Usage

### Add Project

1. **Navigate to the "Add Project" Page**
   - Open your browser and go to the "Add" page of the application.

2. **Fill Out the Project Form**
   - **Project Name**: Enter a descriptive name for your project.
   - **Budget**: Specify the total budget allocated for the project in millions.
   - **Start Date**: Select the project's start date from the date picker.
   - **End Date**: Choose the project's end date from the date picker.
   - **Resources**: Add details for any resources required for the project, such as materials or manpower.

3. **Submit the Form**
   - Click the "Submit" button to save the new project. The project will be added to the list of projects and can be viewed or edited later.

### Edit Project

1. **Navigate to the "Edit Project" Page**
   - Go to the "Edit Project" page where you can modify existing project details.

2. **Select a Project to Edit**
   - Choose a project from the list that you want to edit. You can search for the project by name or ID.

3. **Modify Project Details**
   - Update the project information as needed:
     - **Project Name**: Change the project name if necessary.
     - **Budget**: Adjust the project's budget if there are changes.
     - **Start Date**: Modify the start date if the project has been rescheduled.
     - **End Date**: Update the end date if the project timeline has changed.
     - **Resources**: Edit the details of resources, including quantity and spent amounts.

4. **Save Changes**
   - Click the "Save" button to apply the changes. The updated project information will be reflected in the project list and details.

### View Project

1. **Navigate to the "View Project" Page**
   - Access the "View Project" page to review detailed information about a specific project.

2. **Select a Project to View**
   - Choose a project from the list to view its details. You can use filters or search functionality to find the project.

3. **Review Project Information**
   - Check the detailed information about the selected project, including:
     - **Project Progress**: View the current progress of the project, usually represented as a percentage.
     - **Resource Allocation**: See how resources are distributed and utilized within the project.
     - **Budget Tracking**: Review the budget status, including total budget and spent amount.

4. **Visualize Data**
   - Explore visual representations such as charts and graphs that provide insights into project progress, resource usage, and budget expenditure.

By following these steps, you can effectively manage your construction projects using the dashboard application.


[https://chima-peter.github.io/Seamless/]: https://chima-peter.github.io/Seamless/