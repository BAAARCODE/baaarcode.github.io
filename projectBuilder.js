var projectcontainer = document.getElementById("project-container");

for (var i = 0; i < projects.length; i++)
{
    addProject(projects[i]);
    console.log(projects[i].projectname);
}

function addProject(projectInfo)
{
    var template = [];

    var projectname = projectInfo.projectname;
    var imagename = projectInfo.imagename;
    var description = projectInfo.description;
    var techstack = projectInfo.techstack;
    var pagesurl = projectInfo.pagesurl;
    var repourl = projectInfo.repourl;

    template[0] = `
        <div class="project">
    `
    if (pagesurl != "")
        template[1]= `
            <a href="${pagesurl}">

        `;
    else
        template[1] = `
            <a href="${repourl}">

        `;
    template[2] = `
                <img src="images/${imagename}.png">
            </a>
            <div class="spacer">
    `;
    if (pagesurl != "")
        template[3]= `
            <a href="${pagesurl}">

        `;
    else
        template[3] = `
            <a href="${repourl}">

        `;
    template[4] = `
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
        template[5] = `
                <a href="${pagesurl}">
                    <div class="buttondiv">
                        Website
                    </div>
                </a>
        `;
    else
        template[5] = "";

    if (repourl != "")
        template[6] = `
                <a href="${repourl}">
                    <div class="buttondiv">
                        GitHub
                    </div>
                </a>
        `;
    else
        template[6] = "";

    template[7] = `
            </div>
        </div>
    `;

    projectcontainer.innerHTML = projectcontainer.innerHTML + template.join("");
}
