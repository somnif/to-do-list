import { format, add } from "date-fns"


const trialTasksString = `[
    {
      "title": "Trial Task",
      "description": "This is a trial task that should have today's date. It will be assigned a medium priority, and have no project,",
      "dueDate": "${format(Date.now(),"yyyy-MM-dd")}",
      "priority": "task-low",
      "id": "87e1c391-1f35-414c-9567-2efd608079a6",
      "completed": false,
      "project": ""
    },
    {
      "title": "I'm a task in a project!",
      "description": "Hey there! If you're looking at this item description, you'll see that I've been assigned to a project.",
      "dueDate": "${format(Date.now(),"yyyy-MM-dd")}",
      "priority": "task-critical",
      "id": "ff5dbf6b-8e8c-43ea-b4dd-5eba29b74c84",
      "completed": false,
      "project": "Odin Projects"
    },
    {
      "title": "Eat Dinner Tonight",
      "description": "Also pretty critical. Food is energy for your coding fingers!",
      "dueDate": "${format(Date.now(),"yyyy-MM-dd")}",
      "priority": "task-critical",
      "id": "8a69b719-b35a-4dbe-9638-84996a4df49a",
      "completed": false,
      "project": "Self-Help"
    },
    {
      "title": "Go for a Run!",
      "description": "You should go for a run. Very healthy! Much exersize!",
      "dueDate": "${format(Date.now(),"yyyy-MM-dd")}",
      "priority": "task-low",
      "id": "5991e495-729f-4637-b64f-71d40192f861",
      "completed": false,
      "project": "Self-Help"
    },
    {
      "title": "Buy a new Laptop!",
      "description": "I've lost a critical task somewhere. Help me!",
      "dueDate": "${format(add(Date.now(), {days: 3}), "yyyy-MM-dd")}",
      "priority": "task-critical",
      "id": "cd5604a1-59f4-41e2-9c49-ff88b9a578bb",
      "completed": false,
      "project": ""
    },
    {
        "title": "Ahead of the Game",
        "description": "I'm due in a week - but you've already done me!",
        "dueDate": "${format(add(Date.now(), {days: 4}), "yyyy-MM-dd")}",
        "priority": "task-medium",
        "id": "jkjkhuk-59f4-41e2-9c49-ff88b9a578bb",
        "completed": true,
        "project": ""
      },
      {
        "title": "Too Good!",
        "description": "And me, I'm complete also :)",
        "dueDate": "${format(add(Date.now(), {days: 5}), "yyyy-MM-dd")}",
        "priority": "task-low",
        "id": "afwafwaf-59f4-41e2-9c49-ff88b9a578bb",
        "completed": true,
        "project": ""
      }
  ]`

const trialTasks = trialTasksString;
console.log(trialTasks)

const trialProjects = `[
    {
      "name": "Odin Projects",
      "id": "10140e55-3e0a-4ca5-a972-4ef2bf42ebcb"
    },
    {
      "name": "Self-Help",
      "id": "5c1863fd-e301-4973-9446-1bbf177f158e"
    }
  ]`

export { trialProjects, trialTasks }