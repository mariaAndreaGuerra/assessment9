### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? is like a map for your React app. It helps you navigate between different parts of your app without having to reload the whole page. It keeps your app organized and makes it feel more like a native app, with smooth transitions between pages.

- What is a single page application? is a website that loads once in the browser and then dynamically updates as the user interacts with it, without needing to reload the entire page. It feels more like using a desktop or mobile app because it's faster and smoother since it only fetches the data it needs, making the user experience more seamless.

- What are some differences between client side and server side routing? Client-side routing happens in the browser, where the navigation is handled locally without needing to ask the server for every new page. This makes it faster because it doesn't reload the whole page each time, just the necessary parts. Server-side routing, on the other hand, means that every time you click a link or navigate to a new page, the server sends a completely new page to the browser. This can be slower because it requires the server to generate and send a new page each time.

- What are two ways of handling redirects with React Router? When would you use each? Declarative Redirects: This involves using the Redirect component provided by React Router to specify the target location to redirect to. You would use this method when you want to conditionally redirect users based on certain criteria, such as authentication status or user role. Programmatic Redirects: This involves using the history object provided by React Router to programmatically navigate to a new location. You would use this method when you need to redirect users based on some action or event that occurs within your application logic.

- What are two different ways to handle page-not-found user experiences using React Router? "Page Not Found" component and then use a redirect to this route when none of the other routes match the requested URL. You can also define a catch-all route at the end of your route configuration that matches any URL that hasn't been matched by previous routes. You then render your "Page Not Found" component in this route.

- How do you grab URL parameters from within a component using React Router? you can use the useParams() hook provided by react-router-dom. 

- What is context in React? When would you use it? You would use context in React when you have data that needs to be accessed by multiple components at different levels of your component tree. It allows you to create a global state that can be accessed by any component in your application.

- Describe some differences between class-based components and function components in React: Function components are becoming more popular due to their simplicity, performance benefits, and the introduction of hooks, which provide a more functional way to manage state and side effects.

- What are some of the problems that hooks were designed to solve? hooks were introduced to streamline the development experience, improve code maintainability, and address common pain points associated with class components in React.