const projectsData = [
    {
        title: 'Material UI Dashboard',
        description: 'Material UI demo dashboard',
        techStack: 'Front End: React app using MaterialUI styling and Nivo.js charts',
        imgSrc: '/static/images/materialui_dashboard.png',
        github: 'https://github.com/patrickcash/materialui-dashboard',
        demo: 'https://materialui-dashboard-pc.netlify.app/'
    },
    {
        title: 'Book Mark',
        description: 'MERN app that allows usrs to bookmark their favorite boots, includes search by title text and tags',
        techStack: 'Full Stack MERN: MongoDB database, Express backend, React with Redux frontend, running in a Node environment, using MaterialUI styling ',
        imgSrc: '/static/images/bookmark.png',
        github: 'https://github.com/patrickcash/book-mark',
        demo: 'https://bookmark-pc.herokuapp.com/'
    },
    {
        title: 'Pixabay Photo Search',
        description: 'Simple search UI for Pixabay photo service API',
        techStack: 'Front End: React app with MaterialUI Styling',
        imgSrc: '/static/images/photo_search.png',
        github: 'https://github.com/patrickcash/photo-search',
        demo: 'https://pixabay-photo-search.netlify.app'
    },
    {
        title: 'Point Of Interest App',
        description: 'App allows users to store points of interest on a map by selecting the location and adding a title, review and rating',
        techStack: 'Full Stack MERN: MongoDB database, Express backend, React frontend, running in a Node environment. Also uses MapBox for map UI',
        imgSrc: '/static/images/point_of_interest_app.png',
        github: 'https://github.com/patrickcash/point-of-interest-app',
        demo: 'https://poi-pc.herokuapp.com/'
    },
    {
        title: 'Really',
        description: 'Demo realty site that allows users to view listings, search by criteria such as number of bedrooms, bathrooms, sqft, etc. and contact the realtors',
        techStack: 'Full Stack: React and Redux frontend with Sass styling. Django and Django Rest Framework backend with PostgreSQL database.',
        imgSrc: '/static/images/really.png',
        github: 'https://github.com/patrickcash/Really',
        demo: 'https://really-pc.herokuapp.com/'
    },
    {
        title: 'Devcord',
        description: 'Discord inspired chat app for software developers',
        techStack: 'Full Stack: Django with custom CSS and PostgreSQL database',
        imgSrc: '/static/images/devcord.png',
        github: 'https://github.com/patrickcash/devcord',
        demo: 'https://devcord.herokuapp.com/'
    },
    {
        title: 'Tailwind Photo Search',
        description: 'Simple search UI for Pixabay photo service',
        techStack: 'Front End: React app with TailwindCSS styling',
        imgSrc: '/static/images/tailwind_photo_search.png',
        github: 'https://github.com/patrickcash/tailwind-photo-search',
        demo: 'https://tailwind-photo-search.netlify.app'
    },
    {
        title: 'NLP Library Comparison',
        description: 'App compares the output of popular NLP libraries for sentiment analysis, named entity recognition and summarization',
        techStack: 'Full Stack: Flask app with Bootstap styling. Uses TextBlob(NLTK), SpaCy, VADER and Gensim python NLP libraries',
        imgSrc: '/static/images/nlp_library_comparison_app.png',
        github: 'https://github.com/patrickcash/nlp-library-comparison-app',
        demo: 'https://nlp-library-comparison.herokuapp.com/'
    },
    {
        title: 'Chatbot',
        description: 'Chatbot using the chatterbot library and their predefined corpus',
        techStack: 'Full Stack: React frontend with the React Chatbot Kit library. Flask backend with the Chatterbot NLP library',
        imgSrc: '/static/images/chatbot.png',
        github: 'https://github.com/patrickcash/chatbot',
        demo: null
    },
    {
        title: 'React Dashboard',
        description: 'Custom built demo dashboard',
        techStack: 'Front End: React app using custom styling and Chart.js',
        imgSrc: '/static/images/react_dashboard.png',
        github: 'https://github.com/patrickcash/react-dashboard',
        demo: 'https://react-dashboard-pc.netlify.app'
    },
    {
        title: 'Research Wrangler',
        description: 'Researcher bookmark app that allows users to search for academic publications and bookmark them later',
        techStack: 'Full Stack: React and Redux frontend with Bootstrap styling. Django and Django Rest Framework backend with PostgreSQL database.',
        imgSrc: '/static/images/research_wrangler.png',
        github: 'https://github.com/patrickcash/research-wrangler',
        demo: null
    },
    {
        title: 'Delicious Django',
        description: 'del.icio.us inspired bookmark manager',
        techStack: 'Full Stack: Django with Bootstrap styling',
        imgSrc: '/static/images/delicious_django.png',
        github: 'https://github.com/patrickcash/delicious-django',
        demo: null
    },
    {
        title: 'This site',
        description: 'The portfolio site you are currently viewing',
        techStack: 'Front End: Next.js app using TailwindCSS styling',
        imgSrc: '/static/images/patrickcash_link.png',
        github: 'https://github.com/patrickcash/nextjs-portfolio',
        demo: 'https://www.patrickcash.link/'
    },
    {
        title: 'Marketing Copy Generator',
        description: 'Application that takes some inputs and uses ChatGPT to generate marketing copy',
        techStack: 'Front End: Next.js app that uses ChatGPT API',
        imgSrc: '/static/images/nextjs_marketing_copy_generator.png',
        github: 'https://github.com/patrickcash/nextjs-chatgpt',
        demo: 'https://nextjs-chatgpt-pc.netlify.app/'
    },
    {
        title: 'Weather App',
        description: 'Mobile application that displays current weather and a forecast for the next 5 days',
        techStack: 'Front End: React Native using the OpenWeatrher API',
        imgSrc: '/static/images/react_native_weather_app.png',
        github: 'https://github.com/patrickcash/react-native-weather-app',
        demo: null
    },
    {
        title: 'Review Generator',
        description: 'Mobile application that takes some inputs and uses ChatGPT to generate a review',
        techStack: 'Front End: React Native app with Native Base styling / components that uses ChatGPT API',
        imgSrc: '/static/images/react_native_review_generator.png',
        github: 'https://github.com/patrickcash/react-native-chatpgt',
        demo: null
    },
]

export default projectsData