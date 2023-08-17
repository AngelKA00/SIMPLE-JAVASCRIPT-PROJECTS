const blogs = [
    {
        title: "Nature Blog",
        author: "Kanmani",
        date: "2023-07-14",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida euismod elit, vitae consectetur ligula auctor id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida euismod elit, vitae consectetur ligula auctor id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida euismod elit, vitae consectetur ligula auctor id.",
        tags: ["nature", "trees"],
    },
    {
        title: "Food Blog ",
        author: "Angel",
        date: "2023-07-14",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida euismod elit, vitae consectetur ligula auctor id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida euismod elit, vitae consectetur ligula auctor id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida euismod elit, vitae consectetur ligula auctor id.",
        tags: ["foods", "restaurant"],
    },
    ];

    // Function to generate a random blog post
    function generateBlog() {
    const randomIndex = Math.floor(Math.random() * blogs.length);
    const blog = blogs[randomIndex];
    
    document.getElementById("title").textContent = blog.title;
    document.getElementById("author").textContent = blog.author;
    document.getElementById("date").textContent = blog.date;
    document.getElementById("content").textContent = blog.content;
    document.getElementById("tags").textContent = "Tags: " + blog.tags.join(", ");
    }

    // Event listener for the Generate Blog button
    const generateBtn = document.getElementById("generateBtn");
    generateBtn.addEventListener("click", generateBlog);

    // Generate a blog post on page load
    //generateBlog();