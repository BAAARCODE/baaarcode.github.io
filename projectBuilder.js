var projectcontainer = document.getElementById("project-container");

for (var i = 0; i < projects.length; i++)
{
    addProject(projects[i]);
    console.log(projects[i].projectname);
}

function addProject(projectInfo)
{
    var templateFirst, templatePagesUrl, templateRepoUrl, templateEnd;

    var projectname = projectInfo.projectname;
    var imagename = projectInfo.imagename;
    var description = projectInfo.description;
    var techstack = projectInfo.techstack;
    var pagesurl = projectInfo.pagesurl;
    var repourl = projectInfo.repourl;

    templateFirst = `
        <div class="project">
            <a href="${pagesurl}">
                <img src="images/${imagename}.png">
            </a>
            <div class="spacer">
                <a href="${pagesurl}">
                    <div class="project-title">${projectname}</div>
                </a>
                <div>${techstack}</div>
            </div>
            <div class="project-description">
                ${description}
            </div>
            <div class="spacer" style="margin-top: 0.5em; justify-content: right; column-gap: 0.3em;">
    `;

    if (pagesurl != "")
        templatePagesUrl = `
                <a href="${pagesurl}">
                    <div class="buttondiv">
                        Website
                    </div>
                </a>
        `;
    else
        templatePagesUrl = "";

    if (repourl != "")
        templateRepoUrl = `
                <a href="${repourl}">
                    <div class="buttondiv">
                        GitHub
                    </div>
                </a>
        `;
    else
        templateRepoUrl = "";

    templateEnd = `
            </div>
        </div>
    `;

    projectcontainer.innerHTML = projectcontainer.innerHTML + templateFirst + templatePagesUrl + templateRepoUrl + templateEnd;
}
