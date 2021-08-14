
function genHTML() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="dist/style.css" />
    <title>Team Employees</title>
</head>
<body>
    <header class="team-heading">
        <h1>My New Team</h1>
    </header>
<main class="team-area">
`
}

function genManager(payload) {
    return `
<div class="employee-card">
    <h3>${payload.constructor.name}</h3>
    <h3>${payload.name}</h3>
    
<div class="card-body">
<ul class="list-group-item">
    <li>ID: ${payload.id}</li>
    <li>Email: <a href="mailto:${payload.email}">${payload.email}</a></li>
    <li>Office Number: ${payload.officeNumber}</li>
</ul>
</div>
</div>
`
}

function genEngineer(payload) {
    return `
<div class="employee-card">
<h3>${payload.constructor.name}</h3>
<h3>${payload.name}</h3>
    
<div class="card-body">
<ul class="list-group-item">
    <li>ID: ${payload.id}</li>
    <li>Email: <a href="mailto:${payload.email}">${payload.email}</a></li>
    <li>Github: <a href="https://github.com/${payload.github}" target="_blank">${payload.github}</a></li>    </ul>
</div>
</div>
`
}

function genIntern(payload) {
    return `
<div class="employee-card">
<h3>${payload.constructor.name}</h3>
<h3>${payload.name}</h3>
    
<div class="card-body">
<ul class="list-group-item">
    <li>ID: ${payload.id}</li>
    <li>Email: <a href="mailto:${payload.email}">${payload.email}</a></li>
    <li>School: ${payload.school}</li>
</ul>
</div>
</div>
`
}

function genEnd() {
    return `
</main>
</body>
</html>
    `
}

module.exports = {
    genHTML,
    genManager,
    genEngineer,
    genIntern,
    genEnd
};