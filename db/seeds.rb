course = Course.create(title: 'Hello World', description: 'Create a React App with Rails')

section = Section.create(title: 'Chapter 1', course: course)

episodes = Episode.create([

        { title: '1. Setting up a new Ruby on Rails App with React.', description: 'lorem', url: 'https://www.youtube.com/embed/OUHVRWdVQCI', section: section },
        { title: '2. Adding React to an Existing Rails App.', description: 'lorem', url: 'https://www.youtube.com/embed/OUHVRWdVQCI', section: section },
        { title: '3. Building a Hello World App.', description: 'lorem', url: 'https://www.youtube.com/embed/OUHVRWdVQCI', section: section },
        { title: '4. Adding React Router Dom to your App.', description: 'lorem', url: 'https://www.youtube.com/embed/OUHVRWdVQCI', section: section },
])
