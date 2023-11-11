function addProject() {
    const projectName = document.getElementById('project-name').value;
    const assignee = document.getElementById('assignee').value;
    const dateAssigning = document.getElementById('date-assigning').value;
    const deadlineDate = document.getElementById('deadline-date').value;
    const comment = document.getElementById('comment').value;

    if (projectName && assignee && dateAssigning && deadlineDate) {
        const projectList = document.getElementById('project-list').querySelector('ul');
        const newProject = document.createElement('li');
        newProject.className = 'project';
        newProject.innerHTML = `
            <span>${projectName}</span>
            <span>Assigned to: ${assignee}</span>
            <span>Date of Assigning: ${dateAssigning}</span>
            <span>Deadline Date: ${deadlineDate}</span>
            <span>Comment: ${comment}</span>
            <button onclick="removeProject(this)">Remove Project</button>
        `;
        projectList.appendChild(newProject);

        // Clear input fields
        document.getElementById('project-name').value = '';
        document.getElementById('assignee').value = '';
        document.getElementById('date-assigning').value = '';
        document.getElementById('deadline-date').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Please fill out all required fields');
    }
}

function removeProject(button) {
    const projectItem = button.parentElement;
    projectItem.remove();
}